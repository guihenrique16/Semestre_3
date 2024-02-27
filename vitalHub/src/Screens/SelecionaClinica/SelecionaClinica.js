import { useState } from "react"
import { ButtonCardClinica } from "../../components/ButtonCardClinica/ButtonCardClinica"
import { ContainerPerfil } from "../../components/Container/style"
import { ListComponent } from "../../components/List/list"
import { TitleModal } from "../../components/Title/style"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"
import { LinkEndModal } from "../../components/Link/style"

const Clinicas = [
    { id: "1", name: "Guilherme", situacao: "pendente" },
    { id: "2", name: "Gelipe", situacao: "realizado" },
    { id: "3", name: "Felix", situacao: "cancelado" },
    { id: "4", name: "Mumu", situacao: "cancelado" }
]

export const SelecionaClinica = () => {

    const [statusLista, setStatusLista] = useState("")

    return (
        <ContainerPerfil>
            <TitleModal>Selecionar Clinica</TitleModal>

            <ListComponent
                data={Clinicas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    <ButtonCardClinica />
                }

                showsVerticalScrollIndicator={false}
            />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <LinkEndModal>Cancelar</LinkEndModal>

        </ContainerPerfil>

    )
}