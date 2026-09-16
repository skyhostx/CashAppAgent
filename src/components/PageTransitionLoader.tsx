import React from 'react';

interface PageTransitionLoaderProps {
  isLoading: boolean;
  targetPage?: string;
  progress: number;
}

export const PageTransitionLoader: React.FC<PageTransitionLoaderProps> = ({
  isLoading,
  progress
}) => {
  if (!isLoading && progress === 0) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/30 overflow-hidden pointer-events-none"
      style={{ opacity: isLoading ? 1 : 0, transition: 'opacity 0.2s ease' }}
    >
      <div
        className="h-full bg-gradient-to-r from-[#00A827] via-[#00D632] to-[#00FF50] shadow-[0_0_12px_#00D632]"
        style={{
          width: `${progress}%`,
          transition: 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
    </div>
  );
};

