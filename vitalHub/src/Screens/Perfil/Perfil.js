import { BoxInput } from "../../components/BoxInput";
import { ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style";
import { ImagePerfil } from "../../components/Logo/style";
import { SubTitle } from "../../components/Text/style";
import { TitlePerfil } from "../../components/Title/style";

export const Perfil = () => {
    return (
        <ContainerPerfil>
            <MainContentScroll>
                <MainContent>

                    <ImagePerfil source={require("../../assets/ImagePerfil.jpg")} />

                    <TitlePerfil>Miguel Arteta</TitlePerfil>

                    <SubTitle>miguel.arteta@gmail.com</SubTitle>

                    <BoxInput
                        textLabel='Data de nascimento:'
                        placeholder='xx/xx/xxxx'
                        // key='numeric'
                        maxLength={9}
                        // editable={true}
                        // fieldValue={cep}
                        onChangeText={e => setCep(cepMasked(e))}
                    />
                    <BoxInput
                        textLabel='CPF:'
                        placeholder='465********'
                        // fieldValue={endereco.street}
                    />
                    <BoxInput
                        textLabel='Endereco'
                        placeholder='Av.Regente Feijo, 1900'
                        // fieldValue={endereco.district}
                    />

                </MainContent>
            </MainContentScroll>
        </ContainerPerfil>
    )
}