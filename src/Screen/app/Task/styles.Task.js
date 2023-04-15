import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  backgroundColor: '#fff',
  },
  textStrike:{
    textDecorationLine: 'line-through',
  }
});

export default styles;
