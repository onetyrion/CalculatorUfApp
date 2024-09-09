import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradientCustom from '../LinearGradient';
import { INumberButton } from './INumberButton';
import styles from './styles';

const NumberButton: FC<INumberButton> = ({ title, special, onPress, propsStyle }) => {
  return (
    <TouchableOpacity style={[styles.number, propsStyle]} key={title} onPress={onPress}>
      {special ? (
        <LinearGradientCustom style={styles.number}>
          <Text style={styles.textPrimary}>{title}</Text>
        </LinearGradientCustom>
      ) : (
        <Text style={styles.textPrimary}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default NumberButton;
