import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Toaster } from 'sonner';

export const RestaurantLayout = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center pt-8">
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: 'success-notification',
          }}
          richColors
        />
        <Outlet />
      </main>
    </>
  );
};
