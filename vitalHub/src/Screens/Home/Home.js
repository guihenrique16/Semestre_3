import { CalendarHome } from "../../components/CalendarHome/calendarHome"
import { ContainerPerfil } from "../../components/Container/style"
import { Header } from "../../components/Header/Header"

export const Home = () => {
    return (
        <ContainerPerfil>
            <Header />

            <CalendarHome/>
        </ContainerPerfil>
    )
}
