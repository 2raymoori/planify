// @ts-ignore
import React, {memo,useState,useEffect} from 'react';
import { Pressable, Text, View, Image, ScrollView, FlatList, StyleSheet } from "react-native";
import styles from './styles.Addtask';
import Title from '../../../Component/Title';
import Input from '../../../Component/Input';
import { categories } from "../../../Constants/categories";
import CategoryList from "../../../Component/CategoryList";
import Button from "../../shared/Button";

const AddTask = props => {

  const [formData,setFormData] = useState({name:"test name"});
  const [selectedCategory,setSelectedCategory] = useState(1);


  useEffect(()=>{
      console.log('selectedCategory::>> ',selectedCategory);
  },[selectedCategory])
  function handleBack() {
    props.navigation.goBack();
  }
  const processInput = (data, refName) => {
    console.log(data, ' :: ', refName);
  };
  const submitData = () => {
    console.log('formData::>> ',formData);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleBack}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../../../assets/back.png')}
        />
      </Pressable>
      <Title
        color="#403572"
        fontWeight={300}
        fontSize={24}
        text={'Add New Task'}
      />
      <View>
        <Title
          color="#173147"
          fontWeight={500}
          fontSize={16}
          text={'Describe the task'}
        />
        <Input
          borderWidth={1}
          borderColor="#173147"
          backgroundColor="white"
          name={'taskDesc'}
          processInput={processInput}
          title={'Enter task description'}
        />
      </View>
      <View>
        <Title
          color="#403572"
          fontWeight={500}
          fontSize={16}
          text={'Type'}
        />
        <CategoryList onSelectedItemChange={setSelectedCategory} selectedItem = {selectedCategory} />
      </View>
      <View>
        <Button
          customStyle={{marginTop: 20}}
                 onBtnPress={submitData}
                 loginBtnText={styles.BtnText}
                 containerStyle={styles.BtnContainer}
                 text={'Login in'} />
      </View>
    </View>
  );
};


export default memo(AddTask);
