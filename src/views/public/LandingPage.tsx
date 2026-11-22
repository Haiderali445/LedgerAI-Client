import React from 'react';
import { Navbar } from '../../components/landing/Navbar';
import { HeroSection } from '../../components/landing/HeroSection';
import { ArrowedWorkflowSection } from '../../components/landing/ArrowedWorkflowSection';
import { BenefitsSection } from '../../components/landing/BenefitsSection';
import { ProductPreviewSection } from '../../components/landing/ProductPreviewSection';
import { ClosingCtaFooter } from '../../components/landing/ClosingCtaFooter';

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#070B14] text-slate-100 min-h-screen selection:bg-emerald-500 selection:text-white">
      {/* 1. Top Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero: Where Sales Meets AI Automation */}
        <HeroSection />

        {/* 3. Visual Arrowed Workflow: 5 Clear Steps with Scenario Toggle */}
        <ArrowedWorkflowSection />

        {/* 4. Problems Saved -> Business Benefits (Short, Scannable Cards) */}
        <BenefitsSection />

        {/* 5. Real-UI Interactive Preview Frame */}
        <ProductPreviewSection />
      </main>

      {/* 6. Closing CTA & Business Footer */}
      <ClosingCtaFooter />
    </div>
  );
};

export default LandingPage;
