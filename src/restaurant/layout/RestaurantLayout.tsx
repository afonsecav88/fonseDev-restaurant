import { Outlet } from 'react-router-dom';
import { Header } from '../shared/components/Header';

export const RestaurantLayout = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center pt-8">
        <Outlet />
      </main>
    </>
  );
};
