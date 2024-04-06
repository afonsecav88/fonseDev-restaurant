import { useReducer } from 'react';
import { Schedule, TypeFood } from '../models/reservationData';
import { ReservationState } from '../models/reservationState';
import { ReservationContext } from './ReservationContext';
import { ReservationReducer } from '../reducer/ReservationReducer';

interface ReservationProviderProps {
  children: JSX.Element | JSX.Element[];
}
const initialStateReservation: ReservationState = {
  selectedTab: 'step1',
  selectedDate: new Date(),
  selectedCountPerson: 0,
  selectedTurn: TypeFood.Breakfast,
  selectedSchedule: Schedule.Breakfast,
  reservationDetails: { name: '', email: '', phone: '', message: '' },
};

export const ReservationProvider = ({ children }: ReservationProviderProps) => {
  const [initialState, dispatch] = useReducer(
    ReservationReducer,
    initialStateReservation
  );
  return (
    <ReservationContext.Provider value={{ initialState, dispatch }}>
      {children}
    </ReservationContext.Provider>
  );
};
