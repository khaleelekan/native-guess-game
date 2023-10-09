import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient 
    colors={['#4e0329','#ddb52f']}
    style={styles.container}>
      <ImageBackground 
      source={require('./assets/background.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      resizeMode='cover'>
      <StartGameScreen />
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
