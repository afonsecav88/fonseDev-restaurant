import { useNavigate } from 'react-router-dom';
import { setReservationDetails } from '../reducer/ReservationActions';
import { useReservationContext } from './useReservationContext';
import { Steps } from '../models/reservationData';
import { UseSendEmailReservation } from './useSendEmailReservation';

export const useHandleSubmitReservation = () => {
  const { initialState, dispatch } = useReservationContext();
  const HandleSubmitReservation = () => {
    UseSendEmailReservation(initialState);
    dispatch(
      setReservationDetails({
        reservationDetails: { name: '', email: '', phone: '', message: '' },
        selectedTab: Steps.Step1,
        selectedDate: new Date(),
        selectedTurn: '',
        selectedSchedule: '',
        selectedCountPerson: '',
      })
    );
  };
  return { HandleSubmitReservation };
};
