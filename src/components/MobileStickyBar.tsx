import React, { useEffect, useState } from 'react';
import { CHECKOUT_URL } from '../constants';
import { ArrowRight } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#DFD6C9] px-4 py-2.5 shadow-lg">
      <div className="flex items-center justify-between gap-3 max-w-sm mx-auto">
        <div className="leading-tight">
          <span className="text-[11px] uppercase tracking-wider text-[#735147] font-semibold block">
            09 de Novembro
          </span>
          <span className="text-xs text-[#193427] font-serif font-bold">
            R$ 37,00
          </span>
        </div>

        <a
          href={CHECKOUT_URL}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase text-[#FAF7F2] bg-[#193427] active:bg-[#12251C] rounded shadow whitespace-nowrap"
        >
          <span>Quero Participar</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
