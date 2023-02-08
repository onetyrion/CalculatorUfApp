import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'
import styles from '../styles'

const Container: FC<ViewProps> = ({ children }) => {
  return <View style={styles.Header}>{children}</View>
}

export default Container
