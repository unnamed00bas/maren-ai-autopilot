import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Target } from '@/components/Target';
import { Products } from '@/components/Products';
import { Testimonials } from '@/components/Testimonials';
import { Process } from '@/components/Process';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { LeadForm } from '@/components/LeadForm';
import { Guarantees } from '@/components/Guarantees';
import { HowMarenWorks } from '@/components/HowMarenWorks';
import { TelegramWidget } from '@/components/TelegramWidget';
import { Footer } from '@/components/Footer';
import { CalcModal } from '@/components/CalcModal';
import { DemoModal } from '@/components/DemoModal';
import { CookieConsent } from '@/components/CookieConsent';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ProgressBar } from '@/components/ProgressBar';
import ChatButton from '@/components/ChatButton';

const Index = () => {
  const [calcModalOpen, setCalcModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden max-w-[100vw]">
      <ProgressBar />
      <Header
        onCalcClick={() => setCalcModalOpen(true)}
        onDemoClick={() => setDemoModalOpen(true)}
      />
      
      <main className="pt-20">
        <Hero 
          onCalcClick={() => setCalcModalOpen(true)}
          onDemoClick={() => setDemoModalOpen(true)}
        />
        <Target onDemoClick={() => setDemoModalOpen(true)} />
        <Products />
        <Testimonials />
        <Process />
        <Pricing />
        <FAQ />
        <HowMarenWorks />
        {/* Вставка трёхколоночного вывода постов TG: передайте актуальные ID постов */}
        <TelegramWidget channel="promaren" postIds={[18, 17, 16]} />
      </main>

      <Footer />

      <CalcModal 
        open={calcModalOpen}
        onOpenChange={setCalcModalOpen}
      />

      <DemoModal 
        open={demoModalOpen}
        onOpenChange={setDemoModalOpen}
      />

      <CookieConsent />
      <ScrollToTop />
      <ChatButton />
    </div>
  );
};

export default Index;
