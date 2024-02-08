import { Container } from "../../components/Container/style"
import { AntDesign } from '@expo/vector-icons';
import { Logo } from "../../components/Logo/style";
import { BoxArrow } from "../../components/BoxArrow/style";
import { Title } from "../../components/Title/style";
import { SubTitle } from "../../components/Text/style";
import { InputRecover } from "../../components/Input/style";
import { ButtonRecover } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { LinkEnd } from "../../components/Link/style";


export const RecoverSenha = () => {
    return (
        <Container>
            <BoxArrow>
                <AntDesign name="arrowleft" size={24} color="#FFFF" />
            </BoxArrow>

            <Logo source={require("../../../assets/VitalHub_Logo 2.png")} />

            <Title>Recuperar senha</Title>

            <SubTitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</SubTitle>

            <InputRecover
                placeholder="Usuario ou E-mail"
            />

            <ButtonRecover>
                <ButtonTitle>Continuar</ButtonTitle>
            </ButtonRecover>

            <LinkEnd>Cancelar</LinkEnd>


        </Container>
    )
}