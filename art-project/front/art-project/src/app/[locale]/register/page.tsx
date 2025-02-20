import { CookieNames, getCookie } from '@/helpers/get-cookie';
import { redirect } from 'next/navigation';

import React from 'react';
import { RegisterForm } from './components/RegisterForm';
import { AuthWrapper } from '@/components/wrappers/AuthWrapper';

export default async function Page() {
  const { cookie: accessToken } = await getCookie(CookieNames.ACCESS_TOKEN);

  if (accessToken) {
    redirect('/');
  }

  return (
    <AuthWrapper>
      <RegisterForm />
    </AuthWrapper>
  );
}

//
