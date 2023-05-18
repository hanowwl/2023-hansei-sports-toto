import React, { useContext, useEffect, useState } from 'react';

import { Session } from '@supabase/supabase-js';

import { supabase } from 'src/supabase';

export interface UserProfile {
  id: string;
  name: string;
  studentNo: string;
  phone: string;
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

export interface AuthProviderContext {
  requestSMS: (values: UserRequestSMSValues) => Promise<void>;
  verifyOTP: (values: UserVerifyOTPValues) => Promise<void>;
  session: Session | null;
  profile: UserProfile | null;
}

export const AuthContext = React.createContext<AuthProviderContext | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [profile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const initialize = async () => {
      const { data } = await supabase.auth.getSession();
      if (data) setSession(data.session);
    };

    initialize();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));

    return () => {
      subscription.unsubscribe();
    };
  }, []);

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
          const { data, error } = await supabase.auth.verifyOtp({ phone, token, type: 'sms' });
          if (error) {
            if (error.message.includes('Token has expired or is invalid'))
              throw new Error('만료된 인증번호이거나 잘못된 인증번호에요');

            throw new Error('인증 처리 중 오류가 발생했어요');
          }

          console.log(data);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth() must be used within a AuthProvider');

  return context;
};
