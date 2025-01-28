import React, { FC, ReactNode } from 'react';

import { Footer } from './Footer';
import Header from './header/Header';

type Props = {
  children: ReactNode;
};

export const LayoutBasic: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
