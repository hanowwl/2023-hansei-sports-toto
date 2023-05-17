import React, { useEffect, useState } from 'react';

import {
  GameSchedule,
  GameScheduleProps,
  SuspenseFallback,
  Tag,
  Typo,
} from 'src/components/common';
import { useListToggle } from 'src/hooks';
import { GAME_SCHEDULE_DATES, GAME_TYPES } from 'src/constant';

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

  const [schedules, setSchedules] = useState<Record<string, GameScheduleProps[]> | null>(null);

  useEffect(() => {
    const lazyLoadGameSchedules = async () => {
      const GAME_SCHEDULES = await import('src/constant/game').then(
        (module) => module.GAME_SCHEDULES
      );

      setSchedules(GAME_SCHEDULES);
    };

    lazyLoadGameSchedules();
  }, []);

  useEffect(() => {
    console.log(schedules);
  }, [schedules]);

  return (
    <div style={{ padding: '2.4rem 0' }}>
      <div style={{ marginBottom: '1.6rem' }}>
        <Typo.H1>2023 스포츠한마당 예선 일정</Typo.H1>
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

      {schedules ? (
        <S.ScheduleRow>
          {schedules[activeGame.id]
            .filter((v) => activeDate.id === 'all' || v.startDate === activeDate.id)
            .map((props, i) => {
              return <GameSchedule key={i} showDate={activeDate.id === 'all'} {...props} />;
            })}
        </S.ScheduleRow>
      ) : (
        <SuspenseFallback messages={['예선 경기 일정을 불러오고 있어요', '잠시만 기다려주세요']} />
      )}
    </div>
  );
};
