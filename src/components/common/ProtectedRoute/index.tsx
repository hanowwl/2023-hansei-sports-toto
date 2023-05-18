import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from 'src/providers';

export interface ProtectedRouteProps {
  isPublic?: boolean;
  needAuth?: boolean;
  needSession?: boolean;
  redirectTo?: string;

  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isPublic = false,
  needAuth = false,
  needSession = false,
  redirectTo = isPublic ? '/prediction' : '/auth/login',
  children,
}) => {
  const { profile, session } = useAuth();

  if (needAuth && (!profile || !session)) return <Navigate to={redirectTo} />;
  if (needSession && !session) return <Navigate to={redirectTo} />;
  if (isPublic && (profile || session)) return <Navigate to={redirectTo} />;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
