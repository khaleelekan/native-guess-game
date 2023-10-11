import {View, StyleSheet,Text} from 'react-native'

export const GuessNumber = ({roundNumber,item}) => {
  return (
    <View style={styles.list}>
        <Text style={styles.item}>#{roundNumber}</Text>
        <Text style={styles.item}>Opponents Guess {item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    list:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:8,
        borderWidth: 1,
        borderRadius: 18,
        padding:8,
        backgroundColor:'#ddb52f',
        borderColor: '#72063c',
        elevation: 2,
        shadowColor: "black",
        shadowRadius: 1,
        shadowOpacity:1,
        shadowOffset: 1

    },
    item:{
        color:'#72063c',
        fontFamily: 'open-sansbold'

    }
})
