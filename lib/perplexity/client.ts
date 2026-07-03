type Role = "system" | "user" | "assistant";

interface PplxMessage {
  role: Role;
  content: string;
}

export async function callPerplexity(
  messages: PplxMessage[],
  model = "sonar"
): Promise<string> {
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!apiKey) throw new Error("PERPLEXITY_API_KEY not set");

  // Add timeout controller
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

  try {
    const res = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.0,
        max_tokens: 400,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Perplexity error ${res.status}: ${text}`);
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content ?? "";
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error("Perplexity API request timed out after 30 seconds");
    }
    throw error;
  }
}
