import React from 'react';
import { Check } from 'lucide-react';

export const Audience: React.FC = () => {
  const items = [
    "Começa bem, mas não consegue manter",
    "Vive prometendo que segunda vai recomeçar",
    "Sente que o peso não responde como gostaria",
    "Não consegue organizar a alimentação",
    "Quer emagrecer sem depender de uma rotina perfeita",
    "Quer uma forma mais possível e sustentável de manter resultados",
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FAF7F2] border-b border-[#E6DDD0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#5E7158] block">
            Identificação
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#193427] leading-tight">
            Esse desafio é para você que...
          </h2>
        </div>

        {/* Short List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((text, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-[#F5EFEB] border border-[#DFD6C9] flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-[#8C4E3D] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                ✓
              </div>
              <span className="text-sm text-[#273223] font-medium leading-snug">
                {text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
