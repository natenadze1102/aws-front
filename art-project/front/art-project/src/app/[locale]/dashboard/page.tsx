import { isAuth } from '@/helpers/is-auth';
import { redirect } from 'next/navigation';
import { use } from 'react';

export default function Page() {
  const { isAuthorized } = use(isAuth());

  if (!isAuthorized) {
    redirect('/login');
  }

  return 'test';
}
