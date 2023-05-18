import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { Button, Input, Typo } from 'src/components/common';
import { UserRegisterProfileValues, useAuth } from 'src/providers';

import * as S from './styled';

const TEACHER_NO = 'T1005';

export const AuthProfile: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [studentNo, setStudentNo] = useState<string>('');
  const [errors, setErrors] = useState({ name: '', studentNo: '' });

  const { mutateAsync: registerProfile } = useMutation<
    void,
    Error,
    UserRegisterProfileValues,
    void
  >({
    mutationFn: async (values: UserRegisterProfileValues) => {
      return await auth.registerProfile(values);
    },
  });

  const handleOnClickSubmit = async () => {
    if (!name || !/^[가-힣]{2,4}$/.test(name))
      setErrors((prev) => ({ ...prev, name: '올바른 이름을 입력해주세요' }));
    if (!studentNo || (studentNo !== TEACHER_NO && !/(M|C|N|G|H)\d{4}/.test(studentNo)))
      setErrors((prev) => ({
        ...prev,
        studentNo: '올바른 학번을 입력해주세요',
      }));

    if (Object.values(errors).filter((v) => v !== '').length > 0) return;
    setErrors({ name: '', studentNo: '' });

    await registerProfile(
      { name, studentNo },
      {
        onSuccess: () => {
          navigate('/');
        },
        onError: (error) => {
          alert(error.message);
          console.log(error);
        },
      }
    );
  };

  return (
    <S.PageContainer>
      <div style={{ marginBottom: '1.6rem' }}>
        <Typo.H1>프로필 정보 입력</Typo.H1>
        <Typo.Small>추후 이벤트 상품 지급을 위해 올바른 정보를 입력해주세요</Typo.Small>
      </div>

      <S.ProfileForm>
        <Input
          label="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          message={errors.name}
          error={Boolean(errors.name)}
        />
        <Input
          label="학번"
          value={studentNo}
          onChange={(e) => setStudentNo(e.target.value)}
          message={
            errors.studentNo ||
            '예시) 메타 1학년 1반 1번 -> M1101 / 메타 M, 클보, C, 네보, N, 해킹 H, 게임 G'
          }
          error={Boolean(errors.studentNo)}
        />
      </S.ProfileForm>
      <Button style={{ marginTop: 'auto' }} fillWidth onClick={handleOnClickSubmit}>
        {studentNo === TEACHER_NO
          ? `${name} 선생님, 즐거운 체육대회 되세요 !`
          : '교내스포츠한마당 즐기러 가기 !'}
      </Button>
    </S.PageContainer>
  );
};
