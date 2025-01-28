import { axiosInstance } from '@/lib/axios-instance';
import { IUserLogin } from './auth.schema';

export const loginUser = (input: IUserLogin) => {
  return axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { ...input });
};
