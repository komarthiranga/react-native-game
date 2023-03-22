import { SafeAreaView, Text, StyleSheet } from "react-native";
import PageHeading from "../Components/PageHeading";
import CustomImage from "../Components/Core/Image";
import CustomButton from "../Components/Core/Button";
import { useContext } from 'react';
import GameContext from "../Store/game-context";

const GameOverPage = ({navigation}) => {
  const { number, isGameSuccess } = useContext(GameContext);
  return (
    <SafeAreaView style={styles.appContainer}>
      <PageHeading title={"Game Over"} />
      <CustomImage />
      <SafeAreaView style={styles.container}>
            { !isGameSuccess && <Text style={styles.text}>Your phone needs 4 rounds to guess the number {number} </Text> }
            { isGameSuccess && <Text style={styles.text}> Bravo! you guessed the number.</Text> }
            <CustomButton title="Start New Game" pressHandler={ () => navigation.navigate('Home') } />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#262C2F'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    text: {
        color: '#ffffff',
        padding: 20
    }
})

export default GameOverPage;
