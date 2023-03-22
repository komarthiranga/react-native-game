import { Pressable, Text, StyleSheet } from 'react-native';

const CustomButton = ({title, color, pressHandler}) => {
    return (
        <Pressable style={styles.button} onPress={pressHandler} >
            <Text style={styles.text}>{title}</Text>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})

export default CustomButton;