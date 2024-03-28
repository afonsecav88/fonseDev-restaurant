import axios from 'axios';
import { APIKEY } from '../../../config';

export const sendMailApi = axios.create({
  baseURL: `https://api.mailjet.com/v3.1/send`,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic <${APIKEY}>`,
  },
});
