import { GameScheduleProps } from 'src/components/common';

export const GAME_TYPES = [
  { id: 'basketball', label: '🏀 농구' },
  { id: 'foot-volleyball', label: '⚽️ 족구' },
  { id: 'dodge-ball', label: '🏐 피구' },
];

export const GAME_SCHEDULES: Record<string, GameScheduleProps[]> = {
  basketball: [
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        { name: '메타 2학년 1반', players: '명단 처리 중' },
        { name: '클보 2학년 2반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        { name: '네보 2학년 1반', players: '명단 처리 중' },
        { name: '클보 2학년 1반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/11',
      startTime: '3교시',
      teams: [
        { name: '메타 1학년 1반', players: '명단 처리 중' },
        { name: '클보 1학년 2반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/11',
      startTime: '4교시',
      teams: [
        { name: '메타 1학년 2반', players: '명단 처리 중' },
        { name: '클보 1학년 1반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/11',
      startTime: '방과후',
      teams: [
        { name: '게임 3학년 1반', players: '명단 처리 중' },
        { name: '해킹 3학년 2반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/12',
      startTime: '방과후',
      teams: [
        { name: '해킹 3학년 1반', players: '명단 처리 중' },
        { name: '네보 3학년 1반', players: '명단 처리 중' },
      ],
    },
  ],
  'foot-volleyball': [
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        { name: '네보 2학년 1반', players: '명단 처리 중' },
        { name: '메타 2학년 1반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        { name: '클보 2학년 2반', players: '명단 처리 중' },
        { name: '클보 2학년 1반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/11',
      startTime: '3교시',
      teams: [
        { name: '메타 1학년 1반', players: '명단 처리 중' },
        { name: '클보 1학년 2반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/11',
      startTime: '4교시',
      teams: [
        { name: '메타 1학년 2반', players: '명단 처리 중' },
        { name: '클보 1학년 1반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/11',
      startTime: '방과후',
      teams: [
        { name: '게임 3학년 1반', players: '명단 처리 중' },
        { name: '해킹 3학년 2반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/12',
      startTime: '방과후',
      teams: [
        { name: '해킹 3학년 1반', players: '명단 처리 중' },
        { name: '네보 3학년 1반', players: '명단 처리 중' },
      ],
    },
  ],
  'dodge-ball': [
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        { name: '네보 2학년 1반', players: '명단 처리 중' },
        { name: '메타 2학년 1반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        { name: '클보 2학년 2반', players: '명단 처리 중' },
        { name: '클보 2학년 1반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/15',
      startTime: '수업시간 중 진행',
      teams: [
        { name: '메타 1학년 2반', players: '명단 처리 중' },
        { name: '클보 1학년 2반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/15',
      startTime: '수업시간 중 진행',
      teams: [
        { name: '메타 1학년 1반', players: '명단 처리 중' },
        { name: '클보 1학년 1반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/17',
      startTime: '방과후',
      teams: [
        { name: '게임 3학년 1반', players: '명단 처리 중' },
        { name: '해킹 3학년 2반', players: '명단 처리 중' },
      ],
    },
    {
      status: 'before',
      referee: '은석 T',
      startDate: '05/17',
      startTime: '방과후',
      teams: [
        { name: '해킹 3학년 1반', players: '명단 처리 중' },
        { name: '네보 3학년 1반', players: '명단 처리 중' },
      ],
    },
  ],
};

export const GAME_SCHEDULE_DATES = [
  ...new Set(
    Object.values(GAME_SCHEDULES).reduce<string[]>(
      (prev, curr) => [
        ...prev,
        ...curr.reduce<string[]>((prev, curr) => [...prev, curr.startDate], []),
      ],
      []
    )
  ),
].map((date) => {
  const day = new Date(`2023/${date}`).getDay();
  const displayDay = ['일', '월', '화', '수', '목', '금', '토'];
  return { id: date, label: `${date} (${displayDay[day]})` };
});
