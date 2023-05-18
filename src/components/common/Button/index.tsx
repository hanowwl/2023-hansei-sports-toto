import React from 'react';

import { Spinner } from '..';

import * as S from './styled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  fillWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ loading = false, children, ...props }) => {
  return (
    <S.ButtonElement loading={loading} {...props}>
      {loading && <Spinner size="1.6rem" color="rgba(255, 255, 255, 0.4)" />}
      {children}
    </S.ButtonElement>
  );
};
