import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import { ResponseAPI } from '../types/ResponseApi';
import { UF } from '../types/UF';

export const initialState: UF = {
  Valor: '37.762,97',
  Fecha: '',
};

export const getDataSaved = async (): Promise<UF | undefined> => {
  const data = await AsyncStorage.getItem('todayUF');
  let dataParsed: Partial<ResponseAPI> = { UFs: [initialState] };

  if (data) {
    dataParsed = JSON.parse(data);
  }
  if (dataParsed?.UFs && dataParsed.UFs.length > 0) {
    const actualData = dataParsed.UFs.find((e) => e.Fecha === dayjs().format('YYYY-MM-DD'));
    if (actualData) {
      return actualData;
    } else {
      throw new Error('No data saved');
    }
  } else {
    throw new Error('No data saved');
  }
};
