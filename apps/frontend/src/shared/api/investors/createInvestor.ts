import { eden } from '@/features/eden/eden';

interface InvestorData {
  name: string;
  email: string;
  phone: string;
  interests: string;
  capital: number;
  avatar: File;
}

export const createInvestor = async (investorData: InvestorData) => {
  const data = await eden.investors.post({
    ...investorData,
    capital: String(investorData.capital),
  });
  if (data.error) {
    return data;
  }
  return data.data;
};
