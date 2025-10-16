import React from 'react';

const Background3D: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      {/* Cube 1 */}
      <div className="absolute w-[100px] h-[100px] top-1/4 left-1/5">
        <div className="cube" style={{ animationDuration: '22s' }}>
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
      {/* Cube 2 */}
      <div className="absolute w-[100px] h-[100px] top-2/3 right-1/4 opacity-60">
         <div className="cube" style={{ animationDuration: '30s', animationDirection: 'reverse'}}>
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
       {/* Cube 3 - smaller */}
       <div className="absolute w-[50px] h-[50px] top-1/2 left-1/2 opacity-40">
         <div className="cube" style={{ animationDuration: '15s' }}>
          <div className="cube-face" style={{ width: 50, height: 50, transform: 'rotateY(0deg) translateZ(25px)' }}></div>
          <div className="cube-face" style={{ width: 50, height: 50, transform: 'rotateY(180deg) translateZ(25px)' }}></div>
          <div className="cube-face" style={{ width: 50, height: 50, transform: 'rotateY(90deg) translateZ(25px)'}}></div>
          <div className="cube-face" style={{ width: 50, height: 50, transform: 'rotateY(-90deg) translateZ(25px)'}}></div>
          <div className="cube-face" style={{ width: 50, height: 50, transform: 'rotateX(90deg) translateZ(25px)'}}></div>
          <div className="cube-face" style={{ width: 50, height: 50, transform: 'rotateX(-90deg) translateZ(25px)'}}></div>
        </div>
      </div>
      {/* Cube 4 - Top Right */}
      <div className="absolute w-[70px] h-[70px] top-1/5 right-1/5 opacity-50">
         <div className="cube" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
          <div className="cube-face" style={{ width: 70, height: 70, transform: 'rotateY(0deg) translateZ(35px)' }}></div>
          <div className="cube-face" style={{ width: 70, height: 70, transform: 'rotateY(180deg) translateZ(35px)' }}></div>
          <div className="cube-face" style={{ width: 70, height: 70, transform: 'rotateY(90deg) translateZ(35px)'}}></div>
          <div className="cube-face" style={{ width: 70, height: 70, transform: 'rotateY(-90deg) translateZ(35px)'}}></div>
          <div className="cube-face" style={{ width: 70, height: 70, transform: 'rotateX(90deg) translateZ(35px)'}}></div>
          <div className="cube-face" style={{ width: 70, height: 70, transform: 'rotateX(-90deg) translateZ(35px)'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Background3D;