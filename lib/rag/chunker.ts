type Block = { text: string; header?: string };

export function chunkText(
    text: string,
    chunkSize = 800,
    overlap = 150
  ): string[] {
    // Normalize newlines and trim trailing spaces to make boundary detection easier
    const normalized = text.replace(/\r\n?/g, "\n").replace(/[\t ]+$/gm, "");

    // Split into logical blocks: headers, paragraphs, and bullet groups
    // A block is separated by at least one blank line
    const rawBlocks = normalized
      .split(/\n{2,}/)
      .map((b) => b.trim())
      .filter(Boolean);

    // Further split blocks into groups, keeping a header line glued to the
    // bullet group it immediately introduces (e.g. "Role | Company | Date"
    // followed by that role's bullets, or "Project Name" followed by its
    // bullets). This is an atomic unit: the packer below may still split it
    // across chunks if it's larger than chunkSize, but it will never end up
    // silently separated from its own header, and two different
    // roles/projects never get glued together as long as chunkSize is
    // smaller than roughly 2x the largest such unit.
    const blocks: Block[] = [];
    for (const b of rawBlocks) {
      const lines = b.split(/\n/);
      let i = 0;
      while (i < lines.length) {
        const line = lines[i];
        const isBullet = /^\s*[-•]\s+/.test(line);
        if (isBullet) {
          let j = i;
          while (j < lines.length && /^\s*[-•]\s+/.test(lines[j])) j++;
          blocks.push({ text: lines.slice(i, j).join("\n") });
          i = j;
        } else if (i + 1 < lines.length && /^\s*[-•]\s+/.test(lines[i + 1])) {
          // Non-bullet line directly followed by a bullet group: treat the
          // line as that group's header and keep them together.
          let j = i + 1;
          while (j < lines.length && /^\s*[-•]\s+/.test(lines[j])) j++;
          blocks.push({
            text: lines.slice(i, j).join("\n"),
            header: line,
          });
          i = j;
        } else {
          blocks.push({ text: line });
          i++;
        }
      }
    }

    // Now pack blocks into chunks under chunkSize, preferring to break at block boundaries.
    const chunks: string[] = [];
    let current = "";
    for (const block of blocks) {
      const candidate = current ? `${current}\n\n${block.text}` : block.text;
      if (candidate.length <= chunkSize) {
        current = candidate;
      } else {
        if (current) {
          chunks.push(current.trim());
        }
        // If a single block is bigger than chunkSize, fall back to safe slicing with soft overlap.
        // Re-attach the block's header (if any) to every slice past the first so no fragment
        // loses track of which role/project/section it belongs to.
        if (block.text.length > chunkSize) {
          let start = 0;
          let isFirstSlice = true;
          while (start < block.text.length) {
            const end = Math.min(start + chunkSize, block.text.length);
            let slice = block.text.slice(start, end).trim();
            if (block.header && !isFirstSlice && slice && !slice.startsWith(block.header)) {
              slice = `${block.header}\n${slice}`;
            }
            if (slice) chunks.push(slice);
            if (end >= block.text.length) break;
            start = Math.max(start + 1, end - overlap);
            isFirstSlice = false;
          }
          current = "";
        } else {
          current = block.text;
        }
      }
    }
    if (current) chunks.push(current.trim());

    return chunks;
  }