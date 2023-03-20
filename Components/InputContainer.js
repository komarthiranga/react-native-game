import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import CustomButton from "./Core/Button";

const InputContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textInput}> Enter a number </Text>
      <TextInput style={styles.textInputContainer} keyboardType="numeric" />
      <SafeAreaView style={styles.buttonContainer}>
        <CustomButton title={'Reset'}  color={'#767070'} />
        <CustomButton title={'Confirm'} color={'#F400FF'} />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    color: "#FFFFFF",
    fontSize: 20
  },
  textInputContainer: {
    borderBottomWidth: 1,
    borderColor: "#ffffff",
    padding: 15,
    width: '50%',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15
  }
});

export default InputContainer;
