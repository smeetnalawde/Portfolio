export interface ChatRequest {
    message: string;
  }
  
  export interface ChatResponse {
    message: string;
    sources: string[];
    timestamp: string;
  }
  
  export interface ErrorResponse {
    error: string;
    details?: string;
  }
  