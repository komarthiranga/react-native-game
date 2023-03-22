import { SafeAreaView, Image, StyleSheet } from 'react-native';
const CustomImage = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Image source={ require('../../assets/img/gameover2.jpeg') }  style={styles.image} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        borderWidth:1,
        borderRadius: 25,
        width: 250,
        height: 250,
    }
});

export default CustomImage;