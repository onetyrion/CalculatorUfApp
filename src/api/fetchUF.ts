import dayjs from 'dayjs';
import Config from 'react-native-config';

const BASE_URL = Config.REACT_APP_API_URL;
const API_KEY = Config.API_KEY;
const FORMAT = Config.FORMAT;

export const GetUF = async (): Promise<ResponseAPI> => {
  const year = dayjs().get('year');
  const month = dayjs().get('months') + 1;
  const url = new URL(`/${year}/${month}`, BASE_URL);

  url.searchParams.append('apikey', API_KEY);
  url.searchParams.append('formato', FORMAT);

  const response = await fetch(url);

  return await response.json();
};
