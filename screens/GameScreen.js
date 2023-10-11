import {View , StyleSheet, Text, Alert} from 'react-native'
import { Title } from '../components/Title'
import { useState,useEffect } from 'react';
import {PrimaryButton} from '../components/PrimaryButton'
import { NumberContainer } from '../components/NumberContainer';
export const GameScreen = ({pickedNumber, onGameOver}) => {
  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  let minBoundary = 1;
  let maxBoundary = 100;

    const initialGuess = generateRandomBetween
    (minBoundary, maxBoundary,pickedNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(()=>{
        if (currentGuess === pickedNumber){
          onGameOver();
        }

    },[currentGuess, pickedNumber,onGameOver])
    function nextGuessHandler(direction){
      if(
        (direction === 'lower' && currentGuess < pickedNumber)
        || (direction === 'greater' && currentGuess > pickedNumber)
      ){
        Alert.alert("hint", "you should another direction",
        [{text: 'sorry!', style: 'cancel'},]);
        return;
      }
      if (direction === 'lower'){
        maxBoundary = currentGuess
      }else{
        minBoundary = currentGuess
      }
      const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
      setCurrentGuess(newRndNumber);
    }
  return (
    <View style={styles.container}> 
       <Title> Opponent's Screen</Title>
       <NumberContainer>{currentGuess}</NumberContainer>
        <Text> Higher or lower</Text>
        <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24
    }
})