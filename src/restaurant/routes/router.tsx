import { createBrowserRouter } from 'react-router-dom';
import { App } from '../../App';
import { Reservation } from '../pages/Reservation';
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
        element: <Reservation />,
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
