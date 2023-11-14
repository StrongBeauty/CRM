import axios from 'axios';

const TOKEN = 'f314ac845930800b531a2ed0fa7688b34d9b71e1';

export const api = axios.create({
  baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token ' + TOKEN,
  },
});
