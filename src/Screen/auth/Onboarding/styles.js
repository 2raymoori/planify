import {Dimensions, StyleSheet} from 'react-native';
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: height * 0.65,
  },
  footerSection: {
    backgroundColor: 'white',
    height: height * 0.5,
    zIndex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    bottom: -(height * 0.3),
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    paddingHorizontal: 48,
    paddingVertical: 48,
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
    fontSize: 15,
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
    fontSize: 15,
    fontWeight: 800,
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
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    marginTop: 16,
    marginBottom: 40,

    color: '#8B97A8',
  },
});
export default styles;
