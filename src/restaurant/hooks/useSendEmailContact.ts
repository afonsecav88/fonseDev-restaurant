import emailjs from '@emailjs/browser';
import { ContactData } from '../models/contactData';
import { useNotification } from './useNotification';

export const UseSendEmailContact = (bodyMail: ContactData) => {
  const { notificationContactPromise } = useNotification();
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  const sendMailContactPromise = emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      addressee: import.meta.env.VITE_EMAIL_ADDRESSEE,
      message: JSON.stringify(bodyMail),
    }
  );
  notificationContactPromise(sendMailContactPromise);
};
