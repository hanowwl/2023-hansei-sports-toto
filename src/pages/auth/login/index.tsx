import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { Button, Typo } from 'src/components/common';
import { Input } from 'src/components/common/Input';
import { UserRequestSMSValues, UserVerifyOTPValues, useAuth } from 'src/providers';
import { usePhoneInput } from 'src/hooks';

import * as S from './styled';

export const AuthLoginPage: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [phone, handleOnChangePhone, validatePhone] = usePhoneInput();
  const [token, setToken] = useState<string>('');

  const {
    mutate: requestSMS,
    error: SMSError,
    isSuccess: SMSSuccess,
    isLoading: SMSLoading,
  } = useMutation<void, Error, UserRequestSMSValues, unknown>({
    mutationFn: async (values: UserRequestSMSValues) => {
      if (!phone || !validatePhone(phone)) throw new Error('올바른 전화번호를 입력해주세요');
      return await auth.requestSMS(values);
    },
  });

  const {
    mutate: verifyOTP,
    error: OTPError,
    isSuccess: OTPSuccess,
    isLoading: OTPLoading,
  } = useMutation<void, Error, UserVerifyOTPValues, unknown>({
    mutationFn: async (values: UserVerifyOTPValues) => {
      return await auth.verifyOTP(values);
    },
  });

  return (
    <S.PageContainer>
      <div style={{ marginBottom: '1.6rem' }}>
        <Typo.H1>로그인</Typo.H1>
        <Typo.Small>전화번호 SMS 인증 후 이름과 학번을 입력해주세요</Typo.Small>
      </div>

      <S.LoginForm>
        <S.InputContainer>
          <Input
            label="전화번호"
            message={SMSError?.message || '입력하신 전화번호로 인증 문자가 발송될 예정이에요'}
            value={phone}
            onChange={handleOnChangePhone}
            error={Boolean(SMSError?.message)}
            disabled={SMSSuccess}
          />
          <Button
            style={{ marginTop: '0.8rem' }}
            onClick={() => requestSMS({ phone: `+82${phone.slice(1).replace(/-/g, '')}` })}
            loading={SMSLoading}
            disabled={SMSSuccess}
          >
            {!SMSLoading && '요청'}
          </Button>
        </S.InputContainer>

        {SMSSuccess && (
          <>
            <Input
              label="인증코드"
              message={OTPError?.message || `${phone}으로 발송된 인증코드 6자리를 입력해주세요`}
              value={token}
              onChange={(e) => setToken(e.target.value)}
              error={Boolean(OTPError?.message)}
              disabled={OTPSuccess}
            />
            <Button
              style={{ marginTop: 'auto' }}
              fillWidth
              disabled={!token || token.length < 6 || OTPLoading}
              onClick={() =>
                verifyOTP(
                  { phone: `+82${phone.slice(1).replace(/-/g, '')}`, token },
                  { onSuccess: () => navigate('/auth/profile') }
                )
              }
              loading={OTPLoading}
            >
              {OTPLoading ? '인증 처리 중이에요' : '다음'}
            </Button>
          </>
        )}
      </S.LoginForm>
    </S.PageContainer>
  );
};
