import React, { FC } from 'react';
import { Dimensions, View } from 'react-native';
import NumberButton from '../../../../components/NumberButton';
import buttons, { Button } from '../../../../utils/BUTTONS';
import styles from '../styles';

type Props = {
  onPress: (value: Button) => () => void;
};

const NumbersBox: FC<Props> = ({ onPress }) => {
  const DeviceWidth = Dimensions.get('window').width;

  return (
    <View
      style={{
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
      }}
    >
      <View style={styles.boxNumbers}>
        {/* 1 4 7 */}
        <View>
          <NumberButton
            title={buttons[0].text} // 1
            key={buttons[0].text}
            special={buttons[0].special}
            onPress={onPress(buttons[0])}
            propsStyle={{ width: DeviceWidth * 0.25, height: DeviceWidth * 0.25 }}
          />
          <NumberButton
            title={buttons[3].text} // 4
            key={buttons[3].text}
            special={buttons[3].special}
            onPress={onPress(buttons[3])}
            propsStyle={{ width: DeviceWidth * 0.25, height: DeviceWidth * 0.25 }}
          />
          <NumberButton
            title={buttons[6].text} // 7
            key={buttons[6].text}
            special={buttons[6].special}
            onPress={onPress(buttons[6])}
            propsStyle={{ width: DeviceWidth * 0.25, height: DeviceWidth * 0.25 }}
          />
        </View>
        {/* 2 5 8 */}
        <View>
          <NumberButton
            title={buttons[1].text} // 2
            key={buttons[1].text}
            special={buttons[1].special}
            onPress={onPress(buttons[1])}
            propsStyle={{ width: DeviceWidth * 0.25, height: DeviceWidth * 0.25 }}
          />
          <NumberButton
            title={buttons[4].text} // 5
            key={buttons[4].text}
            special={buttons[4].special}
            onPress={onPress(buttons[4])}
            propsStyle={{ width: DeviceWidth * 0.25, height: DeviceWidth * 0.25 }}
          />
          <NumberButton
            title={buttons[7].text} // 8
            key={buttons[7].text}
            special={buttons[7].special}
            onPress={onPress(buttons[7])}
            propsStyle={{ width: DeviceWidth * 0.25, height: DeviceWidth * 0.25 }}
          />
        </View>
        {/* 3 6 9 */}
        <View>
          <NumberButton
            title={buttons[2].text} // 3
            key={buttons[2].text}
            special={buttons[2].special}
            onPress={onPress(buttons[2])}
            propsStyle={{ width: DeviceWidth * 0.25, height: DeviceWidth * 0.25 }}
          />
          <NumberButton
            title={buttons[5].text} // 6
            key={buttons[5].text}
            special={buttons[5].special}
            onPress={onPress(buttons[5])}
            propsStyle={{ width: DeviceWidth * 0.25, height: DeviceWidth * 0.25 }}
          />
          <NumberButton
            title={buttons[8].text} // 9
            key={buttons[8].text}
            special={buttons[8].special}
            onPress={onPress(buttons[8])}
            propsStyle={{ width: DeviceWidth * 0.25, height: DeviceWidth * 0.25 }}
          />
        </View>
      </View>
    </View>
  );
};

export default NumbersBox;
