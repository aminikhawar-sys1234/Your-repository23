import { Header } from '@/components/Header';
import { Ticker } from '@/components/Ticker';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { WhatWeBuild } from '@/components/WhatWeBuild';
import { WebsiteShowcase } from '@/components/WebsiteShowcase';
import { EcommerceShowcase } from '@/components/EcommerceShowcase';
import { ErpShowcase } from '@/components/ErpShowcase';
import { MobileShowcase } from '@/components/MobileShowcase';
import { Portfolio } from '@/components/Portfolio';
import { CaseStudies } from '@/components/CaseStudies';
import { Process } from '@/components/Process';
import { TechStack } from '@/components/TechStack';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Team } from '@/components/Team';
import { Reviews } from '@/components/Reviews';
import { GlobalClients } from '@/components/GlobalClients';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { FaqSection } from '@/components/Faq';
import { Blog } from '@/components/Blog';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { FloatingButtons, ScrollTop } from '@/components/FloatingButtons';
import { Seo } from '@/components/Seo';

function App() {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <WhatWeBuild />
        <WebsiteShowcase />
        <EcommerceShowcase />
        <ErpShowcase />
        <MobileShowcase />
        <Services />
        <Portfolio />
        <CaseStudies />
        <Process />
        <TechStack />
        <Pricing />
        <WhyChooseUs />
        <Team />
        <Reviews />
        <GlobalClients />
        <About />
        <FaqSection />
        <Blog />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollTop />
    </>
  );
}

export default App;
