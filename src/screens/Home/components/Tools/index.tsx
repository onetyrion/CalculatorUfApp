import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import Clock from '../../../../assets/icons/clock.svg';
import Delete from '../../../../assets/icons/delete.svg';

const Tools = () => {
  return (
    <View style={styles.utils}>
      <TouchableOpacity>
        <Clock height={30} width={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>UF $40.123</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Delete height={32} width={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Tools;
