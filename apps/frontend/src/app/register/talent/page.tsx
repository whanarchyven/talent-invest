import { TalentRegistrationForm } from '@/widgets/TalentRegistrationForm/TalentRegistrationForm';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Регистрация участника</h1>
      <TalentRegistrationForm />
    </main>
  );
}
