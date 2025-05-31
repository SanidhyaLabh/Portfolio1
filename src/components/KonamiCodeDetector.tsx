import { useEffect } from 'react';

type KonamiCodeDetectorProps = {
  onKonamiCode: () => void;
};

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

const KonamiCodeDetector = ({ onKonamiCode }: KonamiCodeDetectorProps) => {
  useEffect(() => {
    let keySequence: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      // Get the key name, make lowercase for consistency
      const key = e.key.toLowerCase();
      
      // Add the key to our sequence
      keySequence.push(key);
      
      // Only keep the most recent keys that could match the Konami code
      if (keySequence.length > KONAMI_CODE.length) {
        keySequence = keySequence.slice(keySequence.length - KONAMI_CODE.length);
      }
      
      // Check if the sequence matches the Konami code
      const matchesKonami = keySequence.join(',').toLowerCase() === KONAMI_CODE.join(',').toLowerCase();
      
      if (matchesKonami) {
        onKonamiCode();
        keySequence = []; // Reset after successful trigger
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onKonamiCode]);

  // This component doesn't render anything
  return null;
};

export default KonamiCodeDetector;