import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import "./global.css"
import AppNavigator from './navigation/AppNavigator';

SplashScreen.preventAutoHideAsync();

const customFonts = {
  "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
  "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
  "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
  "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
  "Quicksand-Light": require("./assets/fonts/Quicksand-Light.ttf"),
};

export default function App() {
  const [fontsLoaded, error] = useFonts(customFonts);

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (error) {
    throw error;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppNavigator />
  );
}
