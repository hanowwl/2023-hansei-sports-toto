import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Session } from '@supabase/supabase-js';

import { supabase } from 'src/supabase';
import { useGetProfileQuery, useRegisterProfileMutation } from 'src/graphql/generated/hooks';
import { SuspenseFallback } from 'src/components/common';

export interface UserProfile {
  id: string;
  name: string;
  studentNo: string;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface UserRequestSMSValues {
  phone: string;
}

export interface UserVerifyOTPValues {
  phone: string;
  token: string;
}

export interface UserRegisterProfileValues {
  studentNo: string;
  name: string;
}

export interface AuthProviderContext {
  requestSMS: (values: UserRequestSMSValues) => Promise<void>;
  verifyOTP: (values: UserVerifyOTPValues) => Promise<void>;
  registerProfile: (values: UserRegisterProfileValues) => Promise<void>;
  session: Session | null;
  profile: UserProfile | null;
}

export const AuthContext = React.createContext<AuthProviderContext | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [init, setInit] = useState<boolean>(false);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const navigate = useNavigate();

  const { refetch: getProfile } = useGetProfileQuery(
    { id: session?.user.id },
    {
      enabled: false,
      onSuccess: ({ userCollection }) => {
        const userProfile = userCollection?.edges[0];
        if (!userProfile) return;
        setInit(true);
        setProfile((prev) => {
          if (prev === null) navigate('/prediction');

          return {
            id: userProfile.node.id,
            name: userProfile.node.name,
            studentNo: userProfile.node.student_no,
          };
        });
      },
    }
  );
  const { mutateAsync: registerProfile } = useRegisterProfileMutation();

  useEffect(() => {
    const initialize = async () => {
      const { data } = await supabase.auth.getSession();
      if (data) setSession(data.session);

      setInit(true);
    };

    initialize();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!session) return;
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        session,
        profile,
        requestSMS: async ({ phone }) => {
          const { error } = await supabase.auth.signInWithOtp({ phone });
          if (error) {
            console.error(error);
            throw new Error('인증번호 발송 중 오류가 발생했어요');
          }
        },
        verifyOTP: async ({ phone, token }) => {
          const { error } = await supabase.auth.verifyOtp({ phone, token, type: 'sms' });
          if (error) {
            if (error.message.includes('Token has expired or is invalid'))
              throw new Error('만료된 인증번호이거나 잘못된 인증번호에요');

            throw new Error('인증 처리 중 오류가 발생했어요');
          }
        },
        registerProfile: ({ name, studentNo }) =>
          new Promise(async (resolve, reject) => {
            if (!session?.user) reject(new Error('문자 인증 후 다시 시도해주세요'));

            await registerProfile(
              { id: session?.user.id, name, studentNo },
              {
                onSuccess: ({ insertIntouserCollection }) => {
                  const userProfile = insertIntouserCollection?.records[0];
                  if (userProfile) {
                    setProfile({
                      id: userProfile.id,
                      name: userProfile.name,
                      studentNo: userProfile.student_no,
                    });
                    resolve();
                  }
                },
                onError: () => reject(new Error('프로필 생성 중 오류가 발생했어요')),
              }
            );
          }),
      }}
    >
      {init ? (
        children
      ) : (
        <SuspenseFallback messages={['사용자 정보를 불러오고 있어요', '잠시간 기다려주세요']} />
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth() must be used within a AuthProvider');

  return context;
};
