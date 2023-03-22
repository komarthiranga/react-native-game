import { SafeAreaView, Text, StyleSheet } from "react-native";
import CustomButton from "./Core/Button";
import GuessDetailList from "./GuessDetailList";
import { useContext, useState, useEffect } from 'react';
import GameContext from "../Store/game-context";

const GuessContainer = ({navigation}) => {
  const { number, setIsGameSuccess } = useContext(GameContext);
  const [ displayNumber, setDisplayNumber ] = useState(41);
  const [ listData, setListData ] = useState([]);

  useEffect( () => {
    if(listData.length === 4) {
      navigation.navigate('GameOver');
    }

    if(displayNumber === Number(number)) {
      setIsGameSuccess(true);
      navigation.navigate('GameOver');
    }
  }, [listData, displayNumber])

  const handleIncrementGuess = () => {
    const numberInst = GenerateRandomNumber(Number(number));
    setDisplayNumber(numberInst);
    const dataEntry = {
      id: (listData.length + 1).toString(),
      number: numberInst
    }
    setListData(currentData => [...currentData, ...[dataEntry]] )
  }

  const handleDecrementGuess = () => {
    const numberInst = displayNumber - 1;
    setDisplayNumber(numberInst);
    const dataEntry = {
      id: (listData.length + 1).toString(),
      number: numberInst
    }
    setListData(currentData => [...currentData, ...[dataEntry]] )
  }

  const GenerateRandomNumber = number =>  Math.floor(Math.random() * (number + 1));
  
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.guessValue}>
          <Text style={styles.textContainer}>{displayNumber}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.actionTextContainer}>
          <Text style={styles.actionText}>Higher or Lower</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.buttonContainer}>
          <CustomButton title={"-"} color={"#767070"} pressHandler={handleDecrementGuess} />
          <CustomButton title={"+"} color={"#F400FF"} pressHandler={handleIncrementGuess} />
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView>
        <GuessDetailList listData={listData} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  guessValue: {
    borderWidth: 1,
    borderColor: "#ffffff",
    margin: 20,
  },
  textContainer: {
    padding: 15,
    fontSize: 25,
    color: "#ffffff",
  },
  actionTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  actionText: {
    color: "#ffffff",
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    padding: 20,
  },
});

export default GuessContainer;
