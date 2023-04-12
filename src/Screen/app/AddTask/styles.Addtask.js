import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    position: 'relative',
  },
  BtnText: {
    color: 'white',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 800,
  },
  BtnContainer: {
    backgroundColor: '#5551FF',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 13,
  },

});
export default styles;
