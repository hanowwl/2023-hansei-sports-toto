import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PredictionContainer = styled.div`
  width: 100%;
`;

export const PredictionChoicesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f0f0f0;
  border-radius: 0.8rem;

  & > button:first-child {
    border-radius: 0.8rem 0 0 0.8rem;
    border-right: 1px solid #f0f0f0 !important;
  }

  & > button:last-child {
    border-radius: 0 0.8rem 0.8rem 0;
  }
`;

export const PredictionChoiceItem = styled.button<{ selected?: boolean; result?: boolean }>`
  outline: none;
  border: none;
  flex: 1 1 auto;
  text-align: center;

  font-size: 1.7rem;
  font-weight: 500;
  color: #adabb6;
  padding: 1.6rem 2.4rem;
  background-color: #ffffff;
  cursor: pointer;
  transition: background 150ms, color, 150ms;

  ${(props) =>
    props.selected &&
    css`
      font-weight: 700;
      color: #ffffff;
      background-color: #cd4a5a;
    `}
`;
