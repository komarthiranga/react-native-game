import { SafeAreaView, Text } from 'react-native';
import PageHeading from '../Components/PageHeading';
import GuessContainer from '../Components/GuessContainer';

const ComputerGuessPage = () => {
    return (
        <SafeAreaView>
              <PageHeading title={"Opponent's Guess"} />
              <GuessContainer />
        </SafeAreaView>
    )
}

export default ComputerGuessPage;