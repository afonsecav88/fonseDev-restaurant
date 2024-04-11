import { ReservationActions } from '../reducer/ReservationActions';
import { ReservationState } from '../models/reservationState';
import { createContext } from 'react';

export type ReservationContextProps = {
  initialState: ReservationState;
  dispatch: React.Dispatch<ReservationActions>;
};

export const ReservationContext = createContext<ReservationContextProps>(
  {} as ReservationContextProps
);
