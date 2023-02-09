import { ScrollView, StatusBar, Text, TouchableOpacity } from 'react-native';
import styles, { buildContainer } from './components/styles';
import Header from './components/Header';
import Content from './components/Content';
import useStatusBarHeight from '../../hook/useStatusBarHeight';
import LinearGradient from '../../components/LinearGradient';
import Tools from './components/Tools';
import NumbersBox from './components/NumbersBox';
import Reload from '../../assets/icons/reload.svg';

export const Home = () => {
  const value = useStatusBarHeight();
  const styleContainer = buildContainer(value).ScrollView;
  return (
    <ScrollView style={styleContainer} bounces={false}>
      <StatusBar barStyle={'light-content'} />
      <TouchableOpacity>
        <Reload height={30} width={30} style={styles.reloadButton} />
      </TouchableOpacity>
      <Header>
        <Text style={styles.SecondaryText}>$ 4200</Text>
        <Text style={styles.PrimaryText}>1 UF</Text>
      </Header>
      <LinearGradient />
      <Content>
        <Tools />
        <NumbersBox />
      </Content>
    </ScrollView>
  );
};
