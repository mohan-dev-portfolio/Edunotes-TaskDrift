
export interface User {
  id: number;
  name: string;
  email: string;
  password?: string; // Should not be stored in a real app's frontend state
}

export interface Note {
  id: number;
  title: string;
  college: string;
  content: string;
  fileName: string;
  fileType: string;
  uploaderId: number;
  uploaderName: string;
  uploadedAt: string;
}

export type ModalType = 'login' | 'signup' | 'upload' | 'contact';
