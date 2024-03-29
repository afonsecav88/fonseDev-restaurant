import { sendMailService } from '../services/sendMailService';
import { ContactData } from '../shared/models/contactData';

export const UseSendMail = (data: ContactData) => {
  sendMailService(data);
};
