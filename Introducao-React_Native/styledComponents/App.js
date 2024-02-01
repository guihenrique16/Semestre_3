import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/componenets/Container/Container';
import { Title } from './src/componenets/Title/Title';
import { TitleBtnIncrement } from './src/componenets/Title/TitleBtnIncrement';
import { TitleBtnDecrement } from './src/componenets/Title/TitleBtnDecrement';
import { BtnDecrement } from './src/componenets/Button/BtnDecrement';
import { BtnIncrement } from './src/componenets/Button/BtnIncrement';
import { CardContador } from './src/componenets/CardContador/CardContador';
import { BoxButton } from './src/componenets/BoxButton/BoxButton';
import { ImageCalc } from './src/componenets/ImageCalc/ImageCalc';

// import { useFonts, NanumGothic_600Regular} from '@expo-google-fonts/nanum-gothic';


export default function App() {

  // let [fontsLoaded, fontError] = useFonts({
  //   NanumGothic_600Regular,
  // });

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else{
      Alert.alert('impossivel')
    }
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <Container>

      <ImageCalc source={{uri:"https://anprotec.org.br/site/wp-content/uploads/2018/09/logo-senai-cor-1.jpg"}}></ImageCalc>

      <CardContador>
        <Title>Contador: {count}</Title>

        <BoxButton>
          <BtnDecrement onPress={decrement}>
            <TitleBtnDecrement>Diminuir</TitleBtnDecrement>
          </BtnDecrement>
          <BtnIncrement onPress={increment}>
            <TitleBtnIncrement>Aumentar</TitleBtnIncrement>
          </BtnIncrement>
        </BoxButton>

      </CardContador>


      <StatusBar style="auto" />
    </Container>
  );
}

// const styles = StyleSheet.create({});
