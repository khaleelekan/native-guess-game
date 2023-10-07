import { TextInput, StyleSheet,View } from "react-native"
import { PrimaryButton } from "../components/PrimaryButton"

export const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
        <TextInput/>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginTop:100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5
    }
})