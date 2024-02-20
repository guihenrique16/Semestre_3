import { useState } from "react"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { CalendarHome } from "../../components/CalendarHome/calendarHome"
import { ContainerPerfil } from "../../components/Container/style"
import { Header } from "../../components/Header/Header"
import { FilterAppointment } from "./style"
import { ListComponent } from "../../components/List/list"
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard"

const Consultas = [
    { id: "1", name: "Guilherme", situacao: "pendente" },
    { id: "2", name: "Gelipe", situacao: "realizado" },
    { id: "3", name: "Felix", situacao: "cancelado" },
    { id: "4", name: "Mumu", situacao: "cancelado" },
    { id: "5", name: "Arteta", situacao: "cancelado" },
    { id: "6", name: "Conha", situacao: "realizado" }
]

export const Home = () => {

    const [statusLista, setStatusLista] = useState("Pendente")

    return (
        <ContainerPerfil>

            <Header />

            <CalendarHome />

            <FilterAppointment>

                <BtnListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />

                <BtnListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />

                <BtnListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />

            </FilterAppointment>



            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({item}) =>
                    statusLista == item.situacao && (
                        <AppointmentCard
                            situacao={item.situacao}
                        />
                    )

                    // <AppointmentCard/>
                }
            />




        </ContainerPerfil>
    )
}
