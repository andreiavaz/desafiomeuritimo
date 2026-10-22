import React from 'react';
import { Check } from 'lucide-react';

export const WhatYouWillLearn: React.FC = () => {
  const points = [
    "Organizar melhor sua alimentação",
    "Fazer o básico funcionar no seu emagrecimento",
    "Comer com mais estratégia",
    "Perceber o que está travando seus resultados",
    "Identificar sabotadores do emagrecimento",
    "Sair do tudo ou nada",
    "Aprender a continuar mesmo quando a rotina não é perfeita",
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F5EFEB] border-b border-[#E6DDD0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4E3D] block">
            Aprendizado Prático
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#193427] leading-tight">
            Durante esses 7 dias, você vai aprender a:
          </h2>
        </div>

        {/* Visual Checklist */}
        <div className="bg-[#FAF7F2] rounded-xl border border-[#DFD6C9] p-6 sm:p-8 space-y-3 shadow-xs">
          {points.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-3 py-1 text-sm sm:text-base text-[#2E372A]">
              <span className="w-5 h-5 rounded-full bg-[#193427] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                ✓
              </span>
              <span className="font-medium leading-snug">{pt}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
