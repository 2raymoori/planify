import {Pressable, View} from 'react-native';
import React, {memo} from 'react';
const CheckBox = props => {
  return (
    <Pressable
      onPress={() => {
        props.onCheck();
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: '#403572',
        borderWidth: 2,
        height: 20,
        width: 20,
      }}>
      <View
        style={{
          height: 13,
          width: 13,
          borderRadius: 3,
          backgroundColor: props.isChecked ? '#403572' : null,
        }}
      />
    </Pressable>
  );
};
export default memo(CheckBox);
/*
LOG  !!!! TASKKK ###### [

{"category": 1, "checked": false, "date": "2023-04-14", "name": "Sdfsdf", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 0, "checked": false, "date": "2023-04-16", "name": "Purchase MacBook Air", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 1, "checked": false, "date": "2023-04-15", "name": "LOTYESA", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 2, "checked": false, "date": "2023-04-14", "name": "Lamin njie", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 1, "checked": false, "date": "2023-04-15", "name": "HEYY MACBOOK", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 1, "checked": false, "date": "2023-04-16", "name": "Call fatty", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 2, "checked": false, "date": "2023-04-14", "name": "Lamin njiesss", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 2, "checked": false, "date": "2023-04-14", "name": "Lamin njie", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 2, "checked": false, "date": "2023-04-14", "name": "Lamin njie", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 1, "checked": false, "date": "2023-04-14", "name": "Testy", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 2, "checked": false, "date": "2023-04-15", "name": "Test 2", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 0, "checked": false, "date": "2023-04-14", "name": "Cool", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 1, "checked": false, "date": "2023-04-15", "name": "Ppp", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"},
{"category": 1, "checked": false, "date": "2023-04-15", "name": "DvxdvNEWWWWW", "userId": "Ri4OlRpuRlZochM6n931zVlwvvG3"}
]


 */
