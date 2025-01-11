import React, { useEffect, useRef } from 'react';

interface TurnstileProps {
  siteKey: string;
  onVerify: (token: string) => void;
}

declare global {
  interface Window {
    turnstile: any;
    onloadTurnstileCallback: () => void;
  }
}

export const Turnstile: React.FC<TurnstileProps> = ({ siteKey, onVerify }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Load the Turnstile script if not already loaded
    if (!scriptLoaded.current) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;

      // Define the callback function that will be called when the script loads
      window.onloadTurnstileCallback = () => {
        if (divRef.current) {
          window.turnstile.render(divRef.current, {
            sitekey: siteKey,
            callback: onVerify,
            theme: 'dark'  // Match your dark theme
          });
        }
      };

      document.body.appendChild(script);
      scriptLoaded.current = true;
    }

    // Cleanup
    return () => {
      // Remove the script and reset the callback
      const scripts = document.querySelectorAll('script[src^="https://challenges.cloudflare.com/turnstile"]');
      scripts.forEach(script => script.remove());
      delete window.onloadTurnstileCallback;
    };
  }, [siteKey, onVerify]);

  return <div ref={divRef} className="my-4" />;
};

export default Turnstile;
