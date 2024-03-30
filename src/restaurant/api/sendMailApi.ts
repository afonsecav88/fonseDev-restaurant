import axios from 'axios';
import { APIKEY } from '../../../config';

export const sendMailApi = axios.create({
  maxBodyLength: Infinity,
  url: 'https://api.mailjet.com/v3.1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${APIKEY}`,
  },
});
