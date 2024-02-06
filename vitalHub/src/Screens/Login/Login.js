import { Link } from "@react-navigation/native"
import { Button, Text } from "react-native"
import { Container } from "../../components/Container/style"
import { Logo } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { BoxInput } from "../../components/BoxInput/styled"
import { Input } from "../../components/Input/style"


export const Login = () => {
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

            {/* <LinkMedium>Esqueceu ssua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <Button>
                <ButtonTitleGoogle>Entrar com google</ButtonTitleGoogle>
            </Button>

            <ContentAccount>
                <textAccount>Nao tem conta? Crie uma conta agora!</textAccount>
            </ContentAccount> */}

        </Container>
    )
}