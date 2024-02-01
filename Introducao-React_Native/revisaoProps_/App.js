import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView } from 'react-native';
import Person from './src/components/person/person';
import jogos from './src/components/Jogos/jogos';

import { useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { SingleDay_400Regular } from '@expo-google-fonts/single-day';


export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    SingleDay_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const peopleList = [
    { id: "1", name: "Guilherme", age: "18" },
    { id: "2", name: "Gelipe", age: "45" },
    { id: "3", name: "Felix", age: "19" }
  ]

  const jogosList = [
    { id: "1", name: "Raimbow six", descricao: "melhor jogo de tiro", preco: "199,99" },
    { id: "2", name: "Fifa", descricao: "jogo realista de futebol", preco: "199,99" },
    { id: "3", name: "valorant", descricao: "rpg", preco: "199,99" }
  ]

  return (
    <SafeAreaView>
      <StatusBar />

      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Person name={item.name} age={item.age} />}
      />

      <FlatList
        data={jogosList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <jogos
            nameGame={item.nameGame}
            descricao={item.descricao}
            preco={item.preco}
          />}
      />

    </SafeAreaView>
  );
}

