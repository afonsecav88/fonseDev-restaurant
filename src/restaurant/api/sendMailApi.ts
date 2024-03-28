import axios from 'axios';

const APIKEY = ""

export const sendMailApi = axios.create({
  baseURL: `https://api.mailjet.com/v3.1/send`,
  method: "post",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic <${APIKEY}>`
  },});




let data = JSON.stringify({
  "Messages": [
    {
      "From": {
        "Email": "pilot@mailjet.com",
        "Name": "Mailjet Pilot"
      },
      "To": [
        {
          "Email": "user@mail",
          "Name": "passenger 1"
        }
      ],
      "Subject": "Your email flight plan!",
      "TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
      "HTMLPart": "<h3>Dear passenger</h3> 1, welcome to Mailjet May the delivery force be with you!"
    }
  ]
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.mailjet.com/v3.1/send',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Basic <APIKEY>’
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
})
.finally(console.log("Mail ok"));
