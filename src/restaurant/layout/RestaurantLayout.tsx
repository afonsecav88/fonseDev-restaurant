import { Outlet } from 'react-router-dom';
import { Header } from '../shared/components/Header';
import { ReservationProvider } from '../context/ReservationProvider';

export const RestaurantLayout = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center pt-8">
        <ReservationProvider>
          <Outlet />
        </ReservationProvider>
      </main>
    </>
  );
};
