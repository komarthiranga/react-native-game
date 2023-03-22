import { SafeAreaView, Text, StyleSheet } from 'react-native';
import PageHeading from '../Components/PageHeading';
import GuessContainer from '../Components/GuessContainer';

const ComputerGuessPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
              <PageHeading title={"Opponent's Guess"} />
              <GuessContainer navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#262C2F'
    },
  });


export default ComputerGuessPage;