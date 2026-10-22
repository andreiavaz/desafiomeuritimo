import React from 'react';
import { CHECKOUT_URL } from '../constants';
import { ArrowRight, Check } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const summary = [
    "Desafio Meu Ritmo",
    "7 dias ao vivo com a Nutri Andréia Vaz",
    "Grupo exclusivo",
    "Checklist",
    "Receitas",
    "Materiais de apoio",
    "Orientações práticas",
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FAF7F2] border-b border-[#E6DDD0]">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        
        <div className="bg-[#FAF7F2] rounded-xl border-2 border-[#193427] p-6 sm:p-8 text-center space-y-6 shadow-md">
          
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4E3D]">
              Inscrição Oficial
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#193427]">
              Seu próximo passo pode começar agora
            </h2>
          </div>

          {/* Resumo dos Itens */}
          <div className="text-left bg-[#F5EFEB] rounded-lg p-4 sm:p-5 border border-[#DFD6C9] space-y-2">
            {summary.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#273223]">
                <Check className="w-4 h-4 text-[#44663E] shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Preço */}
          <div className="py-1">
            <span className="text-xs uppercase tracking-wider text-[#687765] font-semibold block">
              Investimento:
            </span>
            <div className="flex items-baseline justify-center gap-1 mt-1">
              <span className="text-sm font-medium text-[#546250]">R$</span>
              <span className="text-4xl sm:text-5xl font-serif font-bold text-[#193427]">37</span>
              <span className="text-sm font-medium text-[#546250]">,00</span>
            </div>
            <span className="text-[11px] text-[#71806E] block mt-1">
              Início: 09 de novembro
            </span>
          </div>

          {/* Botão */}
          <div>
            <a
              href={CHECKOUT_URL}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold tracking-wide uppercase text-[#FAF7F2] bg-[#193427] hover:bg-[#234233] active:bg-[#12251C] transition-all rounded shadow-md text-center"
            >
              <span>Quero Participar do Meu Ritmo</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
