'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Талант подает заявку с рекомендациями',
    description:
      'Сбор информации, психологические и IQ тесты, профилирование психологами и трекерами, анализ здоровья',
  },
  {
    title: 'Проходит отбор и получает инвестицию',
    description: 'От 7 до 10 инвесторов и менторов',
  },
  {
    title: 'Инвесторы поддерживают и менторят',
    description: 'Менторство, медицинская страховка, психологическая помощь',
  },
  {
    title: 'Прибыль делится с инвесторами',
    description: 'От 5 до 20%',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Как это работает
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card>
                <CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
