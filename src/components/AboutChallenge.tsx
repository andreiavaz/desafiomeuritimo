import React from 'react';

export const AboutChallenge: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#F5EFEB] border-b border-[#E6DDD0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-5">
        
        <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4E3D] block">
          Sobre a Experiência
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#193427] leading-tight">
          O que é o Desafio Meu Ritmo
        </h2>

        <div className="space-y-4 text-base sm:text-lg text-[#3C4639] leading-relaxed max-w-2xl mx-auto">
          <p>
            O Desafio Meu Ritmo foi criado para ajudar você a organizar sua alimentação, entender o que está atrapalhando seus resultados e aprender a continuar, sem precisar viver tentando fazer tudo perfeito.
          </p>
          <p className="font-medium text-[#193427]">
            Não é mais uma dieta de 7 dias. É uma experiência prática, leve e guiada para ajudar você a emagrecer com mais estratégia, constância e consciência.
          </p>
        </div>

      </div>
    </section>
  );
};
