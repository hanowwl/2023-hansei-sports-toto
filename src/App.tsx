import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './components/layouts';
import { NAVBAR_MENU } from './constant/navbar';
import { SchedulePage } from './pages/schedule/main';
import { ScheduleFinalPage } from './pages/schedule/final';
import { MainPage } from './pages/main';
import { AuthLoginPage } from './pages/auth/login';
import { AuthProfile } from './pages/auth/profile';
import { ProtectedRoute } from './components/common';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <DefaultLayout menu={NAVBAR_MENU}>
            <Outlet />
          </DefaultLayout>
        }
      >
        <Route
          index
          element={
            <ProtectedRoute isPublic redirectTo="/home">
              <MainPage />
            </ProtectedRoute>
          }
        />

        <Route path="auth">
          <Route
            path="login"
            element={
              <ProtectedRoute isPublic redirectTo="/auth/profile">
                <AuthLoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute needSession redirectTo="/auth/login">
                <AuthProfile />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="schedule">
          <Route index element={<SchedulePage />} />
          <Route path="final" element={<ScheduleFinalPage />} />
        </Route>

        <Route
          element={
            <ProtectedRoute needAuth redirectTo="/auth/login">
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<div>Home</div>} />
        </Route>

        {/* <Route path="prediction" element={<>승부예측</>} />
        <Route path="schedule" element={<SchedulePage />} /> */}
      </Route>
    </Routes>
  );
};
