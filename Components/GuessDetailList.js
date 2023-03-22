import { SafeAreaView, FlatList } from 'react-native';
import ListItem from './ListItem';

const GuessDetailList = ({listData}) => {
    return(
        <SafeAreaView>
                <FlatList data={listData} renderItem={ ({item}) =>  <ListItem item={item} /> } keyExtractor={ item => item.id }/>
        </SafeAreaView>
    )
}

export default GuessDetailList;