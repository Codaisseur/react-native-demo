import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  background: {
    flex: 1,
    width: 400,
    height: 711,
  },
  overlay: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  icon: {
    width: 150,
    height: 122,
  },
});
