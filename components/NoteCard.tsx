import React from 'react';
import { Note, User } from '../types';

interface NoteCardProps {
  note: Note;
  currentUser: User | null;
  onDelete: (noteId: number) => void;
}

const FileIcon: React.FC<{ fileType: string }> = ({ fileType }) => {
    const iconClass = "w-6 h-6 mr-2 text-purple-400";
    if (fileType.includes('pdf')) return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
    if (fileType.includes('word')) return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
    return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>;
}


const NoteCard: React.FC<NoteCardProps> = ({ note, currentUser, onDelete }) => {
  const canEdit = currentUser?.id === note.uploaderId;

  return (
    <div className="bg-black/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/20 transform hover:-translate-y-2 flex flex-col">
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-purple-400 mb-2">{note.title}</h3>
            {canEdit && (
                <button onClick={() => onDelete(note.id)} className="text-gray-500 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            )}
        </div>
        <p className="text-sm font-semibold text-gray-400 mb-3">{note.college}</p>
        <p className="text-gray-300 text-sm leading-relaxed select-none">{note.content}</p>
      </div>
      <div className="bg-black/20 px-5 py-3 rounded-b-xl border-t border-white/10">
        <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
                <FileIcon fileType={note.fileType} />
                <span className="font-mono">{note.fileName}</span>
            </div>
            <span>by {note.uploaderName}</span>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;