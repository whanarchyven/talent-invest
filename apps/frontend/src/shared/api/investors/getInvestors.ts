import { eden } from '@/features/eden/eden';
import { handleError } from '../utils/handleError';

export const getInvestors = async (page: number, limit: number) => {
  const data = await eden.investors.get({ query: { page, limit } });
  if (data.error) {
    handleError(data.error);
  }
  return data.data;
};
