import React from 'react';

import { Tag, Typo } from 'src/components/common';
import { useListToggle } from 'src/hooks';

import * as S from './styled';

export const SchedulePage: React.FC = () => {
  const {
    list: games,
    active: activeGame,
    handleOnClick: handleOnClickGame,
  } = useListToggle([
    { id: 'basketball', label: '🏀 농구' },
    { id: 'foot-volleyball', label: '⚽️ 족구' },
    { id: 'dodge-ball', label: '🏐 피구' },
  ]);
  const {
    list: dates,
    active: activeDate,
    handleOnClick: handleOnClickDate,
  } = useListToggle([
    { id: '05/10', label: '05/10 (수)' },
    { id: '05/11', label: '05/11 (수)' },
    { id: '05/12', label: '05/12 (수)' },
    { id: '05/15', label: '05/15 (수)' },
  ]);

  return (
    <div style={{ padding: '2.4rem 0' }}>
      <div style={{ marginBottom: '1.6rem' }}>
        <Typo.H1>2023 스포츠한마당 경기 일정</Typo.H1>
        <Typo.Small>※ 경기 일정은 추후 변경될 수 있어요</Typo.Small>
      </div>

      <S.TagListRow style={{ marginBottom: '3.2rem' }}>
        <Tag.List>
          {games.map((v, i) => (
            <Tag.Item key={i} isActive={activeGame.id === v.id} onClick={handleOnClickGame(v.id)}>
              {v.label}
            </Tag.Item>
          ))}
        </Tag.List>

        <Tag.List>
          {dates.map((v, i) => (
            <Tag.Item key={i} isActive={activeDate.id === v.id} onClick={handleOnClickDate(v.id)}>
              {v.label}
            </Tag.Item>
          ))}
        </Tag.List>
      </S.TagListRow>

      <S.ScheduleRow></S.ScheduleRow>
    </div>
  );
};
