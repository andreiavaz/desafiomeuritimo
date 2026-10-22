import React from 'react';
import { IMAGES } from '../constants';

export const AboutNutri: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#F5EFEB] border-b border-[#E6DDD0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Foto da Andréia */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="rounded-xl overflow-hidden border border-[#D5C9B8] shadow-md bg-[#FAF7F2]">
                <img
                  src={IMAGES.andreiaLive}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== IMAGES.andreiaFoto2Url) {
                      target.src = IMAGES.andreiaFoto2Url;
                    }
                  }}
                  alt="Nutricionista Andréia Vaz"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Texto Conciso */}
          <div className="md:col-span-7 space-y-4 text-[#3E493B]">
            
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8C4E3D] block">
                Condução Profissional
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#193427] leading-tight">
                Quem vai conduzir essa experiência com você
              </h2>
            </div>

            <div className="pt-1">
              <h3 className="font-serif text-lg font-bold text-[#193427]">
                Nutricionista Andréia Vaz
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#697966]">
                CRN-8 3188
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed">
              Nutricionista clínica e comportamental, com ampla experiência ajudando mulheres a emagrecerem de forma mais leve, estratégica e sustentável.
            </p>

            <p className="text-sm sm:text-base leading-relaxed font-medium text-[#193427]">
              Com o Meu Ritmo, Andréia quer mostrar que você não precisa viver entre perfeição e culpa para conseguir resultados. Você precisa aprender a seguir um caminho que consiga continuar.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
