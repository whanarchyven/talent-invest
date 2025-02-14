import { eden } from '@/features/eden/eden';

export const getHeloPageData = async () => {
    const data = await eden.index.get()
    return data.data
}


