import { useState } from "react"
import { TextInput, StyleSheet,View, Alert,Text } from "react-native"
import { PrimaryButton } from "../components/PrimaryButton"
import { Title } from "../components/Title"
import {Card} from '../components/Card'
export const StartGameScreen = ({onPicked}) => {
  const [enteredNumber, setEnteredNumber] = useState('')
  
  function inputHandler (inputedNumber){
    setEnteredNumber(inputedNumber)
  }
  function resetHandler (){
    setEnteredNumber(" ")
  }
  function confirmHandler (){
    const chosenNumber = parseInt(enteredNumber)
    onPicked()

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
      Alert.alert(
       "invalid number",
      "Enter a number between 0 and 99",
      [{ text: 'Okay', style: 'destructive', onPress: resetHandler}])
    }else{
    onPicked(chosenNumber)
    }
  }
  return (
    <View>
      <View style={styles.title}>
      <Title >GUESS A NUMBER</Title>
      </View>
    <Card>
      <Text style={styles.text}>Enter a number</Text>
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
    </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
      marginTop: 100,
      alignItems: 'center'
    },
    text:{
      fontSize:20,
      color: 'white'
    },
  
    numberInput: {
        height: 50,
        width: 50,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontSize: 30,
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