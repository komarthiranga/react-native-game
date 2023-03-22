import { SafeAreaView, StyleSheet, Text } from 'react-native'
const ListItem = ({item}) => {
    return(
        <SafeAreaView style={styles.container}>
               <Text style={styles.text}>#{item.id} Oponent's Guess: {item.number}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container: {
      borderWidth: 1,
      borderColor: '#ffffff',
      margin: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#6A0099',
      elevation: 3,
   },
   text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    padding: 15
   }

});

export default ListItem;