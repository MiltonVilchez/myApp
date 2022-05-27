import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  const {navigation} = props;
  
  const goToSettings = () => {
    navigation.navigate("Settings");
  }

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToSettings} title="Ir a Ajustes"/> 
    </SafeAreaView>
  )
}