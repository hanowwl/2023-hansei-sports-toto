import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;

  padding: 0 7rem;
  border-top: 1px solid #f0f0f0;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0.8rem 0.8rem 0 0;
`;

export const NavbarMenuList = styled.ul`
  list-style: none;
  padding: 0;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* justify-content: center; */
`;

export const NavbarMenuItem = styled.li`
  float: left;
`;

export const NavbarLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: color 150ms;

  text-decoration: none;
  color: #c7c7d0;

  &.active {
    color: #393949;
  }
`;

export const NavbarText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
`;
