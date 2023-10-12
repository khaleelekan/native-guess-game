import {View , StyleSheet, Text, Alert, FlatList, ScrollView} from 'react-native'
import { Title } from '../components/Title'
import { useState,useEffect } from 'react';
import {PrimaryButton} from '../components/PrimaryButton'
import { NumberContainer } from '../components/NumberContainer';
import {Card} from '../components/Card'
import {Ionicons} from '@expo/vector-icons'
import { GuessNumber } from '../components/GuessNumber';
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
    const [rounds, setRounds] = useState([initialGuess]);

    
    useEffect(()=>{
        if (currentGuess === pickedNumber){
          onGameOver(rounds.length);
        }

    },[currentGuess, pickedNumber,onGameOver])

    useEffect(()=>{
      minBoundary=1;
      maxBoundary=100;
    }, []);
    function nextGuessHandler(direction){
      if(
        (direction === 'lower' && currentGuess < pickedNumber)
        || (direction === 'greater' && currentGuess > pickedNumber)
      ){
        Alert.alert("hint", "you should try another direction",
        [{text: 'okay', style: 'cancel'},]);
        return;
      }
      if (direction === 'lower'){
        maxBoundary = currentGuess
      }else{
        minBoundary = currentGuess
      }
      const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
      setCurrentGuess(newRndNumber);
      setRounds(prevRounds => [newRndNumber, ...prevRounds])
    }
    const roundsLength = rounds.length
  return (
    <ScrollView>
    <View style={styles.container}> 
       <Title> Opponent's Screen</Title>
       <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
        <Text style={styles.text}>Directions: Higher or lower</Text> 
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonminus}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name='remove-outline' color='white' size={24}/>
          </PrimaryButton>
        </View>
        <View style={styles.buttonplus}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
        <Ionicons name='add-outline' color='white' size={24}/>
        </PrimaryButton>
        </View>
        </View>
        </Card>
        <View style={styles.listContainer}>
        {/* {rounds.map(round => <Text key={round}>{round}</Text>)} */}
        <FlatList data={rounds} 
        renderItem={(itemData) => <GuessNumber roundNumber={roundsLength - itemData.index}
        item={itemData.item}/>}
        keyExtractor={(item)=>item} />
        </View>
        </View>
        </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  },
    container:{
        flex:1,
        padding: 24
    },  
    text:{
      color: 'white',
      fontSize:20,
      fontFamily: 'open-sansbold',
      fontWeight: '300'
    },
    buttonsContainer:{
      flexDirection: 'row',
      marginTop: 8 
    },
    buttonminus:{
      flex: 1
    },
    buttonplus:{
      flex:1
    },
    listContainer:{
      flex: 1,
      padding: 16
    }

})