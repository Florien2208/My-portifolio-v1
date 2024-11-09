// src/types/contact.types.ts
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: "pending" | "replied";
}
