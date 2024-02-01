import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Header } from './src/Components/Header';
import { ContainerApp } from './style';


export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      
      {/* HEADER */}
      <Header/>

      {/* HOMESCREEN */}

      <StatusBar style="auto" 
        backgroundColor='transparent'
        translucent
      />
    </ContainerApp>
  );
}

