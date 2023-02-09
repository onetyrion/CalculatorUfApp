import { StyleSheet } from 'react-native';
import COLORS from '../../utils/COLORS';

const styles = StyleSheet.create({
  number: {
    backgroundColor: COLORS.grey[100],
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    marginVertical: 12,
    borderRadius: 9,
    width: 82,
    height: 82,
  },
  textPrimary: {
    color: COLORS.grey[600],
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default styles;
