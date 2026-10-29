import React, { useState } from 'react';

/**
 * GameAssetImage renders official MapleStory sprites (monsters, items, weapons)
 * with automatic fallback, pixel-perfect rendering, and fallback to emoji.
 */
export function GameAssetImage({
  src,
  fallbackSrc,
  alt = '',
  emojiFallback = '👾',
  className = '',
  containerClassName = '',
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  isAnimated = false
}) {
  const [errorStage, setErrorStage] = useState(0); // 0: primary, 1: fallbackSrc, 2: failed (show emoji)
  const [loaded, setLoaded] = useState(false);

  // If no primary src provided, show emoji immediately
  if (!src && !fallbackSrc) {
    return <span className="select-none leading-none">{emojiFallback}</span>;
  }

  const currentSrc = errorStage === 0 ? src : (errorStage === 1 ? fallbackSrc : null);

  const handleError = () => {
    if (errorStage === 0 && fallbackSrc) {
      setErrorStage(1);
    } else {
      setErrorStage(2);
    }
  };

  if (errorStage >= 2 || !currentSrc) {
    return <span className="select-none leading-none">{emojiFallback}</span>;
  }

  // Preset sizes
  const sizeClasses = {
    xs: 'w-5 h-5 min-w-5',
    sm: 'w-7 h-7 min-w-7',
    md: 'w-10 h-10 min-w-10',
    lg: 'w-16 h-16 min-w-16',
    xl: 'w-24 h-24 min-w-24 max-w-[120px] max-h-[120px]'
  }[size] || 'w-10 h-10';

  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden shrink-0 ${sizeClasses} ${containerClassName}`}>
      {!loaded && (
        <span className="absolute inset-0 flex items-center justify-center opacity-40 text-xs">
          {emojiFallback}
        </span>
      )}
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        className={`max-w-full max-h-full object-contain pixelated transition-opacity duration-200 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
}

export default GameAssetImage;
