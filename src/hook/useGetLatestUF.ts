import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import Config from 'react-native-config';

// {
//   "UFs": [
//       {
//           "Valor": "37.762,97",
//           "Fecha": "2024-09-01"
//       }
//   ]
// }

type UF = {
  Valor: number;
  Fecha: string;
};

const initialState: UF = {
  Valor: 0,
  Fecha: '',
};

const getDataSaved = async () => {
  try {
    const data = await AsyncStorage.getItem('todayUF');
    return data;
  } catch (e) {
    // saving error
    console.log('error', e);
  }
};

const GetUF = async () => {
  const URL = String(Config.REACT_APP_API_URL);
  const response = await fetch(URL);
  return await response.json();
};

const useGetLatestUF = () => {
  const [todayUF, setTodayUF] = useState<UF>(initialState);
  const dataSaved = useQuery({queryKey: ['savedUF'], queryFn: getDataSaved});
  const dataFetched = useQuery({
    queryKey: ['fetchData'],
    queryFn: GetUF,
    enabled: false,
  });

  useEffect(() => {
    if (dataSaved.status === 'success' && dataSaved.data === null) {
      dataFetched.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSaved.status]);

  useEffect(() => {
    if (dataFetched.status === 'success') {
      AsyncStorage.setItem('todayUF', JSON.stringify(dataFetched.data));
      setTodayUF(dataFetched.data.UFs[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFetched.status]);

  return {todayUF, tryAgainFetch: dataFetched.refetch};
};

export default useGetLatestUF;
