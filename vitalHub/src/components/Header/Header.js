import { ContainerHeader } from "../Container/style";
import { BoxIcon, BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./style";
import { Ionicons } from '@expo/vector-icons';

export const Header = () => {
    return (
        <ContainerHeader>

            <BoxUser>

                <ImageUser source={require("../../../assets/Perfil.jpg")} />

                <DataUser>
                    <TextDefault>Bem vindo!</TextDefault>
                    <NameUser>Dr. Claudio</NameUser>
                </DataUser>

            </BoxUser>
            
            <BoxIcon>
                <Ionicons name="notifications-sharp" size={24} color="white" />
            </BoxIcon>

        </ContainerHeader>
    )
}