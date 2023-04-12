// @ts-ignore
import React, {memo} from 'react';
import { Text, View} from 'react-native';
import styles from './styles.Task';
import DrawerNavigationHeader from "../../../Component/DrawerNavigationHeader";
import PlusIcon from "../../../Component/PlusIcon";

const Task = props => {

  return (
    <View style={styles.container}>
      <DrawerNavigationHeader nav = {props.navigation} title={"Task"}/>
      <Text>Task...</Text>
      <View style={{position:"absolute",bottom:24,right:28}}>
        <PlusIcon />
      </View>
    </View>
  );
};
export default memo(Task);
