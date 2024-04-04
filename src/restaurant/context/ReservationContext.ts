import { createContext } from 'react';

import { ReservationActions } from '../reducer/ReservationActions';
import { ReservationState } from '../shared/models/reservationState';

export type ReservationContextProps = {
  initialState: ReservationState;
  dispatch: React.Dispatch<ReservationActions>;
};

export const ReservationContext = createContext<ReservationContextProps>(
  {} as ReservationContextProps
);
