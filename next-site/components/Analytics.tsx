'use client';

import Script from 'next/script';

/**
 * Analytics Component
 *
 * Handles Google Analytics 4 integration.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local to enable.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}
      <Script id="rb2b" strategy="afterInteractive">
        {`
          !function(key) {
            if (window.reb2b) return;
            window.reb2b = {loaded: true};
            var s = document.createElement("script");
            s.async = true;
            s.src = "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/" + key + "/" + key + ".js.gz";
            document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);
          }("5NRP9HG8X1O1");
        `}
      </Script>
    </>
  );
}

/**
 * Track custom events
 * Usage: trackEvent('button_click', { button_name: 'demo_cta' })
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag(
      'event',
      eventName,
      eventParams
    );
  }
}
