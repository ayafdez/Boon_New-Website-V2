'use client';

import { useState } from 'react';

export function FounderVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="aspect-video bg-[#2E353D] rounded-[40px] shadow-2xl relative overflow-hidden group cursor-pointer border border-white/5">
      {isPlaying ? (
        <video
          src="https://storage.googleapis.com/boon-public-assets/the_boon_story.mp4"
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 flex flex-col items-center justify-center text-white/20 font-black text-sm uppercase tracking-widest group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#466FF6]/20 to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-[#466FF6] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-white text-[11px] tracking-[0.3em]">Founder Story: Alex Simmons</span>
          </div>
        </div>
      )}
    </div>
  );
}
