import { Reservation } from '../components/Reservation';
import { ReservationSteps } from '../components/ReservationSteps';

export const ReservationPage = () => {
  return (
    <div className="flex flex-col items-center">
      <ReservationSteps />
      <Reservation />
    </div>
  );
};
