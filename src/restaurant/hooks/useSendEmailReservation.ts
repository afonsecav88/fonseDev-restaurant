import emailjs from '@emailjs/browser';

import { ReservationState } from '../models/reservationState';

export const UseSendEmailReservation = (bodyMail: ReservationState) => {
  console.log(bodyMail);
  const {
    reservationDetails,
    selectedDate,
    selectedTurn,
    selectedSchedule,
    selectedCountPerson,
  } = bodyMail;
  const { email, name, phone, message } = reservationDetails;

  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_RESERVATION_TEMPLATE_ID,
      {
        addressee: email,
        reply_to: import.meta.env.VITE_EMAIL_ADDRESSEE,
        to_name: name,
        selectedDate,
        selectedTurn,
        selectedSchedule,
        selectedCountPerson,
        name,
        email,
        phone,
        message,
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(`ha ocurrido un error: ${error}`);
    });
};
