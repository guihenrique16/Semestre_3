import { StyleSheet, Text, View } from "react-native"


const jogos = ({ name, descricao, preco }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Nome: {name} </Text>
            <Text style={styles.text}> Descricao: {descricao} </Text>
            <Text style={styles.text}> Preco: {preco} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        backgroundColor: '#c1c1c1',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    text: {
        fontFamily: 'Poppins_300Light'
    }
})

export default jogos;