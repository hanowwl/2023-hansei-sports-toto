import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Global } from '@emotion/react';

import { App } from './App.tsx';
import { globalStyle } from './styles';

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={[globalStyle]} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
