import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './Styles.css';
import { NextUIProvider } from '@nextui-org/react';
import { router } from './restaurant/routes/router';
import { ReservationProvider } from './restaurant/context/ReservationProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ReservationProvider>
        <RouterProvider router={router} />
      </ReservationProvider>
    </NextUIProvider>
  </React.StrictMode>
);
