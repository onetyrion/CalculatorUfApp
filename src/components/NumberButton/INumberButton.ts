import { StyleProp, ViewStyle } from 'react-native';
import { Button } from '../../utils/BUTTONS';

export interface INumberButton {
  title: string;
  special?: boolean;
  onPress: (value: Button) => void;
  propsStyle?: StyleProp<ViewStyle>;
}
