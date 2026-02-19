'use client';

import { useState, useEffect } from 'react';
import { Analytics } from '@/components/Analytics';

type ConsentStatus = 'pending' | 'accepted' | 'declined';

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>('pending');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('cookie-consent');
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
  }

  function handleDecline() {
    localStorage.setItem('cookie-consent', 'declined');
    setConsent('declined');
  }

  if (!mounted) return null;

  return (
    <>
      {consent === 'accepted' && <Analytics />}

      {consent === 'pending' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              We use cookies to understand how you use our site and improve your experience.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 text-sm font-bold text-white bg-[#466FF6] rounded-lg hover:bg-blue-700 transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
