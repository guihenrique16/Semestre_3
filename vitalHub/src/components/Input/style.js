import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor:"#FFFFFF"
})`
    width: 89%;
    height: 53px;
    padding: 16px;
    border: 1px;
    border-radius: 5px;
    border-color: white;
    margin-top: 15px;
    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #FFFFFF;
`
export const  InputRecover = styled(Input)`
    margin-top: 25px;
`

export const InputVerify = styled.TextInput.attrs({
    placeholderTextColor:"#FFFF"
})`
    width: 20%;
    height: 68px;
    align-items: center;
    border: 1px;
    border-radius: 5px;
    border-color: white;
    font-size: 45px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #FFFFFF;
    text-align: center;
    
`