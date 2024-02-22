import { BoxInput } from "../../components/BoxInput"
import { ContainerForm, ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style"
import { FormProntuario } from "../../components/FormProntuario/FormProntuario"
import { ImagePerfil } from "../../components/Logo/style"
import { SubTitlePerfil } from "../../components/Text/style"
import { TitlePerfil } from "../../components/Title/style"

export const InsercaoProntuario = () => {
    return (
        <ContainerPerfil>
            <MainContentScroll>
                <MainContent>

                    <ImagePerfil source={require("../../assets/ImagePerfil.jpg")} />

                    <TitlePerfil>Miguel Arteta</TitlePerfil>

                    <SubTitlePerfil>miguel.arteta@gmail.com</SubTitlePerfil>

                    <ContainerForm>

                        <BoxInput
                            fieldHeight={121}
                            textLabel='Descrição da consulta'
                            placeholder='Descrição'
                        />
                        <BoxInput
                            fieldHeight={55}
                            textLabel='Diagnóstico do paciente'
                            placeholder='Diagnóstico'
                        />
                        <BoxInput
                            fieldHeight={121}
                            textLabel='Prescrição médica'
                            placeholder='Prescrição'
                        />

                    </ContainerForm>

                </MainContent>
            </MainContentScroll>
        </ContainerPerfil>
    )
}