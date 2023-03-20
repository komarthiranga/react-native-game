import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import GameInputPage from './pages/GameInputPage';
import ComputerGuessPage from './pages/ComputerGuessPage';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* <GameInputPage /> */}
      <ComputerGuessPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262C2F'
  },
});
