import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from '../Screen/app/Home/index.home';
import AddTask from '../Screen/app/AddTask/index.Addtask';
import Task from '../Screen/app/Task/index.Task';
import React from 'react';
import TabNavigation from './Routes.tab';
import CustomDrawerContent from '../Component/DrawerContent';
const Drawer = createDrawerNavigator();

const DrawerNavigation = props => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      //   drawerStyle: {
      //     backgroundColor: '#c6cbef',
      //     color:"red"
      //     // width: 240,
      //   },
      }}
    >
      <Drawer.Screen
        options={{drawerLabelStyle: textStyle}}
        name={'Tabs'}
        component={TabNavigation}
      />
      <Drawer.Screen
        options={{drawerLabelStyle: textStyle}}
        name={'AddTask'}
        component={AddTask}
      />
      {/*<Drawer.Screen*/}
      {/*  options={{drawerLabelStyle: textStyle}}*/}
      {/*  name={'Task'}*/}
      {/*  component={Task}*/}
      {/*/>*/}
    </Drawer.Navigator>
  );
};
const textStyle = {
  color: '#173147',
  fontSize: 15,
  lineHeight: 20,
  fontWeight: 700,
};
export default DrawerNavigation;
