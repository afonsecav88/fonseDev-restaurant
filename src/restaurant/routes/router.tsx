import { createBrowserRouter } from 'react-router-dom';
import { App } from '../../App';
import { ReservationPage } from '../pages/ReservationPage';
import { ContactPage } from '../pages/ContactPage';
import { NoFoundPage } from '../pages/NoFoundPage';
import { RestaurantLayout } from '../layout/RestaurantLayout';
import { Menu } from '../pages/Menu';

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
