import React from 'react';

const AuroraBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Glow 1 */}
        <div 
          className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"
          style={{ animation: 'moveInCircle 8s reverse infinite' }}
        ></div>
        {/* Glow 2 */}
        <div 
          className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"
           style={{ animation: 'moveInCircle 12s linear infinite' }}
        ></div>
        {/* Glow 3 */}
        <div 
          className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"
          style={{ animation: 'moveVertical 10s linear infinite' }}
        ></div>
         {/* Glow 4 */}
        <div 
          className="absolute -bottom-8 right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"
           style={{ animation: 'moveHorizontal 15s linear infinite' }}
        ></div>
      </div>
    </div>
  );
};

export default AuroraBackground;