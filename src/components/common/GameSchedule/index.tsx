import React from 'react';

import * as S from './styled';

export interface GameScheduleTeam {
  name: string;
  players: string[] | string;
}

interface GameScheduleCommonProps {
  referee: string;
  startTime: string;
  teams: [GameScheduleTeam, GameScheduleTeam];
}

export interface GameScheduleBeforeProps extends GameScheduleCommonProps {
  status: 'before';
}

export interface GameScheduleEndProps extends GameScheduleCommonProps {
  status: 'end';
  teams: [GameScheduleTeam & { score: number }, GameScheduleTeam & { score: number }];
}

export interface GameScheduleProgressProps extends GameScheduleCommonProps {
  status: 'progress';
  teams: [GameScheduleTeam & { score: number }, GameScheduleTeam & { score: number }];
  playtime: {
    type: 'first' | 'second';
    time: number; // sec
  };
}

export type GameScheduleProps =
  | GameScheduleBeforeProps
  | GameScheduleEndProps
  | GameScheduleProgressProps;

const isGameBefore = (props: GameScheduleProps): props is GameScheduleBeforeProps =>
  props.status === 'before';

const isGameEnd = (props: GameScheduleProps): props is GameScheduleEndProps =>
  props.status === 'end';

const isGameProgress = (props: GameScheduleProps): props is GameScheduleProgressProps =>
  props.status === 'progress';

const GameScheduleTeam: React.FC<GameScheduleTeam> = ({ name, players }) => {
  return (
    <S.GameTeamContainer>
      <S.GameTeamName>{name}</S.GameTeamName>
      <S.GameTeamMemberTitle>출전 선수</S.GameTeamMemberTitle>
      <S.GameTeamMemberText>
        {typeof players === 'string'
          ? players
          : players.map((player, i) => (
              <React.Fragment key={i}>
                {player}
                {(i + 1) % 3 === 0 ? <br /> : <>, </>}
              </React.Fragment>
            ))}
      </S.GameTeamMemberText>
    </S.GameTeamContainer>
  );
};

const GameStatus: React.FC<GameScheduleProps> = (props) => {
  if (isGameBefore(props)) {
    const { startTime } = props;

    return (
      <div>
        <S.GameStatusText>경기 시작 전</S.GameStatusText>
        <S.GameInfoText>{startTime} 예정</S.GameInfoText>
      </div>
    );
  } else if (isGameEnd(props)) {
    const { teams } = props;

    return (
      <div>
        <S.GameStatusText>
          {teams.reduce((prev, curr) => (prev.score < curr.score ? curr : prev)).name} 승
        </S.GameStatusText>
        <S.GameStatusText>
          {teams[0].score} : {teams[1].score}
        </S.GameStatusText>
      </div>
    );
  } else if (isGameProgress(props)) {
    const { teams, playtime } = props;
    const timeType = { first: '전반', second: '후반' };
    const time = new Date(playtime.time * 1000).toISOString().substring(14, 19);

    return (
      <>
        <S.GameInfoText style={{ color: '#818181', marginBottom: '0.4rem' }}>
          {timeType[playtime.type]} {time}
        </S.GameInfoText>
        <div>
          <S.GameStatusText>경기 진행 중</S.GameStatusText>
          <S.GameStatusText>
            {teams[0].score} : {teams[1].score}
          </S.GameStatusText>
        </div>
      </>
    );
  }
  return <div></div>;
};

export const GameSchedule: React.FC<GameScheduleProps> = (props) => {
  const { teams, referee } = props;

  return (
    <S.GameScheduleContainer>
      <GameScheduleTeam {...teams[0]} />

      <S.GameScheduleInfoContainer>
        <GameStatus {...props} />
        <S.GameInfoText style={{ marginTop: '0.6rem' }}>심판 {referee}</S.GameInfoText>
      </S.GameScheduleInfoContainer>

      <GameScheduleTeam {...teams[1]} />
    </S.GameScheduleContainer>
  );
};