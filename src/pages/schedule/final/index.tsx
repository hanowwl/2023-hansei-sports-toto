import React, { Suspense, useMemo } from 'react';

import {
  GameSchedule,
  GameScheduleProps,
  GameScheduleTeam,
  SuspenseFallback,
  Typo,
} from 'src/components/common';
import { GAME_TYPES, GAME_TYPE_TO_DISPLAY } from 'src/constant';
import { useGetFinalGameSchedulesQuery } from 'src/graphql/generated/hooks';

import * as S from './styled';

const FinalSchedulesWithSuspense: React.FC = () => {
  const { data } = useGetFinalGameSchedulesQuery(
    {},
    { suspense: true, refetchInterval: 1000 * 30 }
  );

  const schedules = useMemo(() => {
    const result = data?.scheduleCollection?.edges.reduce<GameScheduleProps[]>(
      (prev, { node: { status, start_date, start_time, referee, team_scheduleCollection } }) => {
        const startDate = start_date as string;
        let startTime = (start_time as string).slice(0, 5);

        const commonTeams =
          team_scheduleCollection?.edges.reduce<(GameScheduleTeam & { score: number })[]>(
            (prev, { node: { type, score, team } }, i) => {
              if (!team || prev.length >= 2) return prev;
              if (i === 0)
                startTime = `(${
                  GAME_TYPE_TO_DISPLAY[type as keyof typeof GAME_TYPE_TO_DISPLAY]
                }) ${startTime}`;

              const { name, players, reserve_players } = team;
              prev.push({
                name,
                players: JSON.parse(players) as string[],
                reservePlayers: JSON.parse(reserve_players) as string[],
                score: (JSON.parse(score) as number[])[i],
              });
              return prev;
            },
            []
          ) || [];

        if (status === 'before') {
          prev.push({
            status: 'before',
            startDate,
            startTime,
            referee,
            teams: [commonTeams[0], commonTeams[1]],
          });
        } else if (status === 'progress') {
          prev.push({
            status: 'progress',
            startDate,
            startTime,
            referee,
            teams: [commonTeams[0], commonTeams[1]],
          });
        } else if (status == 'end') {
          prev.push({
            status: 'end',
            startDate,
            startTime,
            referee,
            teams: [commonTeams[0], commonTeams[1]],
          });
        }

        return prev;
      },
      []
    );

    return result;
  }, [data]);

  return (
    <S.ScheduleRow>
      {schedules?.map((props, i) => {
        return (
          <React.Fragment key={i}>
            {i % 3 === 0 && (
              <Typo.H2 style={{ marginTop: '1.2rem' }}>{GAME_TYPES[i / 3].label}</Typo.H2>
            )}
            <GameSchedule key={i} {...props} />
          </React.Fragment>
        );
      })}
    </S.ScheduleRow>
  );
};

export const ScheduleFinalPage: React.FC = () => {
  return (
    <div style={{ height: '100%' }}>
      <div style={{ padding: '2.4rem 0' }}>
        <div style={{ marginBottom: '1.6rem' }}>
          <Typo.H1>2023 스포츠한마당 결승 일정</Typo.H1>
          <Typo.Small>※ 경기 일정은 추후 변경될 수 있어요</Typo.Small>
        </div>

        <Suspense
          fallback={
            <SuspenseFallback
              messages={['결승 경기 일정을 불러오고 있어요', '잠시만 기다려주세요']}
            />
          }
        >
          <FinalSchedulesWithSuspense />
        </Suspense>
      </div>
    </div>
  );
};
