import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useState } from 'react';
import styles from './Styles';

export default function HomeScreen({ navigation }) {

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Button style={styles.box} title='Go to List View'onPress={() => navigation.navigate('List View')}/>
      <Button style={styles.box} title='Increase Count' onPress={() => { setCounter(counter+1); }}/>
      <Button style={styles.box} title='Decrease Count' onPress={() => { setCounter(counter-1); }}/>
      <Text style={styles.paragraph}> Current count: {counter}</Text>      
    </View>);
}