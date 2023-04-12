// @ts-ignore
import React, {memo} from 'react';
import { Text, View} from 'react-native';
import styles from './styles.Task';

const Task = props => {

  return (
    <View style={styles.container}>
      <Text>Task...</Text>
    </View>
  );
};
export default memo(Task);
