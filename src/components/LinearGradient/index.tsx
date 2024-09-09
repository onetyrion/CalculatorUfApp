import React, { FC } from 'react';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import COLORS from '../../utils/COLORS';
import styles from './styles';

const LinearGradientCustom: FC<Partial<LinearGradientProps>> = ({ children, ...props }) => {
  return (
    <LinearGradient
      style={styles.linearGradient}
      start={{ x: 0, y: 0.5 }}
      colors={COLORS.gradient}
      end={{ x: 1, y: 0.5 }}
      {...props}
    >
      {children}
    </LinearGradient>
  );
};

export default LinearGradientCustom;
