import { StyleSheet, Text, View } from "react-native"

 export const Card = ({ name, age, type, hour }) => {
    return (
        <View>
            <Text>{name} </Text>
            <Text>{age} </Text>
            <Text>{type} </Text>
            <Text>{hour} </Text>
        </View>
    );
};