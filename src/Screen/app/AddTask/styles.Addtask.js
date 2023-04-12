import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    paddingHorizontal: 15,
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
  icon: {
    width: 20,
    height: 20,
    marginLeft: 14,
  },
  dateText: {
    fontWeight: 400,
    fontSize: 16,
    color: '#707070',
    marginLeft: 9,
  },
  dateContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  dateTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 16,
  },
});
export default styles;
