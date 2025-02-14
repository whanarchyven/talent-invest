'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Инвестируй в таланты. Создавай будущее.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mt-4">
              Инвесторы помогают талантам, а таланты делятся будущими доходами.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-x-4">
            <Button
              onClick={() => router.push('/register/investor')}
              variant="default"
              size="lg">
              Инвестировать
            </Button>
            <Button
              onClick={() => router.push('/register/talent')}
              className="bg-white text-black"
              variant="outline"
              size="lg">
              Получить инвестиции
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[50%] top-0 h-[48rem] w-[84rem] -translate-x-1/2 stroke-gray-700 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse">
              <path d="M0 40V0h40" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid)" />
        </svg>
      </motion.div>
    </section>
  );
}
