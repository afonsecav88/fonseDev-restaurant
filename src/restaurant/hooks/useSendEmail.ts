import emailjs from '@emailjs/browser';
import { ContactData } from '../shared/models/contactData';

export const UseSendEmail = (bodyMail: ContactData) => {
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        addressee: import.meta.env.VITE_EMAIL_ADDRESSEE,
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
