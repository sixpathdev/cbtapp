import React, { useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";

import LandingpageScreen from "./screens/LandingpageScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import Onboarding from "./screens/Onboarding";

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
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Landingpage"
            component={LandingpageScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
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
