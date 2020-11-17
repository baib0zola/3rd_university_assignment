import { Platform, StatusBar, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    ...Platform.select({
        ios: { paddingTop: 20 },
        android: { paddingTop: StatusBar.currentHeight }  
      })
  },
    
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'strech',
    width: 500,
    height: 100
  },
    
  paragraph: {
    margin: 25,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default styles;