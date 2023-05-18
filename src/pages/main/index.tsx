import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typo } from 'src/components/common';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <S.PageContainer>
      <div
        style={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '2.4rem',
        }}
      >
        <img src="/logo.webp" width={180} />
        <S.TitleContainer>
          <Typo.H1>2023 교내 스포츠한마당</Typo.H1>
          <Typo.Small style={{ marginBottom: '6rem' }}>즐거운 스포츠한마당되세요 !~!</Typo.Small>
        </S.TitleContainer>
      </div>

      <Link to="/auth/login">
        <Button style={{ position: 'absolute', bottom: '2.4rem' }} fillWidth>
          전화번호 인증으로 시작하기
        </Button>
      </Link>
    </S.PageContainer>
  );
};
