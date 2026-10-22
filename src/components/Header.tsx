import React from 'react';
import { CHECKOUT_URL } from '../constants';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE2D5] transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand wordmark / Logo */}
        <a href="#" className="whitespace-nowrap shrink-0 focus-visible:outline-none">
          <Logo />
        </a>

        {/* Primary Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:inline-block text-xs text-[#5E6D5B] font-medium">
            Início: <strong>09/11</strong> · <strong>R$ 37</strong>
          </span>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-[13px] font-semibold tracking-wide uppercase text-[#FAF7F2] bg-[#193427] hover:bg-[#234233] active:bg-[#12251C] transition-all rounded shadow-xs whitespace-nowrap"
          >
            Quero Participar
          </a>
        </div>
      </div>
    </header>
  );
};
