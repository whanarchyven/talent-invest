import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Как работает инвестирование в таланты?',
    answer:
      'Инвесторы вкладывают средства в перспективных людей, а те в свою очередь делятся частью своих будущих доходов.',
  },
  {
    question: 'Какой процент дохода получают инвесторы?',
    answer:
      'Обычно от 5% до 20% будущих доходов таланта, в зависимости от условий договора.',
  },
  {
    question: 'Как выбираются таланты для инвестиций?',
    answer:
      'Таланты проходят тщательный отбор, включающий тесты, собеседования и оценку потенциала.',
  },
  {
    question: 'Какие гарантии получают инвесторы?',
    answer:
      'Инвестиции в таланты связаны с рисками, но мы обеспечиваем прозрачность и юридическую поддержку сделок.',
  },
  {
    question: 'Как долго действует соглашение о разделе доходов?',
    answer:
      'Обычно от 3 до 10 лет, в зависимости от условий конкретного соглашения.',
  },
  {
    question: 'Могут ли таланты досрочно выкупить свои обязательства?',
    answer:
      'Да, многие соглашения предусматривают возможность досрочного выкупа на определенных условиях.',
  },
  {
    question: 'Какую поддержку получают таланты помимо финансирования?',
    answer:
      'Таланты получают менторскую поддержку, доступ к сети контактов, обучение и другие ресурсы для развития.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Безопасность и прозрачность
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
