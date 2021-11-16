import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./screens/Main";
import Home from "./screens/home";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Main" component={Main} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
