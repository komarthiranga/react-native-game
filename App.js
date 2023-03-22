import { StyleSheet, Text, SafeAreaView } from "react-native";
import GameInputPage from "./pages/GameInputPage";
import ComputerGuessPage from "./pages/ComputerGuessPage";
import GameOverPage from "./pages/GameOverPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameProvider from "./Store/GameProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={GameInputPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ComputerGuess"
            component={ComputerGuessPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GameOver"
            component={GameOverPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262C2F",
  },
});
