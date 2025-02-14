'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
export default function CTASection() {
  const router = useRouter();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Инвестируй в таланты сегодня!
          </h2>
          <div className="space-x-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => router.push('/register/investor')}>
              Инвестировать
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => router.push('/register/talent')}>
              Получить инвестиции
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
