import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ContainerBoxPrescricao, Linha } from "./style"
import { TitlePresc } from '../../components/Title/style';
import { SubTitlePresc } from '../../components/Text/style';
import { ContainerInputPresc, ContainerPerfil, MainContentScroll } from '../../components/Container/style';
import { BoxInput } from '../../components/BoxInput';
import { ButtonTitle } from '../../components/ButtonTitle/style';
import { LinkEndModal, LinkMediumPres } from '../../components/Link/style';
import { ImagePerfil } from '../../components/Logo/style';
import { ButtonPrescricao } from '../../components/Button/style';

export const Prescricao = () => {
    return (
        <ContainerPerfil>
            <MainContentScroll>
                <ImagePerfil source={require("../../assets/Doctor.png")} />

                <TitlePresc> Dr.Gelipe Fois</TitlePresc>
                <SubTitlePresc>         Cliníco geral      CRM-15286</SubTitlePresc>

                <ContainerInputPresc>
                    <BoxInput
                        fieldWidth={90}
                        textLabel={"Descrição da consulta"}
                        placeholder={"Descrição da consulta..."}
                        fieldHeight={"121"}
                    />

                    <BoxInput
                        fieldWidth={90}
                        textLabel={"Diagnóstico do paciente"}
                        placeholder={"Diagnóstico..."}
                    />

                    <BoxInput
                        fieldWidth={90}
                        textLabel={"Prescrição médica"}
                        placeholder={"Prescrição médica..."}
                        fieldHeight={"133"}
                    />

                    <BoxInput
                        fieldWidth={90}
                        textLabel={"Exames médicos"}
                        placeholder={"                  Nenhuma foto informada"}
                        fieldHeight={"111"}
                    />


                    <ContainerBoxPrescricao>

                        <ButtonPrescricao>
                            <MaterialCommunityIcons name="camera-plus-outline" size={20} color="#fff" />
                            <ButtonTitle>Enviar</ButtonTitle>
                        </ButtonPrescricao>


                        <LinkMediumPres>Cancelar</LinkMediumPres>

                    </ContainerBoxPrescricao>

                    <Linha />

                    <BoxInput
                        fieldWidth={90}
                        textLabel={"Exames médicos"}
                        placeholder={"Resultado do exame de sangue:"}
                        fieldHeight={"103"}
                    />

                    <LinkEndModal>Voltar</LinkEndModal>

                </ContainerInputPresc>


            </MainContentScroll>
        </ContainerPerfil>
    )
}