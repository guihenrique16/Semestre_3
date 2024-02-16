import { ContainerHeader } from "../Container/style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./style";

export const Header = () =>{
    return(
        <ContainerHeader>

            <BoxUser>

                <ImageUser source={require("../../../assets/Perfil.jpg")}/>

                <DataUser>
                    <TextDefault>Bem vindo</TextDefault>
                    <NameUser>Dr. Claudio</NameUser>
                </DataUser>

            </BoxUser>

            {/* <MaterialIcons /> */}

        </ContainerHeader>
    )
}