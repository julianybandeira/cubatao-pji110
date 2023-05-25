/* eslint-disable no-useless-catch */
import axios from 'axios';

const urlApi = 'exemplo.com.br';

const api = axios.create({
  baseURL: urlApi,
});

export const getAllManuals = async () => {
  try {
    const manuals = await api.get('/manual');
    return manuals.data;
  } catch (err) {
    throw err;
  }
};

export const postManual = async (manual) => {
  return await api.post('/post', manual);
};
