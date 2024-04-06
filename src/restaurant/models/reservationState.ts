import { ContactData } from './contactData';

export interface ReservationState {
  reservationDetails: ContactData;
  selectedTab: string;
  selectedDate: Date | undefined;
  selectedCountPerson: string | number;
  selectedTurn: string | number;
  selectedSchedule: string | number;
}
