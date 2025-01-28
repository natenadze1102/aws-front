'use server';

import { CookieNames, getCookie } from './get-cookie';

export const isAuth = async () => {
  const { cookie } = await getCookie(CookieNames.ACCESS_TOKEN);

  return { IsAuthorized: !!cookie };
};
