import { Button } from "react-native"
import { ContainerNavigation } from "../../components/Container/style"
import { FontAwesome5 } from '@expo/vector-icons';

export const Navegacao = ({navigation}) => {
    return(
        <ContainerNavigation>
            <FontAwesome5 name="hospital-symbol" size={45} color="black" />

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
            <Button
                title="Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            />
            <Button
                title="Perfil"
                onPress={() => navigation.navigate("Perfil")}
            />
            <Button
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
            <Button
                title="Insercao Prontuario"
                onPress={() => navigation.navigate("InsercaoProntuario")}
            />
            <Button
                title="home Paciente"
                onPress={() => navigation.navigate("homePaciente")}
            />
        </ContainerNavigation>
    )
}