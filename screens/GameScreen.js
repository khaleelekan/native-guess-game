import {View , StyleSheet, Text} from 'react-native'
import { Title } from '../components/Title'
import { useState } from 'react';
import { NumberContainer } from '../components/NumberContainer';
export const GameScreen = () => {
  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
    const initialGuess = generateRandomBetween(1, 100)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.container}> 
       <Title> Opponent's Screen</Title>
       <NumberContainer>{currentGuess}</NumberContainer>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24
    }
})