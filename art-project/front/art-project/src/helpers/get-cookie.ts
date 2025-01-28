import { cookies } from 'next/headers';

export enum CookieNames {
  ACCESS_TOKEN = 'accessToken',
}
export const getCookie = async (name: CookieNames) => {
  const cookieStore = await cookies();

  const cookie = cookieStore.get(name);

  return { cookie, cookieStore };
};
