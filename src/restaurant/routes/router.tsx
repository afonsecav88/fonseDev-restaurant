import { createBrowserRouter } from 'react-router-dom';
import { App } from '../../App';
import { ReservationPage, ContactPage, NoFoundPage, Menu } from '../pages/';
import { RestaurantLayout } from '../layout/RestaurantLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    element: <RestaurantLayout />,
    children: [
      {
        path: 'reservation',
        element: <ReservationPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: '*',
        element: <NoFoundPage />,
      },
    ],
  },
]);
