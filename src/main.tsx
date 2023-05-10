import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Global } from '@emotion/react';
import * as Sentry from '@sentry/react';

import { App } from './App.tsx';
import { globalStyle } from './styles';
import { ENV } from './constant/env.ts';

Sentry.init({
  dsn: ENV.SENTRY_DSN_URL,
  environment: ENV.MODE,
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],

  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!

  // Session Replay
  replaysSessionSampleRate: ENV.MODE === 'development' ? 1.0 : 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={[globalStyle]} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
