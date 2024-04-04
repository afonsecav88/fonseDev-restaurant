import { ContactData } from '../shared/models/contactData';

export type ReservationActions =
  | { type: 'Select Date'; payload: Date | undefined }
  | { type: 'Select turn'; payload: number | string }
  | { type: 'Select schedule'; payload: number | string }
  | { type: 'Select Count Persons'; payload: number | string }
  | { type: 'Get reservation Details'; payload: ContactData };

export const selectDate = (payload: Date | undefined): ReservationActions => {
  return {
    type: 'Select Date',
    payload,
  };
};

export const selectTurn = (payload: number | string): ReservationActions => {
  return {
    type: 'Select turn',
    payload,
  };
};

export const selectSchedule = (
  payload: number | string
): ReservationActions => {
  return {
    type: 'Select schedule',
    payload,
  };
};

export const selectCountPerson = (
  payload: number | string
): ReservationActions => {
  return {
    type: 'Select Count Persons',
    payload,
  };
};

export const getReservationDetails = (
  payload: ContactData
): ReservationActions => {
  return {
    type: 'Get reservation Details',
    payload,
  };
};

// export const summitReservationDetails = () => {};
