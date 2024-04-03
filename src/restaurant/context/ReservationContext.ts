import { createContext } from 'react';
import { ReservationState } from '../shared/models/reservationState';

export const ReservationContext = createContext<ReservationState>(
  {} as ReservationState
);
