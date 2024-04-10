import emailjs from '@emailjs/browser';
import { ContactData } from '../models/contactData';
import { useNotification } from './useNotification';

export const UseSendEmailContact = (bodyMail: ContactData) => {
  const {
    // successContactNotification,
    // errorContactNotification,
    notificationPromise,
  } = useNotification();
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  const response = emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        addressee: import.meta.env.VITE_EMAIL_ADDRESSEE,
        message: JSON.stringify(bodyMail),
      }
    )
    .then((response) => {
      // successContactNotification();
      console.log(response);
    })
    .catch((error) => {
      // errorContactNotification();
      throw new Error(`ha ocurrido un error: ${error}`);
    });

  notificationPromise(response);
};
