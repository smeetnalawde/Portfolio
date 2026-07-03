// Common words that don't add much meaning to the context
const STOP_WORDS = new Set([
  'that', 'with', 'have', 'this', 'from', 'they', 'which', 'would', 'there',
  'their', 'what', 'about', 'when', 'make', 'like', 'time', 'just', 'know',
  'take', 'into', 'your', 'good', 'some', 'could', 'them', 'other', 'than',
  'then', 'look', 'only', 'come', 'over', 'think', 'also', 'back', 'after',
  'work', 'first', 'well', 'even', 'want', 'because', 'any', 'these', 'give',
  'most', 'will', 'been', 'very', 'were', 'where', 'more', 'also', 'such'
]);

export function getRelevantChunks(
  query: string,
  chunks: string[],
  topK = 3
): string[] {
  const qTokens = tokenize(query);
  
  // Filter out stop words from query
  const filteredQueryTokens = qTokens.filter(token => !STOP_WORDS.has(token));
  
  // If no meaningful tokens left, return first few chunks
  if (filteredQueryTokens.length === 0) {
    return chunks.slice(0, topK);
  }

  const scored = chunks.map((chunk) => {
    const cTokens = tokenize(chunk);
    const chunkTokenSet = new Set(cTokens);
    
    // Calculate basic term frequency score
    let score = filteredQueryTokens.filter(t => chunkTokenSet.has(t)).length;
    
    // Boost score for exact word matches in the beginning of the chunk.
    // Uses tokenize() (word-boundary based) rather than a raw substring check,
    // so e.g. "tell" does not match inside "Intelligence" or "intelligent".
    const chunkStartTokens = new Set(tokenize(chunk.substring(0, 100)));
    if (filteredQueryTokens.some(t => chunkStartTokens.has(t))) {
      score += 2;
    }
    
    // Slight preference for longer chunks with more context
    score += Math.min(chunk.length / 1000, 1);
    
    return { chunk, score };
  });

  // Sort by score and get top K chunks
  const topChunks = scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .filter(x => x.score > 0);

  // If no chunks scored, return the first few
  if (topChunks.length === 0) {
    return chunks.slice(0, topK);
  }
  
  return topChunks.map(x => x.chunk);
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/\W+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
}
  