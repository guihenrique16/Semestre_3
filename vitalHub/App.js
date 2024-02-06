import { StatusBar } from 'expo-status-bar';
import { useFonts, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/Screens/Navegacao/Navegacao';
import { Login } from './src/Screens/Login/Login';


const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    MontserratAlternates_600SemiBold,
    Quicksand_500Medium,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
      //Container - envolve toda a estrutura da tela 
        //Navigator - componenete para navegacao
          //Screen - tela
            //name: nome da tela 
            //component: componenete que sera chamado 
            //options:   

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Navegacao"
            component={Navegacao}
            options={{title:"Navegacao"}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title:"Login"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
 
  );

}