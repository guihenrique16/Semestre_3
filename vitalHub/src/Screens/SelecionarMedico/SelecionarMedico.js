import { Button } from "../../components/Button/style";
import { ButtonTitle } from "../../components/ButtonTitle/style";
import { ContainerPerfil, MainContent, MainContentScroll } from "../../components/Container/style";
import { LinkEndModal } from "../../components/Link/style";
import { TitleModal } from "../../components/Title/style";

export const SelecionarMedico = () => {

    const [selected, setSelected] = useState("")

    const [medico, setMedico] = useState([
        {
            id: "1",
            name: "Clínica Natureh",
            especialidade: "",
        },
        {
            id: "2",
            name: "Diamond Pró-Mulher",
            especialidade: "",
        },
        {
            id: "3",
            name: "Clinica Villa Lobos",
            especialidade: "",
        },
        {
            id: "4",
            name: "SP Oncologia Clínica",
            especialidade: "",
        },
    ]);

    return (
        <ContainerPerfil>
            <MainContentScroll>
                <MainContent>
                    <TitleModal>Selecionar Medico</TitleModal>

                    <ListComponent
                        data={medico}
                        keyExtractor={(item) => item.id}

                        renderItem={({ item }) =>
                            <ButtonCardMedico
                                name={item.name}
                                especialidade={item.especialidade}
                                selected={item.name === selected}
                                onPress={() => {
                                    setSelected(item.name);
                                }}
                            />
                        }

                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />

                    <Button>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </Button>

                    <LinkEndModal>Cancelar</LinkEndModal>
                </MainContent>
            </MainContentScroll>
        </ContainerPerfil>

    )
}