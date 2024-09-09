import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import Clock from '../../../../assets/icons/clock.svg';
import Delete from '../../../../assets/icons/delete.svg';

type Props = {
  onDelete: () => void;
  onDeleteAll: () => void;
  todayUF: string;
  reload: () => void;
  onClock: (event: boolean) => () => void;
  isLoading: boolean;
};

const Tools: FC<Props> = ({ onDelete, onDeleteAll, onClock, todayUF, reload, isLoading }) => {
  return (
    <View style={styles.utils}>
      <TouchableOpacity onPressIn={onClock(true)} onPressOut={onClock(false)}>
        <Clock height={30} width={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onLongPress={reload}>
        <Text numberOfLines={1} style={styles.textButton}>
          {isLoading ? 'Cargando...' : todayUF}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} onLongPress={onDeleteAll}>
        <Delete height={32} width={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Tools;
