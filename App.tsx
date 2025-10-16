import React, { useState, useEffect, useCallback } from 'react';
import { User, Note, ModalType } from './types';
import { USERS, NOTES } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import NoteList from './components/NoteList';
import HeroSection from './components/HeroSection';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import UploadModal from './components/UploadModal';
import ContactModal from './components/ContactModal';
import Watermark from './components/Watermark';
import Background3D from './components/Background3D';
import AuroraBackground from './components/AuroraBackground';


const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [notes, setNotes] = useState<Note[]>(NOTES);
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  // Disable right-click and copy/paste
  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();
    const disableCopyPaste = (e: ClipboardEvent) => e.preventDefault();

    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('copy', disableCopyPaste);
    document.addEventListener('cut', disableCopyPaste);
    document.addEventListener('paste', disableCopyPaste);

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('copy', disableCopyPaste);
      document.removeEventListener('cut', disableCopyPaste);
      document.removeEventListener('paste', disableCopyPaste);
    };
  }, []);

  const handleLogin = useCallback((email: string, pass: string): boolean => {
    const user = USERS.find(u => u.email === email && u.password === pass);
    if (user) {
      setCurrentUser(user);
      setActiveModal(null);
      return true;
    }
    return false;
  }, []);

  const handleSignup = useCallback((name: string, email: string, pass: string): boolean => {
    if (USERS.some(u => u.email === email)) {
      return false; // User already exists
    }
    const newUser: User = { id: USERS.length + 1, name, email, password: pass };
    USERS.push(newUser); // In a real app, this would be an API call
    setCurrentUser(newUser);
    setActiveModal(null);
    return true;
  }, []);

  const handleLogout = useCallback(() => {
    setCurrentUser(null);
  }, []);

  const addNote = useCallback((note: Omit<Note, 'id' | 'uploadedAt' | 'uploaderId' | 'uploaderName'>) => {
    if (!currentUser) return;
    const newNote: Note = {
      ...note,
      id: notes.length + 1,
      uploadedAt: new Date().toISOString(),
      uploaderId: currentUser.id,
      uploaderName: currentUser.name,
    };
    setNotes(prevNotes => [newNote, ...prevNotes]);
    setActiveModal(null);
  }, [currentUser, notes.length]);

  const deleteNote = useCallback((noteId: number) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId));
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0a15] text-gray-200 font-sans relative overflow-hidden">
      <AuroraBackground />
      <Background3D />
      <Watermark />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          currentUser={currentUser}
          onLogout={handleLogout}
          onLoginClick={() => setActiveModal('login')}
          onSignupClick={() => setActiveModal('signup')}
          onUploadClick={() => setActiveModal('upload')}
        />
        <main className="flex-grow container mx-auto px-4 py-8">
           {currentUser ? (
            <NoteList notes={notes} currentUser={currentUser} onDelete={deleteNote} />
          ) : (
            <HeroSection onSignupClick={() => setActiveModal('signup')} />
          )}
        </main>
        <Footer onContactClick={() => setActiveModal('contact')} />
      </div>

      {activeModal === 'login' && <LoginModal onClose={() => setActiveModal(null)} onLogin={handleLogin} />}
      {activeModal === 'signup' && <SignupModal onClose={() => setActiveModal(null)} onSignup={handleSignup} />}
      {activeModal === 'upload' && currentUser && <UploadModal onClose={() => setActiveModal(null)} onAddNote={addNote} />}
      {activeModal === 'contact' && <ContactModal onClose={() => setActiveModal(null)} />}
    </div>
  );
};

export default App;