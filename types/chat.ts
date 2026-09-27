export interface LabChatRequest {
  question: string;
}

export interface LabChatSource {
  label: string;
  href: string;
}

export interface LabChatResponse {
  answer: string;
  sources: LabChatSource[];
}

export interface LabChatErrorResponse {
  error: string;
}
