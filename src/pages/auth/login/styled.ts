import styled from '@emotion/styled';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  & > div {
    width: 100%;
  }
`;
