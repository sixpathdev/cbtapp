import 'react-native-gesture-handler';
import React, { useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";

// import LandingScreen from "./screens/LandingScreen";
// import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();

const loadFonts = () =>
  Font.loadAsync({
    "montserrat-regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    "montserrat-semibold": require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          {/* <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
};

export default App;
