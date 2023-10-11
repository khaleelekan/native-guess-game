import {StyleSheet, View}from 'react-native'

export const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>
        {children}
        </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        alignItems:'center',
         marginTop:40,
         marginHorizontal: 24,
         padding: 16,
         backgroundColor: '#72063c',
         borderRadius: 8,
         elevation: 4,
         shadowColor: 'black',
         shadowOffset: { width: 0, height: 2 },
         shadowRadius: 6,
         shadowOpacity: 0.5
     },
})
