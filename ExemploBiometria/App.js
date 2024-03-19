import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function App() {

  const[dateHistory, setDateHistory] = useState({})
  const[authenticated, setAuthenticated] = useState(false)
  const[isBiometricSupported, setIsBiometricSupported] = useState(false)


  async function CheckExistAuthemtications(){
    const compatible = await LocalAuthentication.hasHardwareAsync();

    setIsBiometricSupported(compatible)
  }

  async function SetHistory(){
    const objAuth = {
      dataAuthentication : moment().format('DD/MM/YYYY HH:mm:ss')
    }

    await AsyncStorage.setItem('authenticate', JSON.stringify(objAuth))

    setDateHistory(objAuth)
  }

  async function GetHistory(){
    const objAuth = await AsyncStorage.getItem('authenticate')
  
    if (objAuth) {
      setDateHistory(JSON.parse(objAuth))
    }
  }

  async function handleAuthentication(){
    const biometricExist = await LocalAuthentication.isEnrolledAsync();
    
    if (!biometricExist) {
      return Alert.alert(
        'falha ao logar',
        'Nao foi encontrado nenhuma biometria.'
      )
    }

    const auth = await LocalAuthentication.authenticateAsync();
    
    setAuthenticated(auth.success)

    if (auth.success) {
      SetHistory();
    }
  }

  useEffect(() => {
    CheckExistAuthemtications();

    GetHistory()
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>
        {
          isBiometricSupported
          ?"Seu Dispositivo é compativel com a Biometria"
          :'Seu dispositivo nao suporta a biometria/face id'
        }
      </Text>

      <TouchableOpacity style={styles.btnAuth} onPress={() => handleAuthentication()}>
        <Text style={styles.textAuth}> autenticar acesso</Text>
      </TouchableOpacity>

      <Text style={[styles.txtReturn, {color : authenticated ? 'green' : 'red'}]}>
        {
          authenticated
          ?'autenticado'
          :'Nao Autenticado'
        }
      </Text>

      {
        dateHistory.dataAuthentication
        ?<Text style={styles.txtHistory}>
            Ultimo acesso em {dateHistory.dataAuthentication}
        </Text>
        : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30,
  },
  btnAuth:{
    padding:16,
    borderRadius:10,
    margin:20,
    backgroundColor: '#ff8800',
  },
  textAuth:{
    fontSize: 20,
    color:'white',
    fontWeight: 'bold'  
  },
  txtReturn:{
    fontSize: 22,
    margin: 50
  },
  txtHistory:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#858383',
    position: 'absolute',
    bottom: 120

  }


});
