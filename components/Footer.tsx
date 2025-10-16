import React from 'react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-black/20 backdrop-blur-lg mt-8 py-4 border-t border-white/10">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} TaskDrift. All rights reserved.</p>
        <p>
          Right-click and copy-paste functions are disabled for content protection.
        </p>
        <button onClick={onContactClick} className="text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-2 font-semibold">
          Contact Developer
        </button>
      </div>
    </footer>
  );
};

export default Footer;