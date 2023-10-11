import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { GameScreen } from './screens/GameScreen';
import { SafeAreaView } from 'react-native';
import {GameOverScreen} from './screens/GameOverScreen'
export default function App() {
  const [pickedNumber, setPickedNumber] = useState()
  const [gameOver, setGameOver] = useState(true)

  function numberHandler (passedNumber) {
    setPickedNumber(passedNumber)
    setGameOver(false)
  }
  function gameOverHandler (){
    setGameOver(true);
  }
  let screen = <StartGameScreen onPicked={numberHandler}/>
if (pickedNumber){
  screen = <GameScreen 
  pickedNumber={pickedNumber} 
  onGameOver={gameOverHandler}/>
}
if (pickedNumber && gameOver){
  screen = <GameOverScreen/>
}

  return (
   
    <LinearGradient 
    colors={['#4e0329','#ddb52f']}
    style={styles.container}>
      <ImageBackground 
      source={require('./assets/background.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      resizeMode='cover'>
     <SafeAreaView style={styles.container}>{screen}</SafeAreaView> 
      </ImageBackground>   
      <StatusBar style="auto" />
    </LinearGradient>
  );
}    

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.18
  }
});
