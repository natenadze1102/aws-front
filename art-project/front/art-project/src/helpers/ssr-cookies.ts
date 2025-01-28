'use server';

import { cookies } from 'next/headers';

export const getCookiesSSR = async () => {
  const cookieStore = await cookies();

  const cookieString = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join('; ');

  return cookieString;
};
