import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    flex: 1,
    height: height * 0.75,
  },
  layer: {
    // flex:1,
    height: 60,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  footerSection: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 48,
    paddingBottom: 48,
  },
  loginBtnContainer: {
    backgroundColor: '#403572',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 13,
  },
  loginBtnText: {
    color: 'white',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 800,
  },
  signupBtnContainer: {
    backgroundColor: '#4681A3',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 13,
    marginTop: 18,
  },
  signupBtnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerHeader: {
    color: '#173147',
    fontSize: 25,
    fontWeight: 700,
    textAlign: 'center',
  },
  footerBtnContainer: {
    width: '98%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footerDescription: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 20,
    letterSpacing: -0.24,
    marginTop: 16,
    marginBottom: 40,
    color: '#8B97A8',
  },
});
export default styles;
