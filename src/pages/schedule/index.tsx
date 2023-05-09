import React from 'react';

import { GameSchedule, Tag, Typo } from 'src/components/common';
import { useListToggle } from 'src/hooks';
import { GAME_SCHEDULES, GAME_SCHEDULE_DATES, GAME_TYPES } from 'src/constant';

import * as S from './styled';

export const SchedulePage: React.FC = () => {
  const {
    list: games,
    active: activeGame,
    handleOnClick: handleOnClickGame,
  } = useListToggle(GAME_TYPES);
  const {
    list: dates,
    active: activeDate,
    handleOnClick: handleOnClickDate,
  } = useListToggle([{ id: 'all', label: '전체' }, ...GAME_SCHEDULE_DATES]);

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

      <S.ScheduleRow>
        {GAME_SCHEDULES[activeGame.id]
          .filter((v) => activeDate.id === 'all' || v.startDate === activeDate.id)
          .map((props, i) => {
            return <GameSchedule key={i} showDate={activeDate.id === 'all'} {...props} />;
          })}
      </S.ScheduleRow>
    </div>
  );
};
