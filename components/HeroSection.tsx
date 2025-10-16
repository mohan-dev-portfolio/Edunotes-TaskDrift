import React from 'react';

interface HeroSectionProps {
  onSignupClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSignupClick }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-300 to-purple-400">
        Unlock Collective Knowledge
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
        TaskDrift is a modern hub for college students to share and discover notes, study guides, and resources in a secure, collaborative environment.
      </p>
      <button
        onClick={onSignupClick}
        className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-110 shadow-xl shadow-purple-500/30"
      >
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
