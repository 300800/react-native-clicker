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
  function decrement() {
    setCount(count - 1);
  }

  function renderEncouragingText() {
    if (count >= 30) {
      return "Wah, hand pain or not?";
     }
     if (count >= 20) {
       return "Hang in there!";
     }
    if (count >= 10) {
    return "Keep going!";
  }
}

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 80, fontWeight: "bold" }}>{count}</Text>   
      {
        //<Button onPress={increment}}.title="Press me"></Button>
      }   

      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>Press me!</Text>
      </TouchableOpacity>
      <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>
      <Text>This is my amazing new App</Text>
      {() => { 
        if (count >= 10) {
          return "keep going";
        }
      },
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
  encouragingText: {
    marginTop: 50,
    color: "#888",
  },
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 20
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },

});
