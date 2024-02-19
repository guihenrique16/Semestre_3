import styled from "styled-components";

import{LinearGradient} from "expo-linear-gradient"

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ["#60BFC5", "#496BBA"],
    start:{x:-0.05, y:1.05},
    end:{x:1, y:0}
})`
    width:100%;
    height: 102px;
    justify-content: center;
    padding: 20px 20px 22px 20px;
    border-radius: 0px 0px 15px 15px;
    flex-direction: row;
    justify-content:space-between
`

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #49B3BA;
`

export const ContainerNavigation = styled(Container)`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #49B3BA;
`
export const ContainerPerfil = styled(Container)`
    background-color: #ffff;
`
export const ContainerInputPerfil = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: #ffff;
    /* margin-left: 25px; */
    gap: 20px;
    margin-bottom: 20px;
`
export const ContainerInputRow = styled(ContainerPerfil)`
    flex-direction: row;
    gap: 10px;
    margin-bottom: 30px;
`

export const MainContent = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: #ffff;
`

export const MainContentScroll = styled.ScrollView`
    width: 100%;
`