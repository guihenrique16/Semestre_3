import { Button, View } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Recuperar Senha"
                onPress={() => navigation.navigate("RecoverSenha")}
            />
            <Button
                title="Verificar Email"
                onPress={() => navigation.navigate("CheckEmail")}
            />
            <Button
                title="Redefinir Senha"
                onPress={() => navigation.navigate("ChangeSenha")}
            />
        </View>
    )
}