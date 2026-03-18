import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import KineticMarquee from '@/components/KineticMarquee';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import PSZNEngine from '@/components/PSZNEngine';
import DriftDetection from '@/components/DriftDetection';
import TrustMetrics from '@/components/TrustMetrics';
import Pricing from '@/components/Pricing';
import Enterprise from '@/components/Enterprise';
import Ecosystem from '@/components/Ecosystem';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <KineticMarquee />
      <Problem />
      <HowItWorks />
      <PSZNEngine />
      <DriftDetection />
      <TrustMetrics />
      <Pricing />
      <Enterprise />
      <Ecosystem />
      <Waitlist />
      <Footer />
    </main>
  );
}
