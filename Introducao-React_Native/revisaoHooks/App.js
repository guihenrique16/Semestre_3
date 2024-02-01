import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <View style={styles.container}>

      <View style={styles.cardContador}>
        <Text>Contador: {count}</Text>

        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>Incremenetar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={decrement} style={{ ...styles.button, backgroundColor: 'red' }}>
          <Text>Decremenetar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
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
  cardContador: {
    
  },
  button: {
    width: '50%',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'green'
  }

});
