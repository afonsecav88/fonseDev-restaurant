import { ReservationDate } from '../components/ReservationDate';
import { ReservationSteps } from '../components/ReservationSteps';

export const ReservationPage = () => {
  return (
    <div className="flex flex-col items-center">
      <ReservationSteps />
      <ReservationDate />
      {/* <ReservationSchedule /> */}
    </div>
  );
};
