import {SafeAreaView, Text, StyleSheet} from 'react-native';
import CustomButton from './Core/Button';
const GuessContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.guessValue}>
        <Text style={styles.textContainer}>{41}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.actionTextContainer}>
        <Text style={styles.actionText}>Higher or Lower</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.buttonContainer}>
        <CustomButton title={'-'}  color={'#767070'} />
        <CustomButton title={'+'} color={'#F400FF'} />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    guessValue: {
        borderWidth: 1,
        borderColor: '#ffffff',
        margin: 20,
    },
    textContainer: {
        padding: 15,
        fontSize: 25,
        color: '#ffffff'
    },
    actionTextContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: '#ffffff',
        fontSize: 17
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 15,
        padding: 20
      }
})

export default GuessContainer;
