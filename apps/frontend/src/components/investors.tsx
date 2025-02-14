import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { getInvestors } from '@/shared/api/investors/getInvestors';
import { getContentUrl } from '@/shared/utils/url';

export default async function Investors() {
  const investors = await getInvestors(1, 100);
  return (
    <section
      id="investors"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Наши инвесторы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {investors?.map((investor, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="relative w-48 aspect-square">
                  <Image
                    src={getContentUrl(investor.avatar)}
                    alt={investor.name}
                    fill
                    className="rounded-full border-2 border-blue-500 object-cover"
                  />
                </div>
                <CardTitle className="text-center mt-4">
                  {investor.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Инвестиционные интересы</p>
                <p className="font-bold mt-2">{investor.interests}</p>
                <p className="font-bold mt-2">Капитал: {investor.capital} ₽</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg">Стать инвестором</Button>
        </div>
      </div>
    </section>
  );
}
