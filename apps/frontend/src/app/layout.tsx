export const revalidate = 0; // revalidate at most every hour
import { ChevronRight } from 'lucide-react';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Toaster } from 'sonner';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'TalentInvest',
  description: 'Invest in talents today!',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: any;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <head></head>
      <body className={inter.className}>
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <ChevronRight className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">TalentInvest</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#how-it-works">
              Как это работает
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#talents">
              Таланты
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#investors">
              Инвесторы
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#faq">
              FAQ
            </Link>
          </nav>
        </header>

        <div id="app">{children}</div>
        <Toaster richColors />
      </body>
    </html>
  );
}
