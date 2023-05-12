import { GameScheduleProps } from 'src/components/common';

export const GAME_TYPES = [
  { id: 'basketball', label: '🏀 농구' },
  { id: 'foot-volleyball', label: '⚽️ 족구' },
  { id: 'dodge-ball', label: '🏐 피구' },
];

export const GAME_SCHEDULES: Record<string, GameScheduleProps[]> = {
  basketball: [
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        {
          name: '메타 2학년 1반',
          players: ['김*완(01)', '김*훈(02)', '박*환(04)', '이*훈(12)', '조*르(14)'],
          reservePlayers: ['이*혁(11)', '장*아(13)'],
          score: 0,
        },
        {
          name: '클보 2학년 2반',
          players: ['신*호(07)', '여*호(09)', '이*현(11)', '이*서(12)', '조*원(15)'],
          reservePlayers: ['김*빈(01)', '김*욱(02)'],
          score: 17,
        },
      ],
    },
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        {
          name: '네보 2학년 1반',
          players: ['김*총(03)', '박*성(08)', '육*영(13)', '이*우(15)', '홍*성(16)'],
          reservePlayers: ['강*민(01)', '박*훈(07)'],
          score: 6,
        },
        {
          name: '클보 2학년 1반',
          players: ['김*균(02)', '김*준(04)', '김*훈(06)', '박*준(08)', '최*원(15)'],
          reservePlayers: ['김*훈(03)', '윤*혁(13)'],
          score: 2,
        },
      ],
    },
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/11',
      startTime: '3교시',
      teams: [
        {
          name: '메타 1학년 1반',
          players: ['김*욱(03)', '류*철(08)', '반*주(09)', '이*종(14)', '조*열(15)'],
          reservePlayers: ['노*성(11)', '김*이(06)'],
          score: 0,
        },
        {
          name: '클보 1학년 2반',
          players: ['권*현(01)', '김*준(02)', '박*문(06)', '이*우(10)', '이*진(11)'],
          reservePlayers: ['박*원(07)', '임*민(13)'],
          score: 17,
        },
      ],
    },
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/11',
      startTime: '4교시',
      teams: [
        {
          name: '메타 1학년 2반',
          players: ['박*민(06)', '박*영(09)', '배*민(10)', '양*수(12)', '아*드(18)'],
          reservePlayers: ['이*(14)', '정*성(16)'],
          score: 0,
        },
        {
          name: '클보 1학년 1반',
          players: ['김*재(02)', '김*동(03)', '박*경(07)', '이*희(10)', '임*현(11)'],
          reservePlayers: ['김*현(01)', '현빈(13)'],
          score: 8,
        },
      ],
    },
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/11',
      startTime: '방과후',
      teams: [
        {
          name: '게임 3학년 1반',
          players: ['윤*혁(11)', '이*우(14)', '조*진(18)', '최*우(19)', '황*윤(21)'],
          reservePlayers: ['양*민(10)', '이*혁(13)'],
          score: 11,
        },
        {
          name: '해킹 3학년 2반',
          players: ['김*우(03)', '김*서(04)', '안*민(11)', '이*경(12)', '조*준(17)'],
          reservePlayers: ['안*후(10)', '이*주(13)'],
          score: 15,
        },
      ],
    },
    {
      status: 'before',
      referee: '은석T',
      startDate: '05/12',
      startTime: '방과후',
      teams: [
        {
          name: '해킹 3학년 1반',
          players: ['서*찬(11)', '이*수(14)', '정*성(16)', '최*성(18)', '최*양(19)'],
          reservePlayers: ['문*준(09)', '최*혁(17)'],
        },
        {
          name: '네보 3학년 1반',
          players: ['권*우(01)', '남*석(07)', '송*우(13)', '원*연(17)', '조*우(20)'],
          reservePlayers: ['박*석(09)', '양*성(15)'],
        },
      ],
    },
  ],
  'foot-volleyball': [
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        {
          name: '네보 2학년 1반',
          players: ['김*총(03)', '김*유(04)', '박*성(08)', '양*철(11)', '이*우(15)'],
          reservePlayers: ['육*영(13)', '홍*성(16)'],
          score: 14,
        },
        {
          name: '메타 2학년 1반',
          players: ['김*완(01)', '오*환(05)', '유*현(08)', '이*훈(12)', '홍*범(17)'],
          reservePlayers: ['김*온(03)', '이*하(10)'],
          score: 16,
        },
      ],
    },
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        {
          name: '클보 2학년 2반',
          players: ['신*호(07)', '윤*영(10)', '이*서(12)', '임*현(13)', '조*원(15)'],
          reservePlayers: ['박*영(06)', '신*민(08)'],
          score: 17,
        },
        {
          name: '클보 2학년 1반',
          players: ['김*준(04)', '박*준(08)', '배*혜(10)', '신*희(11)', '최*원(15)'],
          reservePlayers: ['백*철(09)', '조*영(14)'],
          score: 15,
        },
      ],
    },
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/11',
      startTime: '3교시',
      teams: [
        {
          name: '메타 1학년 1반',
          players: ['한*국(16)', '김*서(05)', '윤*기(12)', '홍*기(17)', '김*택(07)'],
          reservePlayers: ['김*혁(04)', '김*이(06)'],
          score: 12,
        },
        {
          name: '클보 1학년 2반',
          players: ['박*우(05)', '박*원(07)', '이*우(10)', '이*영(12)', '홍*희(18)'],
          reservePlayers: ['김*욱(04)', '박*(08)'],
          score: 15,
        },
      ],
    },
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/11',
      startTime: '4교시',
      teams: [
        {
          name: '메타 1학년 2반',
          players: ['김*환(04)', '김*(05)', '박*빈(07)', '임*훈(15)', '정*성(16)'],
          reservePlayers: ['강*우(01)', '안*태(11)'],
          score: 15,
        },
        {
          name: '클보 1학년 1반',
          players: ['김*현(01)', '전*연(14)', '지*원(15)', '최*윤(17)', '최*호(18)'],
          reservePlayers: ['김*재(02)', '박*진(08)'],
          score: 9,
        },
      ],
    },
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/11',
      startTime: '방과후',
      teams: [
        {
          name: '게임 3학년 1반',
          players: ['윤*혁(11)', '조*진(13)', '이*우(14)', '이*혁(16)', '최*우(19)'],
          reservePlayers: ['김*준(05)', '이*혁(15)'],
          score: 4,
        },
        {
          name: '해킹 3학년 2반',
          players: ['김*서(04)', '박*희(07)', '이*경(12)', '이*주(13)', '조*준(17)'],
          reservePlayers: ['손*은(08)', '장*진(15)'],
          score: 9,
        },
      ],
    },
    {
      status: 'before',
      referee: '은석T',
      startDate: '05/12',
      startTime: '방과후',
      teams: [
        {
          name: '해킹 3학년 1반',
          players: ['김*건(02)', '류*희(08)', '민*기(10)', '서*찬(11)', '이*연(13)'],
          reservePlayers: ['김*필(06)', '선*우(12)'],
        },
        {
          name: '네보 3학년 1반',
          players: ['권*우(01)', '남*석(07)', '송*우(13)', '양*성(15)', '조*우(20)'],
          reservePlayers: ['김*진(04)', '원*연(15)'],
        },
      ],
    },
  ],
  'dodge-ball': [
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        {
          name: '네보 2학년 1반',
          players: [
            '강*민(01)',
            '김*유(04)',
            '김*경(05)',
            '김*성(06)',
            '박*훈(07)',
            '안*민(10)',
            '양*철(11)',
            '유*준(12)',
            '이*원(14)',
            '홍*성(16)',
          ],
          score: 1,
        },
        {
          name: '메타 2학년 1반',
          players: [
            '김*온(03)',
            '박*환(04)',
            '오*환(05)',
            '위*호(06)',
            '유*수(07)',
            '유*현(08)',
            '윤*영(09)',
            '주*재(16)',
            '홍*범(17)',
            '황*연(18)',
          ],
          score: 0,
        },
      ],
    },
    {
      status: 'end',
      referee: '은석T',
      startDate: '05/10',
      startTime: '수업시간 중 진행',
      teams: [
        {
          name: '클보 2학년 2반',
          players: [
            '김*주(03)',
            '김*연(04)',
            '박*주(05)',
            '신*민(08)',
            '여*호(09)',
            '윤*영(10)',
            '이*현(11)',
            '임*현(13)',
            '정*영(14)',
            '홍*규(16)',
          ],
          score: 0,
        },
        {
          name: '클보 2학년 1반',
          players: [
            '김*균(02)',
            '김*준(04)',
            '김*빈(05)',
            '김*훈(06)',
            '박*윤(07)',
            '박*준(08)',
            '배*혜(10)',
            '신*희(11)',
            '엄*진(12)',
            '최*원(15)',
          ],
          score: 1,
        },
      ],
    },
    {
      status: 'before',
      referee: '은석T',
      startDate: '05/15',
      startTime: '수업시간 중 진행',
      teams: [
        {
          name: '메타 1학년 2반',
          players: [
            '강*우(01)',
            '김*환(04)',
            '김*(05)',
            '박*민(06)',
            '박*영(08)',
            '양*수(12)',
            '안*태(11)',
            '배*민(10)',
            '임*훈(15)',
            '아*드(18)',
          ],
        },
        {
          name: '클보 1학년 2반',
          players: [
            '권*현(01)',
            '김*성(03)',
            '김*욱(04)',
            '박*우(05)',
            '유*혁(09)',
            '이*진(11)',
            '이*영(12)',
            '정*원(14)',
            '추*강(17)',
            '홍*희(18)',
          ],
        },
      ],
    },
    {
      status: 'before',
      referee: '은석T',
      startDate: '05/15',
      startTime: '수업시간 중 진행',
      teams: [
        {
          name: '메타 1학년 1반',
          players: [
            '권*우(01)',
            '김*서(05)',
            '김*택(07)',
            '송*원(10)',
            '윤*기(12)',
            '이*우(13)',
            '한*국(16)',
            '홍*기(17)',
            '황*윤(18)',
          ],
        },
        {
          name: '클보 1학년 1반',
          players: [
            '김*동(03)',
            '김*채(04)',
            '박*경(07)',
            '이*희(10)',
            '임*현(11)',
            '임*은(12)',
            '전*연(14)',
            '지*원(15)',
            '최*윤(17)',
            '최*호(18)',
          ],
        },
      ],
    },
    {
      status: 'before',
      referee: '은석T',
      startDate: '05/17',
      startTime: '방과후',
      teams: [
        {
          name: '게임 3학년 1반',
          players: [
            '김*훈(02)',
            '김*석(04)',
            '김*태(06)',
            '박*혁(07)',
            '박*우(08)',
            '양*민(10)',
            '이*혁(13)',
            '이*혁(15)',
            '이*혁(16)',
            '이*정(17)',
          ],
        },
        {
          name: '해킹 3학년 2반',
          players: [
            '권*찬(01)',
            '김*우(03)',
            '박*권(06)',
            '박*희(07)',
            '손*은(08)',
            '안*후(10)',
            '장*진(15)',
            '정*준(16)',
            '진*석(18)',
            '한*원(19)',
          ],
        },
      ],
    },
    {
      status: 'before',
      referee: '은석T',
      startDate: '05/17',
      startTime: '방과후',
      teams: [
        {
          name: '해킹 3학년 1반',
          players: [
            '김*건(02)',
            '김*정(03)',
            '김*랑(04)',
            '김*진(05)',
            '김*민(07)',
            '류*희(08)',
            '정*성(16)',
            '최*성(18)',
            '최*양(19)',
            '한*범(20)',
          ],
        },
        {
          name: '네보 3학년 1반',
          players: [
            '김*환(02)',
            '김*훈(03)',
            '김*익(05)',
            '김*나(06)',
            '박*석(09)',
            '박*우(10)',
            '박*성(11)',
            '배*환(12)',
            '이*성(19)',
          ],
        },
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
