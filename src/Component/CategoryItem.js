import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CategoryItem = props => {
  let selectedStyle = null;
  if (props.itemId === props.selectedItem) {
    selectedStyle = {
      backgroundColor: 'grey',
      color: 'white',
      borderWidth: 0,
      fontStyle: 'italic',
      fontSize: 20,
      fontWeight: 800,
    };
  }
  console.log(
    'FROM CATEGORYITEM ::?? ',
    props.itemId,
    ' ::: current selected item:: ',
    props.selectedItem,
  );
  return (
    <TouchableOpacity
      onPress={() => {
        props.itemClicked(props.itemId);
      }}
      style={[styles.container, selectedStyle]}>
      <Text style={[styles.text, selectedStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // width: 30,
    // height: 30,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4681A3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 8,
    gap: 8,
  },
  text: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    // lineHeight: 15,
    // letter-spacing: -0.0119256px;
    color: '#4681A3',
  },
});

export default CategoryItem;
