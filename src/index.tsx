/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);