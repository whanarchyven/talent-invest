import { eden } from '@/features/eden/eden';

interface TalentData {
  name: string;
  country: string;
  job: string;
  education: string;
  email: string;
  phone: string;
  age: number;
  avatar: File;
}

export const createTalent = async (talentData: TalentData) => {
  const data = await eden.talents.post(talentData);
  if (data.error) {
    return data;
  }
  return data.data;
};
