import { Container } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { Input } from "../../components/Input/style"
import { LinkMedium } from "../../components/Link/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { Button, ButtonGoogle } from "../../components/Button/style"
import { ButtonTitleGoogle } from "../../components/ButtonTitleGoogle/style"

import { AntDesign } from '@expo/vector-icons';


export const Login = ({navigation}) => {
    
    async function Login() {
        navigation.navigate('Main')
    }

    return (
        <Container>

            <Logo source={require("../../../assets/VitalHub_Logo 2.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuario ou E-mail"
            />
            <Input
                placeholder="Senha"
            />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button onPress={(e) => Login()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                {/* <IconGoogle source={require("../../assets/GOOGLE.png")}/> */}
                <AntDesign name="google" size={16} color="#496BBA"/>
                <ButtonTitleGoogle>Entrar com google</ButtonTitleGoogle>
            </ButtonGoogle>

            {/* <ContentAccount>
                <textAccount>Nao tem conta? Crie uma conta agora!</textAccount>
            </ContentAccount> */}

        </Container>
    )
}