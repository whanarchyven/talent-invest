export const dynamic = 'force-dynamic'
import { eden } from '@/features/eden/eden';
import { getHeloPageData } from '@/shared/api/getHeloPageData';
export default async function Home() {
  const data = await getHeloPageData()
  return (
    <>
      <main className={'p-2'}>
        <h1 className={'text-xl'}>{data}</h1>
      </main>
    </>
  );
}
