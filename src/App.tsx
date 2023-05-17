import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './components/layouts';
import { NAVBAR_MENU } from './constant/navbar';
import { SchedulePage } from './pages/schedule/main';
import { ScheduleFinalPage } from './pages/schedule/final';

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
        <Route index element={<SchedulePage />} />
        <Route path="schedule">
          <Route index element={<SchedulePage />} />
          <Route path="final" element={<ScheduleFinalPage />} />
        </Route>

        {/* <Route path="prediction" element={<>승부예측</>} />
        <Route path="schedule" element={<SchedulePage />} /> */}
      </Route>
    </Routes>
  );
};
