import { SafeAreaView, StyleSheet, Text} from 'react-native';
const PageHeading = ({title}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        margin: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        padding: 15,
        fontWeight: 'bold',
        fontSize: 20,
        color: "#FFFFFF"
    }

})

export default PageHeading;