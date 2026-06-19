import { useState } from 'react';

interface AutoImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function AutoImage({ src, alt, className = '' }: AutoImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    return (
      <div className={`${className} bg-carbon-800 flex items-center justify-center`}>
        <div className="text-carbon-400">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div className={`${className} bg-carbon-800 animate-pulse`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'block' : 'hidden'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </>
  );
}
