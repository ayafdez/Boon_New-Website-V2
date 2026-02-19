'use client';

import { useState, useEffect } from 'react';

export function DemoForm() {
  const [loaded, setLoaded] = useState(false);

  // Fallback: hide spinner after 3s even if onLoad doesn't fire
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-white">
      {/* Loading skeleton */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white z-10">
          <div className="w-8 h-8 border-2 border-gray-200 border-t-boon-blue rounded-full animate-spin" />
          <p className="text-sm font-body font-medium text-gray-400">Loading calendar...</p>
        </div>
      )}

      <iframe
        src="https://meetings.hubspot.com/anewman10/intro?uuid=8006a5e9-d494-440c-afb2-875695cafe73&embed=true"
        title="Schedule a conversation with Boon"
        className="w-full border-0"
        style={{ minHeight: '500px', height: '80vh', maxHeight: '900px' }}
        allow="fullscreen"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
