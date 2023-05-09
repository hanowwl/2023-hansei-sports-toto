import styled from '@emotion/styled';

export const GameScheduleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  border-radius: 0.8rem;
  border: 1px solid #f0f0f0;

  & > div:nth-of-type(1) {
    text-align: left;
  }

  & > div:nth-of-type(2) {
    text-align: center;
  }

  & > div:nth-of-type(3) {
    text-align: right;
  }
`;

export const GameTeamContainer = styled.div``;

export const GameTeamName = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

export const GameTeamMemberTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: #cd4a5a;
  margin-bottom: 0.4rem;
`;

export const GameTeamMemberText = styled.p`
  font-size: 1.4rem;
  line-height: 130%;
  color: #949494;
`;

export const GameScheduleInfoContainer = styled.div``;

export const GameStatusText = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  color: #cd4a5a;
`;

export const GameInfoText = styled.p`
  font-size: 1.2rem;
  color: #b1b1b1;
`;
