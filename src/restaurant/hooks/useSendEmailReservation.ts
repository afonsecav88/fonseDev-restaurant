import emailjs from '@emailjs/browser';
import { ContactData } from '../models/contactData';

export const UseSendEmailReservation = (bodyMail: ContactData) => {
  const { name, email } = bodyMail;
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_RESERVATION_TEMPLATE_ID,
      {
        addressee: email,
        reply_to: import.meta.env.VITE_EMAIL_ADDRESSEE,
        to_name: name,
        message: JSON.stringify(bodyMail),
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
