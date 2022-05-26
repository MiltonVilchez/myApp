import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginForm from './src/components/LoginForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world! I'm starting in mobile development ❤️</Text>
      <LoginForm></LoginForm>
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
