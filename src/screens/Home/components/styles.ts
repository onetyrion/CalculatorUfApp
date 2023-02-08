import { StyleSheet } from 'react-native'
import COLORS from '../../../utils/COLORS'

const styles = StyleSheet.create({
  Header: {
    paddingTop: 60,
    paddingBottom: 8,
    paddingHorizontal: 32,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  Content: {
    paddingTop: 22,
    paddingHorizontal: 18,
    minHeight: '100%',
    backgroundColor: COLORS.grey[200],
  },
  PrimaryText: {
    color: COLORS.grey[600],
    fontWeight: 'bold',
    fontSize: 60,
  },
  SecondaryText: {
    fontWeight: '500',
    color: COLORS.grey[500],
    fontSize: 30,
  },
  utils: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textButton: {
    color: COLORS.secondary2,
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    borderColor: COLORS.secondary2,
    borderWidth: 2,
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  reloadButton: {
    paddingHorizontal: 32,
  },
  boxNumbers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '100%',
    marginTop: 40,
    marginHorizontal: 30,
  },
})

export const buildContainer = (value: number) =>
  StyleSheet.create({
    ScrollView: {
      paddingTop: value,
      backgroundColor: COLORS.grey[100],
    },
  })

export default styles
