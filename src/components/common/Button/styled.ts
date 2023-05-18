import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonElement = styled.button<{ loading?: boolean; fillWidth?: boolean }>`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: #ffffff;
  background-color: #cd4a5a;
  font-weight: 600;
  padding: 1.4rem;
  border-radius: 0.8rem;
  transition: background 150ms;
  cursor: pointer;

  &:disabled {
    background-color: #ce6370;
  }

  &:active {
    background-color: #bc3243;
  }

  ${(props) =>
    props.fillWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.loading &&
    css`
      background-color: #ce6370 !important;
    `}
`;
