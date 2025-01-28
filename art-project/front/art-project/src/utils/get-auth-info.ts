import { cookies } from 'next/headers';

export const getAuthInfo = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken');
  return {
    isAuth: !!accessToken,
    accessToken: accessToken?.value || null,
  };
};
