import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const AuthWrapper: FC<Props> = ({ children }) => {
  return (
    <div className='container flex flex-col items-center justify-center w-full h-full gap-4 max-w-[540px]'>
      <Link href='/home'>
        <Image src='/assets/images/logo.png' alt='logo' width={100} height={100} />
      </Link>

      {children}
    </div>
  );
};
