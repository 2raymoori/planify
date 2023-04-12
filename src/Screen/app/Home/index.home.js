// @ts-ignore
import React, {memo} from 'react';
import { Text, View} from 'react-native';
import styles from './styles.home';
import DrawerNavigationHeader from "../../../Component/DrawerNavigationHeader";
import PlusIcon from "../../../Component/PlusIcon";


const Home = props => {
console.log("Home Props::>> ",props);
  return (
    <View style={styles.container}>
      <View style={{position:"absolute",bottom:24,right:28}}>
        <PlusIcon />
      </View>
      <DrawerNavigationHeader nav = {props.navigation} title={"Home"}/>
      <Text>Home...</Text>
    </View>
  );
};
export default memo(Home);
