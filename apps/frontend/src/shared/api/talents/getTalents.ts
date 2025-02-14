import { eden } from '@/features/eden/eden';
import { handleError } from '../utils/handleError';

export const getTalents = async (page: number, limit: number) => {
  const data = await eden.talents.get({ query: { page, limit } });
  if (data.error) {
    handleError(data.error);
  }
  return data.data;
};
