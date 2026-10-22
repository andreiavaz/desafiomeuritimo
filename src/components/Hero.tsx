import React from 'react';
import { CHECKOUT_URL, IMAGES } from '../constants';
import { Video, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 bg-[#FAF7F2] border-b border-[#E8DFC0]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Direct Value Proposition */}
          <div className="md:col-span-7 space-y-5">
            
            {/* Logo do Desafio Meu Ritmo */}
            <div className="flex items-center gap-3">
              <Logo size="lg" />
            </div>

            {/* Context kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#735147]">
              <span>Desafio Online</span>
              <span aria-hidden="true" className="text-[#C4B7A5]">·</span>
              <span className="text-[#5A6C56]">Início 09 de Novembro</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-bold text-[#193427] leading-[1.15] tracking-tight text-balance">
              Descubra em 7 dias como emagrecer e manter, sem precisar fazer tudo perfeito.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#3E473C] leading-relaxed">
              Uma experiência online e ao vivo com a <strong className="font-semibold text-[#193427]">Nutri Andréia Vaz</strong>, criada para mulheres que querem emagrecer sem viver no ciclo de começar, desistir e recomeçar.
            </p>

            {/* 4 Destaques Visuais Obrigatórios */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-2.5 rounded bg-[#F3ECE1] border border-[#DDD3C2] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#193427] text-white flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                  7
                </div>
                <div className="text-xs leading-tight">
                  <span className="font-bold text-[#193427] block">7 Dias</span>
                  <span className="text-[#5F6E5C]">de duração</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#F3ECE1] border border-[#DDD3C2] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#8C4E3D] text-white flex items-center justify-center shrink-0">
                  <Video className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs leading-tight">
                  <span className="font-bold text-[#193427] block">Ao vivo todos os dias</span>
                  <span className="text-[#5F6E5C]">comigo diariamente</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#F3ECE1] border border-[#DDD3C2] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#193427] text-white flex items-center justify-center shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs leading-tight">
                  <span className="font-bold text-[#193427] block">09 de novembro</span>
                  <span className="text-[#5F6E5C]">data de início</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#F3ECE1] border border-[#DDD3C2] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#193427] text-white flex items-center justify-center shrink-0 font-serif text-sm font-bold">
                  $
                </div>
                <div className="text-xs leading-tight">
                  <span className="font-bold text-[#193427] block">R$ 37,00</span>
                  <span className="text-[#5F6E5C]">investimento único</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold tracking-wide uppercase text-[#FAF7F2] bg-[#193427] hover:bg-[#234233] active:bg-[#12251C] transition-all rounded shadow-md text-center"
              >
                <span>Quero Participar do Meu Ritmo</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

          </div>

          {/* Right Column: Imagem que remete a uma mulher emagrecendo com leveza */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs md:max-w-none">
              <div className="rounded-xl overflow-hidden shadow-lg border border-[#DDD3C3] bg-[#F2EDE5]">
                <img
                  src={IMAGES.heroTransformation}
                  alt="Mulher vivenciando emagrecimento consciente com leveza e constância"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/4.2] object-cover object-center"
                />
                <div className="p-3.5 bg-[#FAF7F2] border-t border-[#EAE2D5] text-center">
                  <span className="font-serif text-base font-bold text-[#193427] block leading-tight">
                    Leveza & Constância
                  </span>
                  <span className="text-[11px] text-[#71826E] block mt-0.5">
                    Emagrecer na vida real, sem neuras nem culpa
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
