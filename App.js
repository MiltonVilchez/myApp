import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import LoginForm from './src/components/LoginForm';
// import Saludar from "./src/components/Saludar";
// import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTabs";

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>Hello world! I'm starting in mobile development ❤️</Text>
        {/* <Saludar name="Milton"></Saludar> */}
        {/* <Saludar ></Saludar> */}
        {/* <Saludar name="Abraham"></Saludar>
      <Saludar name="Vílchez"></Saludar>
      <Saludar name="Stockhausen"></Saludar>
        <Saludar firstname="Milton" lastname={28}></Saludar>
      </View> */}
      {/* <NavigationStack>
      
      </NavigationStack> */}
      <NavigationTab></NavigationTab>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
