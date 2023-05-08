import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './components/layouts';
import { NAVBAR_MENU } from './constant/navbar';

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
        <Route index element={<>홈</>} />
        <Route path="prediction" element={<>승부예측</>} />
        <Route path="schedule" element={<>경기일정</>} />
      </Route>
    </Routes>
  );
};
