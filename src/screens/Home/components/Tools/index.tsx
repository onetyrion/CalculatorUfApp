import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import Clock from '../../../../assets/icons/clock.svg';
import Delete from '../../../../assets/icons/delete.svg';

type Props = {
  onDelete: () => void;
  onDeleteAll: () => void;
  todayUF: number;
};

const Tools: FC<Props> = ({onDelete, onDeleteAll, todayUF}) => {
  return (
    <View style={styles.utils}>
      <TouchableOpacity>
        <Clock height={30} width={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text numberOfLines={1}  style={styles.textButton}>UF ${String(todayUF)}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} onLongPress={onDeleteAll}>
        <Delete height={32} width={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Tools;
