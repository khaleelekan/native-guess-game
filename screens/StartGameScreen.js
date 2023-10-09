import { useState } from "react"
import { TextInput, StyleSheet,View } from "react-native"
import { PrimaryButton } from "../components/PrimaryButton"

export const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState('')
  
  function inputHandler (inputedNumber){
    setEnteredNumber(inputedNumber)
  }
  function resetHandler (){
    setEnteredNumber(" ")
  }
  function confirmHandler (){
    console.log("you clicked confirm button")
  }
  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput}
         maxLength={2}
         keyboardType="number-pad"
         autoCapitalize="none"
         onChangeText={inputHandler}
         value={enteredNumber}/>
         <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
         <View style={styles.buttonContainer}>
         <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
         </View>
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
       alignItems:'center',
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
    },
    numberInput: {
        height: 50,
        width: 50,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"
        
    },
    buttonsContainer:{
      flexDirection: 'row'
    },
    buttonContainer:{
      flex: 1
    }
})