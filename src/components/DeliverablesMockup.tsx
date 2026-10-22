import React from 'react';
import { IMAGES, CHECKOUT_URL } from '../constants';
import { Check, Video, MessageCircle, FileCheck, BookOpen, Utensils, Compass, ShieldAlert } from 'lucide-react';

export const DeliverablesMockup: React.FC = () => {
  const deliverables = [
    { text: "7 encontros ao vivo comigo", icon: Video },
    { text: "Grupo exclusivo no WhatsApp", icon: MessageCircle },
    { text: "Checklist de apoio", icon: FileCheck },
    { text: "Materiais práticos", icon: BookOpen },
    { text: "Receitas e ideias simples", icon: Utensils },
    { text: "Orientações nutricionais", icon: Compass },
    { text: "Estratégias para lidar com sabotadores", icon: ShieldAlert },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FAF7F2] border-b border-[#E6DDD0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#5E7158] block">
            Conteúdo da Experiência
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#193427] leading-tight">
            Ao entrar no Meu Ritmo, você recebe:
          </h2>
        </div>

        {/* Visual Mockup Showcase */}
        <div className="rounded-xl overflow-hidden border border-[#DCD0BE] shadow-md bg-[#F2ECE1] mb-8">
          <img
            src={IMAGES.mockupMateriais}
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('/images/mockup_materiais_ritmo')) {
                target.src = '/images/mockup_materiais_ritmo_1792676982432.jpg';
              }
            }}
            alt="Mockup do Checklist, Livro de Receitas e Grupo do Desafio Meu Ritmo"
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        {/* The 7 Deliverables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#F5EFEB] border border-[#DFD6C9] flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#193427] text-[#FAF7F2] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[#273223]">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
