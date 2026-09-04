/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  HEADLINE_OPTIONS, 
  BIO_OPTIONS, 
  TOP_CASE_STUDIES, 
  EXPERIENCE_ITEMS, 
  TESTIMONIALS 
} from './data/portfolioData';
import { HeadlineOption, CaseStudy } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { CaseStudyModal } from './components/CaseStudyModal';
import { TechStackSection } from './components/TechStackSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlannerStudio } from './components/studio/PlannerStudio';
import { Toast } from './components/Toast';

export default function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'studio'>('portfolio');
  const [currentHeadline, setCurrentHeadline] = useState<HeadlineOption>(HEADLINE_OPTIONS[0]);
  const [activeBioId, setActiveBioId] = useState<string>(BIO_OPTIONS[0].id);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alex@rivera-engineering.dev');
    showToast('Direct email copied: alex@rivera-engineering.dev');
  };

  const handleCopySnippet = (code: string) => {
    navigator.clipboard.writeText(code);
    showToast('Source code snippet copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Persistent Navigation Bar */}
      <Navbar
        currentView={currentView}
        onToggleView={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onCopyEmail={handleCopyEmail}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'portfolio' ? (
          <>
            {/* 1. Hero Section */}
            <Hero
              currentHeadline={currentHeadline}
              headlineOptions={HEADLINE_OPTIONS}
              onSelectHeadline={(headline) => {
                setCurrentHeadline(headline);
                showToast(`Applied "${headline.badge}" to Hero section`);
              }}
              onOpenStudio={() => {
                setCurrentView('studio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onCopyEmail={handleCopyEmail}
            />

            {/* 2. Top 3 Structured Case Studies */}
            <CaseStudies
              caseStudies={TOP_CASE_STUDIES}
              onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
            />

            {/* 3. Capabilities & Audience-Tailored Bio Section */}
            <TechStackSection
              bioOptions={BIO_OPTIONS}
              activeBioId={activeBioId}
              onSelectBio={(id) => {
                setActiveBioId(id);
                showToast('Updated active Bio framing');
              }}
            />

            {/* 4. Production Experience Timeline */}
            <ExperienceSection experience={EXPERIENCE_ITEMS} />

            {/* 5. Verified Testimonials */}
            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* 6. Conversion & Contact Section */}
            <ContactSection onCopyEmail={handleCopyEmail} />
          </>
        ) : (
          /* Blueprint & Planning Studio */
          <PlannerStudio
            currentHeadline={currentHeadline}
            onApplyHeadline={(headline) => setCurrentHeadline(headline)}
            activeBioId={activeBioId}
            onApplyBio={(id) => setActiveBioId(id)}
            onCloseStudio={() => {
              setCurrentView('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNotify={showToast}
          />
        )}
      </main>

      {/* Deep Dive Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onCopySnippet={handleCopySnippet}
      />

      {/* Persistent Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
