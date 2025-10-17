import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Target } from '@/components/Target';
import { Products } from '@/components/Products';
import { Process } from '@/components/Process';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CalcModal } from '@/components/CalcModal';
import { DemoModal } from '@/components/DemoModal';

const Index = () => {
  const [calcModalOpen, setCalcModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header 
        onCalcClick={() => setCalcModalOpen(true)}
        onDemoClick={() => setDemoModalOpen(true)}
      />
      
      <main className="pt-20">
        <Hero 
          onCalcClick={() => setCalcModalOpen(true)}
          onDemoClick={() => setDemoModalOpen(true)}
        />
        <Target />
        <Products />
        <Process />
        <FAQ />
        <Contact />
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
    </div>
  );
};

export default Index;
