
import { User, Note } from './types';

export const USERS: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', password: 'password123' },
  { id: 2, name: 'Bob Williams', email: 'bob@example.com', password: 'password123' },
];

export const NOTES: Note[] = [
  {
    id: 1,
    title: 'Introduction to Quantum Physics',
    college: 'Stanford University',
    content: 'This document covers the basics of quantum mechanics, including wave-particle duality and the Schrödinger equation...',
    fileName: 'quantum_physics_intro.pdf',
    fileType: 'application/pdf',
    uploaderId: 1,
    uploaderName: 'Alice Johnson',
    uploadedAt: '2023-10-26T10:00:00Z',
  },
  {
    id: 2,
    title: 'Calculus II Final Exam Review',
    college: 'MIT',
    content: 'A comprehensive review sheet for the Calculus II final exam, focusing on integration techniques and series.',
    fileName: 'calc_2_review.docx',
    fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    uploaderId: 2,
    uploaderName: 'Bob Williams',
    uploadedAt: '2023-10-25T14:30:00Z',
  },
  {
    id: 3,
    title: 'History of Ancient Rome',
    college: 'Harvard University',
    content: 'Lecture notes from HIST 101, detailing the rise and fall of the Roman Empire.',
    fileName: 'ancient_rome_notes.txt',
    fileType: 'text/plain',
    uploaderId: 1,
    uploaderName: 'Alice Johnson',
    uploadedAt: '2023-10-24T09:15:00Z',
  },
   {
    id: 4,
    title: 'Data Structures & Algorithms',
    college: 'MIT',
    content: 'Notes on common data structures like linked lists, trees, and graphs, along with algorithm analysis.',
    fileName: 'dsa_notes.pdf',
    fileType: 'application/pdf',
    uploaderId: 2,
    uploaderName: 'Bob Williams',
    uploadedAt: '2023-10-28T11:00:00Z',
  },
];
