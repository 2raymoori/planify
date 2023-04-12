// @ts-ignore
import React, {memo} from 'react';
import { Text, View} from 'react-native';
import styles from './styles.home';

const Home = props => {

  return (
    <View style={styles.container}>
      <Text>Home...</Text>
    </View>
  );
};
export default memo(Home);
