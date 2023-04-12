import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUp from '../Screen/auth/Signup/index.signup';
import Login from '../Screen/auth/Login/index.Login';
import Home from "../Screen/app/Home/index.home";
import Task from "../Screen/app/Task/index.Task";
import { Image } from "react-native";

const homeIconInActive = require('../assets/home_inactive.png');
const homeActiveIcon = require('../assets/home_active.png');
const taskIconActive = require('../assets/calendar_active.png');
const taskIconInActive = require('../assets/calendar_inactive.png');
const bottomHomeIcon = (focused)=>{
  const isFocused = focused.focused;
  return(
    <Image source={isFocused? homeActiveIcon:homeIconInActive} style={{width:24,height:24 }} />
  )
}
const bottomTaskIcon = (focused)=>{
  const isFocused = focused.focused;
  return (
    <Image source={isFocused?taskIconActive:taskIconInActive} style={{width:24,height:24 }} />
  )
}
const TabNavigation = () => {
  const TabNavi = createBottomTabNavigator();
  return (
    <TabNavi.Navigator screenOptions={{tabBarShowLabel:false,headerShown:false}}>

      <TabNavi.Screen options={{tabBarIcon:bottomHomeIcon}} name={'Home'} component={Home} />
      <TabNavi.Screen name={'Tasks'} options={{tabBarIcon:bottomTaskIcon}} component={Task} />
    </TabNavi.Navigator>
  );
};

export default TabNavigation;
