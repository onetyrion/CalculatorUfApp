import React, { FC } from 'react';
import { View } from 'react-native';
import NumberButton from '../../../../components/NumberButton';
import buttons from '../../../../utils/BUTTONS';
import styles from '../styles';

type Props = {
  onPress: (value: any) => void;
};

const NumbersBox: FC<Props> = ({onPress}) => {
  return (
    <View style={styles.boxNumbers}>
      {buttons.map(({ text, value, special }) => (
        <NumberButton title={text} key={text} special={special} onPress={onPress(value)} />
      ))}
    </View>
  );
};

export default NumbersBox;
