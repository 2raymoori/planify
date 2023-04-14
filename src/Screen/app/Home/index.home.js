// @ts-ignore
import React, { memo, useEffect } from "react";
import { Text, View} from 'react-native';
import styles from './styles.home';
import DrawerNavigationHeader from "../../../Component/DrawerNavigationHeader";
import PlusIcon from "../../../Component/PlusIcon";
import { useDispatch, useSelector } from "react-redux";
import firestore from "@react-native-firebase/firestore";
import { setTasks } from "../../../Rdux/Tasks";


const Home = props => {
  const tasks = useSelector(state => state.tasks?.data);
  const user = useSelector(state => state.user?.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const subscriber = firestore()
      .collection('Tasks')
      .where('userId', '==', user.uid)
      .get()
      .then(querySnapshot => {
        console.log('Total tasks: ', querySnapshot.size);
        const taskList = [];
        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          taskList.push({...(documentSnapshot.data() || {}),uid:documentSnapshot.id});
        });
        dispatch(setTasks(taskList));
      });

  }, [user,dispatch]);
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
