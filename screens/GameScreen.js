import {View , StyleSheet, Text} from 'react-native'
import { Title } from '../components/Title'
export const GameScreen = () => {
  return (
    <View style={styles.container}> 
       <Title> Opponent's Screen</Title>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24
    }
})