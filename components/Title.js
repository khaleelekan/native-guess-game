
import {Text,StyleSheet} from 'react-native'

export const Title = ({children}) => {
  return (
    <Text style={styles.title}>
        {children}
    </Text>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        borderRadius: 6,
        padding: 12
    }
})