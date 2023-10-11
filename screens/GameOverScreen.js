import {View,Text, StyleSheet,Image} from "react-native"
import { Title } from "../components/Title"
import { PrimaryButton } from "../components/PrimaryButton"
export const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.container}>
      <Title> GAME OVER </Title>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/images/success.png')}/>
      </View>
        <Text style={styles.summary}> 
          Your phone needed 
           <Text style={styles.highlight}> {roundsNumber}</Text> round to guess the number 
           <Text style={styles.highlight}> {userNumber}</Text> 
           </Text>
           <PrimaryButton onPress={onStartNewGame}>
            Start New Game</PrimaryButton>
        </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer:{
      // flex: 1,
      height:300,
      width:300,
      borderRadius:150,
      borderWidth: 1,
      borderColor: 'black',
      overflow: 'hidden',
      marginTop: 20
    },
    image:{
      height: '100%',
      width: '100%'
    },
    summary:{
      textAlign: 'center',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'open-sansbold',
      fontSize: 24,
      margin: 18
    },
    highlight:{
      color: '#72063c',

    }
})
