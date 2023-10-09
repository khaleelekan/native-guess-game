
import { View, Text,Pressable,StyleSheet } from "react-native"

export const PrimaryButton = ({children , onPress}) => {
  return (
    
    <View style={styles.buttonOuterContainer}>
      <Pressable style={styles.buttonInnerContainer}
      android_ripple={{ color: '#640233' }}
      onPress={onPress}>
       <Text style={styles.button}>{children}</Text>
       </Pressable> 
    </View>
  )
}

const styles = StyleSheet.create({ 
  buttonOuterContainer:{

  },
  buttonInnerContainer:{
    backgroundColor: '#4e0329',
    borderRadius: 28,
    paddingHorizontal:16,
    paddingVertical: 8,
    margin: 4
  },
  button:{
    color: 'white',
    textAlign: 'center'
  }
})