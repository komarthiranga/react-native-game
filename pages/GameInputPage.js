import { SafeAreaView, Text } from 'react-native';
import PageHeading from '../Components/PageHeading';
import InputContainer from '../Components/InputContainer';

const GameInputPage = () => {
    return(
        <SafeAreaView>
            <PageHeading title={'Guess My Number'} />
            <InputContainer />
        </SafeAreaView>
    )
}

export default GameInputPage;