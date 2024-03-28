import { sendMailService } from '../services/sendMailService';
import { ContactData } from '../shared/Models/contactData';

export const UseSendMail = (data: ContactData) => {
  sendMailService(data);
};
