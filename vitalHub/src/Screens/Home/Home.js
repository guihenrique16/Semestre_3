import { useState } from "react"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { CalendarHome } from "../../components/CalendarHome/calendarHome"
import { ContainerPerfil } from "../../components/Container/style"
import { Header } from "../../components/Header/Header"
import { FilterAppointment } from "./style"
import { FlatList } from "react-native"
import { Card } from "../../components/Card/Card"

export const Home = () => {

    const [statusLista, setStatusLista] = useState("Pendente")

    const cardList = [
        { id: "1", name: "Guilherme", age: "18 anos" },
        { id: "2", name: "Gelipe", age: "45 anos" },
        { id: "3", name: "Felix", age: "19 anos" }
    ]

    return (
        <ContainerPerfil>

            <Header />

            <CalendarHome />

            <FilterAppointment>

                <BtnListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "Pendente"}
                    onPress={() => setStatusLista("Pendente")}
                />

                <BtnListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "Realizadas"}
                    onPress={() => setStatusLista("Realizadas")}
                />

                <BtnListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "Canceladas"}
                    onPress={() => setStatusLista("Canceladas")}
                />

            </FilterAppointment>

            <FlatList
                data={cardList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Card name={item.name} age={item.age} />}
            />

        </ContainerPerfil>
    )
}
