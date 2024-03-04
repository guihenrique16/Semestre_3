import { Modal } from "react-native"
import { BoxModal, ModalContent, ModalImage, ModalText, PatientModal } from "../ProntuarioModal/style"
import { TitleModal } from "../Title/style"
import { ModalButton } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { LinkEndModal } from "../Link/style"

export const DoctorModal = ({
    visible,
    setShowModalDoctor,
    informacao,
    ...rest
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >

            <PatientModal>
                <ModalContent>

                    <ModalImage source={require("../../../assets/Perfil.jpg")} />

                    <TitleModal>{informacao.name}</TitleModal>

                    <BoxModal>
                        <ModalText>Cliníco geral</ModalText>
                        <ModalText>CRM-15286</ModalText>
                    </BoxModal>

                    <ModalButton>
                        <ButtonTitle>Ver local da consulta</ButtonTitle>
                    </ModalButton>

                    <LinkEndModal onPress={() => setShowModalDoctor(false)}>Cancelar</LinkEndModal>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}