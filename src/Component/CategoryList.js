import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {categories} from '../Constants/categories';
import CategoryItem from './CategoryItem';

const CategoryList = props => {
  const processItemClicked = itemId => {
    console.log(itemId);
    props.onSelectedItemChange(itemId);
  };
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item}) => (
        <CategoryItem
          itemId={item.id}
          itemClicked={processItemClicked}
          selectedItem={props.selectedItem}
          text={item.label}
        />
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4681A3',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 15,
    // letter-spacing: -0.0119256px;
    color: '#4681A3',
  },
});

export default CategoryList;
