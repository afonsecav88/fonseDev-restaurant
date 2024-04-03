import { Schedule, TypeFood } from '../shared/models/reservationData';
import { ReservationState } from '../shared/models/reservationState';
import { ReservationContext } from './ReservationContext';

interface ReservationProviderProps {
  children: JSX.Element | JSX.Element[];
}
const initialState: ReservationState = {
  reservationDetails: { name: '', email: '', phone: '', message: '' },
  selectedTab: 'step1',
  selectedDate: new Date(),
  selectedCountPerson: 0,
  selectedTurn: TypeFood.Breakfast,
  selectedSchedule: Schedule.Breakfast,
};

export const ReservationProvider = ({ children }: ReservationProviderProps) => {
  return (
    <ReservationContext.Provider value={initialState}>
      {children}
    </ReservationContext.Provider>
  );
};
