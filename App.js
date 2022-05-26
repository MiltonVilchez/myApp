import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world! I'm starting in mobile development ❤️</Text>
      {/* <Saludar name="Milton"></Saludar> */}
      {/* <Saludar ></Saludar> */}
      {/* <Saludar name="Abraham"></Saludar>
      <Saludar name="Vílchez"></Saludar>
      <Saludar name="Stockhausen"></Saludar> */}
      <Saludar firstname='Milton' lastname={28}></Saludar>

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
