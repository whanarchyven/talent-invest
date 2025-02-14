import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import HeroSection from '@/components/hero-section';
import HowItWorks from '@/components/how-it-works';
import PopularTalents from '@/components/popular-talents';
import Investors from '@/components/investors';
import FAQ from '@/components/faq';
import CTASection from '@/components/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <PopularTalents />
        <Investors />
        <FAQ />
        <CTASection />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 TalentInvest. Все права защищены.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Условия использования
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Политика конфиденциальности
          </Link>
        </nav>
      </footer>
    </div>
  );
}
