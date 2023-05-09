import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TagList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const TagItem = styled.li`
  float: left;
`;

export const TagButton = styled.button<{ isActive?: boolean }>`
  outline: none;
  border: none;

  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  border-radius: 2rem;

  color: #d1d1d1;
  background-color: #ffffff;
  box-shadow: inset 0px 0px 0px 1px #d1d1d1;
  transition: box-shadow 100ms, color 100ms, background 100ms;

  &:hover {
    color: #d1afb3;
    box-shadow: inset 0px 0px 0px 1px #d1afb3;
  }

  ${(props) =>
    props.isActive &&
    css`
      color: #ffffff !important;
      background-color: #cd4a5a !important;
      box-shadow: unset !important;
    `}
`;
