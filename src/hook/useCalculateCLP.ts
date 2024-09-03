import {useEffect, useState} from 'react';

const useCalculateCLP = (UFAmount: string, todayUF: string) => {
  const [CLPValue, setCLPValue] = useState<string>('0');

  useEffect(() => {
    let CLPAux = Number(UFAmount);
    let todayUFAux = parseFloat(todayUF.replace('.', '').replace(',', '.'));
    console.log('CLPAux', todayUFAux);

    if (Number.isNaN(CLPAux)) {
      CLPAux = 0;
    } else {
      CLPAux = CLPAux * todayUFAux;
    }
    setCLPValue(String(CLPAux));
  }, [UFAmount, todayUF]);

  return {
    CLPValue,
  };
};

export default useCalculateCLP;
