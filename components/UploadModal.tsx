import React, { useState } from 'react';
import Modal from './modals/Modal';
import { Note } from '../types';

interface UploadModalProps {
  onClose: () => void;
  onAddNote: (note: Omit<Note, 'id' | 'uploadedAt' | 'uploaderId' | 'uploaderName'>) => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose, onAddNote }) => {
  const [title, setTitle] = useState('');
  const [college, setCollege] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !college || !file) {
      setError('All fields are required.');
      return;
    }
    const newNote = {
      title,
      college,
      content: `A brief summary of the uploaded document: ${file.name}.`, // Simulated content
      fileName: file.name,
      fileType: file.type,
    };
    onAddNote(newNote);
  };

  return (
    <Modal title="Upload a New Note" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Note Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full bg-gray-800/50 text-white placeholder-gray-400 rounded-lg px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">College Name</label>
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
            className="w-full bg-gray-800/50 text-white placeholder-gray-400 rounded-lg px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Document</label>
          <input
            type="file"
            onChange={handleFileChange}
            required
            className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-500 cursor-pointer"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20"
        >
          Upload Note
        </button>
      </form>
    </Modal>
  );
};

export default UploadModal;