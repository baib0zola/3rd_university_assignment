import * as React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import Constants from 'expo-constants';
import styles from './Styles';

const data = new Array(5).fill(null).map((v, i) => ({ key: i.toString(), value: `John Doe ${i+1}` }));

export default function ListViewScr({navigation}) {

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={({ item }) =>
        <Text style={styles.paragraph} >{item.value}</Text>}
      />      
    </View>
  );
}
