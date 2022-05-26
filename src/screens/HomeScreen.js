import { View, Text } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  const {navigation} = props;
  
  const goToSettings = () => {
    navigation.navigate("Settings");
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToSettings} title="Ir a Ajustes"/> 
    </View>
  )
}