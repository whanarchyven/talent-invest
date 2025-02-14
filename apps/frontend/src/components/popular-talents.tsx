import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTalents } from '@/shared/api/talents/getTalents';
import { getContentUrl } from '@/shared/utils/url';
import Image from 'next/image';

export default async function PopularTalents() {
  const talents = await getTalents(1, 100);
  console.log(talents);

  return (
    <section id="talents" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Популярные таланты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talents?.map((talent, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-col items-center gap-4">
                <div className="relative w-48 aspect-square">
                  <Image
                    src={getContentUrl(talent.avatar)}
                    alt={talent.name}
                    fill
                    className="rounded-full border-2 border-blue-500 object-cover"
                  />
                </div>
                <CardTitle className="text-center mt-4">
                  {talent.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{talent.job}</p>
                <p className="font-bold mt-2">
                  Оценка инвесторов: {talent.rating}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Собранные инвестиции: {talent.investments}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
