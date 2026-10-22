import React from 'react';
import { IMAGES } from '../constants';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-9 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-16 sm:h-20 w-auto'
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={IMAGES.officialLogo}
        onError={(e) => {
          const target = e.currentTarget;
          if (!target.src.includes('/images/logo_desafio_meu_ritmo')) {
            target.src = '/images/logo_desafio_meu_ritmo_transparent.png';
          } else if (target.src !== IMAGES.officialLogoUrl) {
            target.src = IMAGES.officialLogoUrl;
          }
        }}
        alt="Logo Oficial Desafio Meu Ritmo"
        className={`${sizeClasses[size]} object-contain`}
      />
    </div>
  );
};
