import React, { useState } from 'react';

import { GAME_TYPE_TO_DISPLAY } from 'src/constant';

import { Typo } from '..';

import * as S from './styled';

export interface PredictionProps {
  type: keyof typeof GAME_TYPE_TO_DISPLAY;
  status: 'before' | 'progress' | 'end';
  startTime: string;
  choices: string[];

  result?: number;
  value?: number;
  onChange?: (choice: number) => void;
  disabled?: boolean;
}

export const Prediction: React.FC<PredictionProps> = ({
  type,
  status,
  startTime,
  choices,
  result,
  value,
  onChange,
  disabled,
}) => {
  const [choice, setChoice] = useState<number>(-1);
  console.log(value, disabled);

  return (
    <S.PredictionContainer>
      <div style={{ marginBottom: '0.8rem' }}>
        <Typo.H2 style={{ color: '#CD4A5A' }}>
          {startTime} {GAME_TYPE_TO_DISPLAY[type]} - {status === 'before' && '경기 진행 전'}
          {status === 'progress' && '경기 진행 중'}
          {status === 'end' && (result === value ? '예측 성공' : '예측 실패')}
        </Typo.H2>
        <Typo.Small>
          {status === 'before' && '아직 경기 진행 전이에요'}
          {status === 'progress' && '현재 경기가 진행 중이에요'}
          {status === 'end' && '경기가 종료되었어요'}
        </Typo.Small>
      </div>

      <S.PredictionChoicesContainer>
        {choices.slice(0, 2).map((v, i) => {
          return (
            <S.PredictionChoiceItem
              key={i}
              selected={choice === i || value === i}
              onClick={
                !disabled
                  ? () => {
                      setChoice(i);
                      if (onChange) onChange(i);
                    }
                  : undefined
              }
            >
              <p>{v}</p>
            </S.PredictionChoiceItem>
          );
        })}
      </S.PredictionChoicesContainer>
    </S.PredictionContainer>
  );
};
