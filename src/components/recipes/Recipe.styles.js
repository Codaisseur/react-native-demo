import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  row: {
    justifyContent: 'center',
    width: 175,
    height: 200,
    alignItems: 'center',
  },
  thumb: {
    borderRadius: 3,
    width: 175,
    height: 175,
  },
  text: {
    fontFamily: 'Avenir Next',
    flex: 1,
    width: 175,
    marginTop: -75,
    marginBottom: 30,
    padding: 8,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 80,
  },
});
