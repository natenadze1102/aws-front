'use client';

import React, { FC } from 'react';

import Link from 'next/link';

// type TFunction = (key: string, options?: Record<string, unknown>) => string;

type Props = {
  text: string;
};

export const HelloComponent: FC<Props> = ({ text }) => {
  // const product = useProduct();

  return (
    <div>
      <Link href='/about'>{text}</Link>
    </div>
  );
};
