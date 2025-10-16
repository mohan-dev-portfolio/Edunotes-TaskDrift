
import React from 'react';

const Watermark: React.FC = () => {
  const watermarkText = "TaskDrift";
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -inset-96 opacity-5">
            <div 
                className="absolute inset-0 transform -rotate-45"
                style={{
                    fontSize: '4rem',
                    color: 'rgba(255, 255, 255, 0.2)',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    lineHeight: '200px',
                    background: `linear-gradient(transparent 99px, rgba(255,255,255,0.1) 100px),
                                 linear-gradient(90deg, transparent 99px, rgba(255,255,255,0.1) 100px)`,
                    backgroundSize: '100px 100px',
                }}
            >
                {Array(50).fill(null).map((_, i) => (
                    <div key={i} className="flex justify-around">
                        {Array(20).fill(watermarkText).map((text, j) => <span key={j} className="mx-8">{text}</span>)}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Watermark;
