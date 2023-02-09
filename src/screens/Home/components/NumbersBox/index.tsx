import { Alert, View } from 'react-native';
import NumberButton from '../../../../components/NumberButton';
import buttons from '../../../../utils/BUTTONS';
import styles from '../styles';

const onPress = (event: string | number) => () => {
  Alert.alert(`${event}`);
};
const NumbersBox = () => {
  return (
    <View style={styles.boxNumbers}>
      {buttons.map(({ text, value, special }) => (
        <NumberButton title={text} key={text} special={special} onPress={onPress(value)} />
      ))}
    </View>
  );
};

export default NumbersBox;
