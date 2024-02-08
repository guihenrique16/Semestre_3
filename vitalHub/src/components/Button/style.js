import styled from "styled-components";

export const  Button = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    background-color: #496BBA;
    border: 1px #496BBA;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 12px 8px 12px 8px ;
`

export const  ButtonGoogle = styled(Button)`
    background-color: #FFFFFF;
    border: 1px #FFFFFF;
    flex-direction: row;
    gap: 27px;
    margin-top: 25px;
`

export const  ButtonRecover = styled(Button)`
    margin-top: 25px;
`

