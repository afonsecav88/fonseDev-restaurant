import axios from 'axios';
import { EMAIL } from '../../../config';
import { ContactData } from '../shared/Models/contactData';

export const sendMailService = async (dataMail: ContactData) => {
  const data = JSON.stringify({
    Messages: [
      {
        From: {
          Email: 'pilot@mailjet.com',
          Name: 'Mailjet Pilot',
        },
        To: [
          {
            Email: `${EMAIL}`,
            Name: 'Nuevo comentario',
          },
        ],
        Subject: 'Recibiste un nuevo mensaje',
        TextPart: 'Acabas de recibir un nuevo comentario',
        HTMLPart: `<h3>Dear </h3> 1,${dataMail}`,
      },
    ],
  });

  return await axios
    .post<ContactData>(data)
    .then(() => {
      console.log(data);
    })
    .catch((error: Error) => {
      throw new Error(`Ha ocurrido un error  ${error} `);
    })
    .finally();
};
