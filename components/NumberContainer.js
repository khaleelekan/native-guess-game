import {View, Text,StyleSheet,Dimensions} from 'react-native'

export const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: 'white',
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText:{
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold'
    }
})