import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(`Count before incrementing is ${count}`);
    setCount(count + 1);
    console.log(`Count after incrementing is ${count}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>      
      <Button title ="Presse Moi!" onPress={increment}></Button>
      <Text>This is my amazing new App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
