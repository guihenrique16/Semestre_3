import { StatusBar } from 'expo-status-bar';
import { useFonts, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Quicksand_500Medium, Quicksand_400Regular, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/Screens/Navegacao/Navegacao';
import { Login } from './src/Screens/Login/Login';
import { RecoverSenha } from './src/Screens/RecoverSenha/RecoverSenha';
import { CheckEmail } from './src/Screens/CheckEmail/CheckEmail';
import { ChangeSenha } from './src/Screens/ChangeSenha/ChangeSenha';
import { Cadastro } from './src/Screens/Cadastro/Cadastro';
import { Perfil } from './src/Screens/Perfil/Perfil';
import { Home } from './src/Screens/Home/Home';
import { InsercaoProntuario } from './src/Screens/InsercaoProntuario/InsercaoProntuario';
import { HomePaciente} from './src/Screens/HomePaciente/HomePaciente';
import { SelecionaClinica } from './src/Screens/SelecionaClinica/SelecionaClinica';



const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    Montserrat_700Bold,
    MontserratAlternates_700Bold,
    Montserrat_600SemiBold,
    MontserratAlternates_600SemiBold,
    Quicksand_500Medium,
    Quicksand_400Regular,
    Quicksand_600SemiBold
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
          <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{title:"Perfil"}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title:"Home"}}
          />
          <Stack.Screen
            name="InsercaoProntuario"
            component={InsercaoProntuario}
            options={{title:"InsercaoProntuario"}}
          />
          <Stack.Screen
            name="HomePaciente"
            component={HomePaciente}
            options={{title:"HomePaciente"}}
          />
          <Stack.Screen
            name="SelecionaClinica"
            component={SelecionaClinica}
            options={{title:"SelecionaClinica"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
 
  );

}