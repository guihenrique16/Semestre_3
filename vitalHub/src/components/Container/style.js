import styled from "styled-components";

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
    flex: 1;
    align-items: center;
    background-color: #ffff;
`
export const MainContent = styled.View`
    flex: 1;
    align-items: center;
    background-color: #ffff;
`

export const MainContentScroll = styled.ScrollView`
    width: 100%;
`