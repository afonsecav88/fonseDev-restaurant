import { useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';

export const useReservationContext = () => {
  return useContext(ReservationContext);
};
