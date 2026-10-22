import React, { useState } from 'react';
import { Logo } from './Logo';
import { LegalModals } from './LegalModals';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E5DDD0] py-12 text-[#566553]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EAE1D3]">
          {/* Logo & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Logo />
            <div className="hidden sm:block h-6 w-px bg-[#D9CEBE]" />
            <p className="text-xs text-[#6A7B67]">
              Uma experiência guiada para emagrecer e manter na vida real.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-xs text-[#526250]">
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-[#193427] hover:underline transition-colors focus-visible:outline-none"
            >
              Termos de Uso
            </button>
            <span aria-hidden="true" className="text-[#C8BCAB]">·</span>
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-[#193427] hover:underline transition-colors focus-visible:outline-none"
            >
              Política de Privacidade
            </button>
          </div>
        </div>

        {/* Minimalist Professional Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B8B77] text-center sm:text-left">
          <div>
            <p className="font-semibold text-[#193427]">
              Nutricionista Andréia Vaz
            </p>
            <p className="text-[11px] text-[#697966]">
              CRN-8 3188 · Todos os direitos reservados.
            </p>
          </div>

          <div className="max-w-md text-center sm:text-right text-[11px] text-[#869582] leading-tight">
            As orientações compartilhadas têm caráter educacional e de comportamento alimentar sustentável, respeitando a individualidade biológica de cada mulher.
          </div>
        </div>

      </div>

      <LegalModals
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </footer>
  );
};
