import emailjs from '@emailjs/browser';
import { format } from 'date-fns';
import { ReservationState } from '../models/reservationState';
import { useNotification } from './useNotification';

export const UseSendEmailReservation = (bodyMail: ReservationState) => {
  const { notificationReservationPromise } = useNotification();
  const {
    reservationDetails,
    selectedDate,
    selectedTurn,
    selectedSchedule,
    selectedCountPerson,
  } = bodyMail;
  const { email, name, phone, message } = reservationDetails;

  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  const sendMailReservationPromise = emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_RESERVATION_TEMPLATE_ID,
    {
      addressee: email,
      reply_to: import.meta.env.VITE_EMAIL_ADDRESSEE,
      to_name: name,
      selectedDate: format(selectedDate, 'PP'),
      selectedTurn,
      selectedSchedule,
      selectedCountPerson,
      name,
      email,
      phone,
      message,
    }
  );
  // .then(() => {
  //   successReservationNotification();
  // })
  // .catch((error) => {
  //   errorReservationNotification();
  //   throw new Error(`ha ocurrido un error: ${error}`);
  // });
  notificationReservationPromise(sendMailReservationPromise);
};
