import { StatusBar } from 'expo-status-bar';
import { useFonts, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/Screens/Navegacao/Navegacao';
import { Login } from './src/Screens/Login/Login';
import { RecoverSenha } from './src/Screens/RecoverSenha/RecoverSenha';
import { CheckEmail } from './src/Screens/CheckEmail/CheckEmail';
import { ChangeSenha } from './src/Screens/ChangeSenha/ChangeSenha';
import { Cadastro } from './src/Screens/Cadastro/Cadastro';
import { maedogois } from './src/Screens/Maedogois/maedogois';


const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    Montserrat_700Bold,
    MontserratAlternates_700Bold,
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
          <Stack.Screen
            name="RecoverSenha"
            component={RecoverSenha}
            options={{title:"RecoverSenha"}}
          />
          <Stack.Screen
            name="CheckEmail"
            component={CheckEmail}
            options={{title:"CheckEmail"}}
          />
          <Stack.Screen
            name="ChangeSenha"
            component={ChangeSenha}
            options={{title:"ChangeSenha"}}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{title:"Cadastro"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
 
  );

}