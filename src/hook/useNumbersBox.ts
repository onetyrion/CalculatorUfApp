import { useState } from 'react';
import buttons, { Button } from '../utils/BUTTONS';

const useNumbersBox = () => {
  const [UFValue, setUFValue] = useState<string>('0');

  const onPress = (numberPressed: Button) => () => {
    const { value } = numberPressed;
    if (UFValue === buttons[10].value || UFValue === buttons[11].value) {
      return;
    }
    const parsedNumber = parseInt(value, 10);

    setUFValue((prevNumber) => (prevNumber === '0' ? value : `${prevNumber}${parsedNumber}`));
  };

  const onDelete = () => {
    setUFValue((prevNumber) => (prevNumber.length > 1 ? prevNumber.slice(0, -1) || '0' : '0'));
  };

  const onDeleteAll = () => {
    setUFValue('0');
  };

  return { UFValue, onPress, onDelete, onDeleteAll };
};

export default useNumbersBox;
