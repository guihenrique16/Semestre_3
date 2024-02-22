import { InputPerfil } from "./style"

export const InputForm = ({
    placeholder,
    fieldHeight = 50,
    fieldValue = null,
    onChangeText = null,
    keyType,
    maxLength
}) => {
    return (
        <InputPerfil
            fieldHeight={fieldHeight}
            placeholder={placeholder}
            keyBoardType={keyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />
    )
}