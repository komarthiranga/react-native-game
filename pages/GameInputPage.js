import { SafeAreaView, StyleSheet } from 'react-native';
import PageHeading from '../Components/PageHeading';
import InputContainer from '../Components/InputContainer';
import { StatusBar } from 'expo-status-bar';

const GameInputPage = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="light"/>
            <PageHeading title={'Guess My Number'} />
            <InputContainer navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#262C2F'
    },
  });

export default GameInputPage;