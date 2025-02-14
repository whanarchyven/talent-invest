import { InvestorRegistrationForm } from '@/widgets/InvestorRegistrationForm/InvestorRegistrationForm';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Регистрация Инвестора</h1>
      <InvestorRegistrationForm />
    </main>
  );
}
