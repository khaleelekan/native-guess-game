import {View,Text, StyleSheet} from "react-native"
export const GameOverScreen = () => {
  return (
    <View style={styles.container}>
        <Text> GameOverScreen </Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
