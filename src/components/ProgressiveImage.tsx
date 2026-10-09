import React, { useState } from 'react';

interface ProgressiveImageProps {
  src: string;
  lqip?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  lqip,
  alt,
  className = '',
  imgClassName = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#141414] ${className}`}>
      {/* Blurred Low Quality Image Placeholder (LQIP) */}
      {lqip && !hasError && (
        <img
          src={lqip}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover filter blur-lg scale-110 transition-opacity duration-700 pointer-events-none ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* Subtle shimmer skeleton while loading if LQIP isn't ready */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse pointer-events-none" />
      )}

      {/* High-Resolution Progressive Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 filter-none scale-100' : 'opacity-0 scale-105'
        } ${imgClassName}`}
      />
    </div>
  );
};
