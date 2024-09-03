import React from 'react';
import {ScrollView, StatusBar, Text} from 'react-native';
import styles, {buildContainer} from './components/styles';
import Header from './components/Header';
import Content from './components/Content';
import useStatusBarHeight from '../../hook/useStatusBarHeight';
import LinearGradient from '../../components/LinearGradient';
import Tools from './components/Tools';
import NumbersBox from './components/NumbersBox';
import useNumbersBox from '../../hook/useNumbersBox';
import useCalculateCLP from '../../hook/useCalculateCLP';
import useGetLatestUF from '../../hook/useGetLatestUF';
import { formatMoney } from '../../utils/utils';
import ReloadButton from '../../components/ReloadButton';

export const Home = () => {
  const value = useStatusBarHeight();
  const styleContainer = buildContainer(value).ScrollView;
  const {todayUF, tryAgainFetch} = useGetLatestUF();
  const {UFValue, onPress, onDelete, onDeleteAll} = useNumbersBox();
  const {CLPValue} = useCalculateCLP(UFValue, todayUF.Valor);

  return (
    <ScrollView style={styleContainer} bounces={false}>
      <StatusBar barStyle={'light-content'} />
      <ReloadButton onPress={tryAgainFetch} />
      <Header>
        <Text style={styles.SecondaryText}>{formatMoney(CLPValue)} CLP</Text>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.PrimaryText}>
          {UFValue} UF
        </Text>
      </Header>
      <LinearGradient />
      <Content>
        <Tools
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          todayUF={todayUF.Valor}
        />
        <NumbersBox onPress={onPress} />
      </Content>
    </ScrollView>
  );
};
