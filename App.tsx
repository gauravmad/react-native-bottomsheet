import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="dark" backgroundColor="#fff" />
        <Navigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
