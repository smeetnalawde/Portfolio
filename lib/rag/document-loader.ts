let cachedDocument: string | null = null;

export async function loadResumeDocument(): Promise<string> {
  if (cachedDocument) return cachedDocument;

  try {
    // Use absolute URL for server-side requests
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/resume`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to load resume: ${response.statusText}`);
    }
    
    const data = await response.json();
    if (!data.content) {
      throw new Error('No content returned from resume API');
    }
    
    const content = data.content;
    if (typeof content !== 'string') {
      throw new Error('Invalid content type received from API');
    }
    
    cachedDocument = content;
    return content;
  } catch (error) {
    console.error('Error loading resume:', error);
    throw new Error('Failed to load resume data. Please try again later.');
  }
}
