import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../../screens/Home/components/styles';
import Reload from '../../assets/icons/reload.svg';

type Props = {
  onPress: () => void;
};

const ReloadButton: FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Reload height={30} width={30} style={styles.reloadButton} />
    </TouchableOpacity>
  );
};

export default ReloadButton;
