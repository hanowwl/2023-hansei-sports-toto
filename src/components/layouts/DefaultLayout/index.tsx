import React from 'react';

import { Navbar, NavbarMenu } from 'src/components/common';

import * as S from './styled';

export interface DefaultLayoutProps {
  menu: NavbarMenu[];
  children?: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ menu, children }) => {
  return (
    <S.DefaultLayoutContainer>
      <S.DefaultLayoutInner>{children}</S.DefaultLayoutInner>

      <Navbar menu={menu} />
    </S.DefaultLayoutContainer>
  );
};
