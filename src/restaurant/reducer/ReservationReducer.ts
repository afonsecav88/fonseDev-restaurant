import { ReservationState } from '../models/reservationState';
import { ReservationActions } from './ReservationActions';

export const ReservationReducer = (
  state: ReservationState,
  action: ReservationActions
): ReservationState => {
  switch (action.type) {
    case 'Select Tab': {
      return { ...state, selectedTab: action.payload };
    }
    case 'Select Date': {
      return { ...state, selectedDate: action.payload };
    }
    case 'Select turn': {
      return { ...state, selectedTurn: action.payload };
    }
    case 'Select schedule': {
      return { ...state, selectedSchedule: action.payload };
    }

    case 'Select Count Persons': {
      return { ...state, selectedCountPerson: action.payload };
    }
    case 'Get reservation Details': {
      return { ...state, reservationDetails: action.payload };
    }
    default: {
      return state;
    }
  }
};
