import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'
import styles from '../styles'

const Content: FC<ViewProps> = ({ children }) => <View style={styles.Content}>{children}</View>

export default Content
