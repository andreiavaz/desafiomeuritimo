/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutChallenge } from './components/AboutChallenge';
import { DeliverablesMockup } from './components/DeliverablesMockup';
import { WhatYouWillLearn } from './components/WhatYouWillLearn';
import { Audience } from './components/Audience';
import { AboutNutri } from './components/AboutNutri';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#242A24] selection:bg-[#E2DDD3] selection:text-[#193427]">
      {/* Top Bar Minimalista */}
      <Header />

      <main className="flex-1">
        {/* 1. HERO / PRIMEIRA DOBRA */}
        <Hero />

        {/* 2. O QUE É O MEU RITMO */}
        <AboutChallenge />

        {/* 3. O QUE VOCÊ VAI RECEBER (Mockup Editorial dos Materiais) */}
        <DeliverablesMockup />

        {/* 4. O QUE VOCÊ VAI APRENDER */}
        <WhatYouWillLearn />

        {/* 5. PARA QUEM É */}
        <Audience />

        {/* 6. SOBRE A NUTRI */}
        <AboutNutri />

        {/* 7. CTA FINAL */}
        <FinalCta />
      </main>

      {/* Rodapé Minimalista com CRN-8 3188 e Termos Legais */}
      <Footer />

      {/* Botão Fixo no Mobile para Conversão Rápida */}
      <MobileStickyBar />
    </div>
  );
}
