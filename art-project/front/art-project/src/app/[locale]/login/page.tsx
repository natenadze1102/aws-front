import React from 'react';
import { Loginform } from './components/LoginForm';
import { redirect } from 'next/navigation';
import { CookieNames, getCookie } from '@/helpers/get-cookie';
import { AuthWrapper } from '@/components/wrappers/AuthWrapper';

const page = async () => {
  const { cookie: accessToken } = await getCookie(CookieNames.ACCESS_TOKEN);

  if (accessToken) {
    redirect('/');
  }

  return (
    <AuthWrapper>
      <Loginform />
    </AuthWrapper>
  );
};

export default page;
