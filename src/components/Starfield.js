import React from 'react';
import Particles from './Particles';

const Starfield = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-space-950 overflow-hidden">
      <div className="absolute inset-0" style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
          className="absolute inset-0"
        />
      </div>


      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-nebula-500/10 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent opacity-60" />
    </div>
  );
};

export default React.memo(Starfield);
