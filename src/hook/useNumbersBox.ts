import {useState} from 'react';
import buttons from '../utils/BUTTONS';

const useNumbersBox = () => {
  const [UFValue, setUFValue] = useState<string>('0');

  const onPress = (numberPressed: string) => () => {
    if (UFValue === buttons[10].value) {
      return;
    }
    const parsedNumber = parseInt(numberPressed, 10);

    setUFValue(prevNumber =>
      prevNumber === '0' ? numberPressed : `${prevNumber}${parsedNumber}`,
    );
  };

  const onDelete = () => {
    setUFValue(prevNumber =>
      prevNumber.length > 1 ? prevNumber.slice(0, -1) || '0' : '0',
    );
  };

  const onDeleteAll = () => {
    setUFValue('0');
  };

  return {UFValue, onPress, onDelete, onDeleteAll};
};

export default useNumbersBox;
