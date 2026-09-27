export type LabChatRole = 'user' | 'assistant';

export interface LabChatMessage {
  role: LabChatRole;
  content: string;
}

export interface LabChatRequest {
  question: string;
  history?: LabChatMessage[];
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
