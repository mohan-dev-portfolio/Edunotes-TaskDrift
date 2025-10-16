import React, { useState, useMemo } from 'react';
import { Note, User } from '../types';
import NoteCard from './NoteCard';

interface NoteListProps {
  notes: Note[];
  currentUser: User;
  onDelete: (noteId: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, currentUser, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCollege, setFilterCollege] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewFilter, setViewFilter] = useState('all'); // 'all' or 'my'

  const colleges = useMemo(() => [...new Set(notes.map(note => note.college))], [notes]);

  const filteredAndSortedNotes = useMemo(() => {
    return notes
      .filter(note => {
        if (viewFilter === 'my') {
          return note.uploaderId === currentUser.id;
        }
        return true;
      })
      .filter(note => 
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(note => 
        filterCollege === '' || note.college === filterCollege
      )
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
        }
        if (sortBy === 'oldest') {
          return new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime();
        }
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [notes, searchTerm, filterCollege, sortBy, viewFilter, currentUser.id]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
          Browse Notes
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Search, filter, and sort through the collective knowledge of your peers.
        </p>
      </div>

      <div className="bg-black/20 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800/50 text-white placeholder-gray-400 rounded-lg px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />
          <select
            value={filterCollege}
            onChange={e => setFilterCollege(e.target.value)}
            className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          >
            <option value="">All Colleges</option>
            {colleges.map(college => (
              <option key={college} value={college}>{college}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          >
            <option value="newest">Sort by Newest</option>
            <option value="oldest">Sort by Oldest</option>
            <option value="title">Sort by Title</option>
          </select>
        </div>
        <div className="flex items-center space-x-2 pt-4 border-t border-white/10">
            <span className="text-gray-400 font-semibold text-sm">Show:</span>
            <button 
                onClick={() => setViewFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                    viewFilter === 'all' 
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70'
                }`}
            >
                All Notes
            </button>
            <button 
                onClick={() => setViewFilter('my')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                    viewFilter === 'my' 
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70'
                }`}
            >
                My Notes
            </button>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedNotes.map(note => (
          <NoteCard key={note.id} note={note} currentUser={currentUser} onDelete={onDelete} />
        ))}
      </div>
       {filteredAndSortedNotes.length === 0 && (
         <div className="text-center py-16 col-span-full">
            <p className="text-gray-400 text-lg">No notes found. Try adjusting your filters or upload a new note!</p>
        </div>
       )}
    </div>
  );
};

export default NoteList;