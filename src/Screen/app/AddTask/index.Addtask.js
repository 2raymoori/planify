// @ts-ignore
import React, {memo, useState, useEffect} from 'react';
import {
  Pressable,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles.Addtask';
import Title from '../../../Component/Title';
import Input from '../../../Component/Input';
import CategoryList from '../../../Component/CategoryList';
import Button from '../../shared/Button';
import DatePicker from 'react-native-date-picker';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks} from '../../../Rdux/Tasks';

const AddTask = props => {
  const dispatcher = useDispatch();
  const user = useSelector(state => state.user?.data);
  const [formData, setFormData] = useState({
    taskDesc: '',
    taskType: -1,
    selectedDate: '',
  });
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('selectedCategory::>> ', selectedCategory);
    setFormData(prevState => ({
      ...prevState,
      ['taskType']: selectedCategory,
    }));
  }, [selectedCategory]);
  function handleBack() {
    props.navigation.goBack();
  }
  const processInput = (data, refName) => {
    setFormData(prevState => ({
      ...prevState,
      [refName]: data,
    }));
  };
  const alertDisplay = (msg, title = 'Error', btn = 'Ok') => {
    Alert.alert(title, msg, [
      {
        text: btn,
      },
    ]);
  };
  const submitData = async () => {
    if (formData.taskDesc.trim() === '') {
      alertDisplay('Please enter task description');
      return;
    } else if (formData.taskType === -1) {
      alertDisplay('Please select task type / Priority');
      return;
    } else if (formData.selectedDate.trim() === '') {
      alertDisplay('Please select a valid datedate');
      return;
    }
    console.log('formData::>> ', formData);
    const dataToSave = {
      name: formData.taskDesc,
      date: formData.selectedDate,
      category: formData.taskType,
      checked: false,
      userId: user?.uid,
    };

    firestore()
      .collection('Tasks')
      .add(dataToSave)
      .then(async() => {
        console.log('User added!');
        alertDisplay('Task added successfully','Success',  'Thank You.');

        const task = await firestore()
          .collection('Tasks')
          .get();
        const taskList = [];
        task.docs.forEach(doc => {
          console.log("DOC FROM ADD ::>> ",doc['_data']);
          taskList.push({...doc['_data'], docId: doc.id});
        });
        dispatcher(setTasks(taskList));
        // {"category": 3, "checked": false, "date": "2023-04-15", "docId": "fqwYrFrO2ofHJjFuMtTZ",
        // "name": "Werwer Alex", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"}
    });
    // const task = await firestore()
    //   .collection('Tasks')
    //   .get();
    // const taskList = [];
    // task.docs.forEach(doc => {
    //   console.log("DOC FROM ADD ::>> ",{...doc['_data'],docId:doc.id}, "DOCCC ID::>> ",doc.id);
    //   taskList.push({...doc['_data'], docId: doc.id});
    // });
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
        paddingTop={40}
        text={'Add New Task'}
      />
      <View>
        <Title
          color="#173147"
          fontWeight={500}
          fontSize={16}
          paddingTop={32}
          paddingBottom={12}
          text={'Describe the task'}
        />
        <Input
          borderWidth={1}
          borderColor="#173147"
          backgroundColor="white"
          value={formData.taskDesc}
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
          paddingTop={0}
          paddingBottom={12}
          text={'Type'}
        />
        <CategoryList
          onSelectedItemChange={setSelectedCategory}
          selectedItem={selectedCategory}
        />
      </View>

      <View>
        {/*<DatePicker date={new Date()} onDateChange={setFormData} />*/}

        <Title
          color="#403572"
          fontWeight={500}
          fontSize={16}
          paddingTop={24}
          paddingBottom={12}
          text={'Deadline'}
        />
        <View style={styles.dateContainer}>
          <TouchableOpacity
            style={styles.dateTextContainer}
            onPress={() => setOpen(true)}>
            <Image
              resizeMode={'contain'}
              source={require('../../../assets/calendar.png')}
              style={styles.icon}
            />
            <Text style={styles.dateText}> Due Date</Text>
          </TouchableOpacity>
          <Text>{formData.selectedDate}</Text>
          <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              const justDate = JSON.stringify(date).split('T')[0];
              setFormData(prevState => ({
                ...prevState,
                ['selectedDate']: justDate.substr(1, justDate.length),
              }));
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <Button
          customStyle={{marginTop: 20}}
          onBtnPress={submitData}
          loginBtnText={styles.BtnText}
          containerStyle={styles.BtnContainer}
          text={'Add Task'}
        />
      </View>
    </View>
  );
};

export default memo(AddTask);
