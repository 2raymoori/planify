// @ts-ignore
import React, { memo, useEffect, useState } from "react";
import {FlatList, Text, View} from 'react-native';
import styles from './styles.Task';
import DrawerNavigationHeader from '../../../Component/DrawerNavigationHeader';
import PlusIcon from '../../../Component/PlusIcon';
import { useDispatch, useSelector } from "react-redux";
import CheckBox from '../../shared/CheckBox';
import { setTasks } from "../../../Rdux/Tasks";
import firestore from "@react-native-firebase/firestore";
const Task = props => {
  const tasks = useSelector(state => state.tasks?.data);
  const dispatcher = useDispatch();
  const [userTasks, setUserTasks] = useState(tasks);
  const [x, setX] = useState("lotXX");
  useEffect(()=>{
    setUserTasks(tasks);
  },[tasks]);

  const onCheck = async(inputChecked) => {
console.log("!!!! Mariama Sutay...  #####",inputChecked);
    setX("lottYY")
    const updatedTask = tasks;
    console.log(tasks[0].docId);
    const itemToUpdate = tasks.findIndex(e=>e.docId === inputChecked.docId);
    if(itemToUpdate !== -1){
      userTasks[itemToUpdate].checked = !userTasks[itemToUpdate].checked;
      console.log("!!!! TASKKK ######",!userTasks[itemToUpdate].checked," index...",itemToUpdate);
      console.log("!!!! TASKKK ##### LINE 2",  userTasks);
      dispatcher(setTasks(userTasks));
      setUserTasks([...userTasks]);
    try {
      await firestore()
        .collection('Tasks')
        .doc(inputChecked.docId)
        .update({
          checked :userTasks[itemToUpdate].checked
        })
    }catch(e){
      console.log("!!!! TASKKK ##### ERROR",e);
    }
    }



    console.log("!!!! Mariama Sutay...  #####",inputChecked);
    //get index of data otherwise -1
    //tasks.find(e=>e.docId === e.docId) // get actual data if exists otherwise undefined
    // console.log('checked',e);
  };
  const renderTak = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginLeft: 15,
          marginVertical: 5,
        }}>
        <CheckBox isChecked={item.checked} onCheck={()=>{onCheck(item)}} />
        <Text style={item.checked ? styles.textStrike : null}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <DrawerNavigationHeader nav={props.navigation} title={'Task'} />
      <FlatList
        ListHeaderComponent={<Text>Task... {x}</Text>}
        data={userTasks}
        renderItem={renderTak}
        // keyExtractor={item => item.userId}s
      />
      <View style={{position: 'absolute', bottom: 24, right: 28}}>
        <PlusIcon />
      </View>
    </View>
  );
};
export default memo(Task);
