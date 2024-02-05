import { useEffect, useState } from "react";
import { BoxInput } from "../../Components/BoxInput";
import { ContainerInput } from "../Home/style";
import { ContainerForm, ScrollForm } from "./style";
import axios from 'axios'
import { cepMasked } from "../../Utils/stringFunctions";

export function Home() {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState({
        street: "",
        complement: "",
        district: "",
        districtId: '',
        city: "",
        cityId: "",
        ibgeId: "",
        state: "",
        stateShortname: "",
        zipcode: ""
    })

    const mostrarEndereco = async () => {
        try {
            const promise = await axios.get(`https://brasilaberto.com/api/v1/zipcode/${cep}`)
            setEndereco(promise.data.result)


        } catch (error) {
            console.warn(error);
        }

    }

    useEffect(() => {
        mostrarEndereco()
    }, [cep])

    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel='informar cep'
                    placeholder='Cep...'
                    key='numeric'
                    maxLength={9}
                    editable={true}
                    fieldValue={cep}
                    onChangeText={e => setCep(cepMasked(e))}
                />
                <BoxInput
                    textLabel='Logradouro'
                    placeholder='Logradouro...'
                    fieldValue={endereco.street}
                />
                <BoxInput
                    textLabel='Bairro'
                    placeholder='Bairro...'
                    fieldValue={endereco.district}
                />
                <BoxInput
                    textLabel='Cidade'
                    placeholder='Cidade...'
                    fieldValue={endereco.city}
                />
                <ContainerInput>
                    <BoxInput
                        fieldWidth={67}
                        textLabel='Estado'
                        placeholder='Estado...'
                        fieldValue={endereco.state}
                    />
                    <BoxInput
                        fieldWidth={25}
                        textLabel='UF'
                        placeholder='UF'
                        fieldValue={endereco.stateShortname}
                    />
                </ContainerInput>
            </ContainerForm>
        </ScrollForm>
    )
}