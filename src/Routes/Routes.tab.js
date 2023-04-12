import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUp from '../Screen/auth/Signup/index.signup';
import Login from '../Screen/auth/Login/index.Login';
import Home from "../Screen/app/Home/index.home";
import Task from "../Screen/app/Task/index.Task";

const TabNavigation = () => {
  const TabNavi = createBottomTabNavigator();
  return (
    <TabNavi.Navigator>
      <TabNavi.Screen name={'Home'} component={Home} />
      <TabNavi.Screen name={'Tasks'} component={Task} />
    </TabNavi.Navigator>
  );
};

export default TabNavigation;
