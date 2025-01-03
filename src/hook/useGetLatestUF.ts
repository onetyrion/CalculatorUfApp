import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { GetUF } from '../api/fetchUF';
import { getDataSaved, initialState } from '../api/fetchSavedData';
import dayjs from 'dayjs';
import { UF } from '../types/UF';

const useGetLatestUF = () => {
  const [todayUF, setTodayUF] = useState<UF>(initialState);
  const dataSaved = useQuery({ queryKey: ['savedUF'], queryFn: getDataSaved });
  const dataFetched = useQuery({
    queryKey: ['fetchData'],
    queryFn: GetUF,
    enabled: false,
  });

  useEffect(() => {
    console.log('dataSaved');
    if (
      dataFetched.fetchStatus === 'idle' &&
      dataSaved.status === 'success' &&
      dataSaved.data !== undefined
    ) {
      setTodayUF(dataSaved.data);
    }
  }, [dataSaved.status]);

  useEffect(() => {
    if (dataFetched.status === 'success' && dataFetched?.data?.UFs !== undefined) {
      const ActualData = dataFetched.data.UFs.find(
        (e: UF) => e.Fecha === dayjs().format('YYYY-MM-DD')
      ) as UF;
      AsyncStorage.setItem('todayUF', JSON.stringify(dataFetched.data));
      setTodayUF(ActualData);
    }
  }, [dataFetched.status]);

  return { todayUF, tryAgainFetch: dataFetched.refetch, isLoading: dataFetched.isLoading };
};

export default useGetLatestUF;
