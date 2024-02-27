import { BoxInput } from "../../components/BoxInput"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { ContainerForm, ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style"
import { LinkEndModal } from "../../components/Link/style"
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
                            // placeholderColor={"#34898F"}
                            BorderColor={"#49B3BA"}
                            fieldHeight={121}
                            textLabel='Descrição da consulta'
                            placeholder='Descrição'
                        />
                        <BoxInput
                            BorderColor={"#49B3BA"}
                            fieldHeight={55}
                            textLabel='Diagnóstico do paciente'
                            placeholder='Diagnóstico'
                        />
                        <BoxInput
                            BorderColor={"#49B3BA"}
                            fieldHeight={121}
                            textLabel='Prescrição médica'
                            placeholder='Prescrição'
                        />

                    </ContainerForm>

                    <Button>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button>

                    <LinkEndModal>Cancelar</LinkEndModal>


                </MainContent>
            </MainContentScroll>
        </ContainerPerfil>
    )
}