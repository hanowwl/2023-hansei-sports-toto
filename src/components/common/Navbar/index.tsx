import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styled';

export interface NavbarMenu {
  to: string;
  icon: IconProp;
  text: string;
}

export interface NavbarProps {
  menu: NavbarMenu[];
}

export const Navbar: React.FC<NavbarProps> = ({ menu }) => {
  return (
    <S.NavbarContainer>
      <S.NavbarMenuList>
        {menu.map(({ to, icon, text }, i) => {
          return (
            <S.NavbarMenuItem key={i}>
              <S.NavbarLink to={to} end>
                <FontAwesomeIcon icon={icon} size="xl" />
                <S.NavbarText>{text}</S.NavbarText>
              </S.NavbarLink>
            </S.NavbarMenuItem>
          );
        })}
      </S.NavbarMenuList>
    </S.NavbarContainer>
  );
};
