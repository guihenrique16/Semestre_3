import { FieldContent } from "../BoxInput/style"
import { InputForm } from "../Input"
import { Label } from "../Label"

export const BoxInput = ({
    fieldWidth = 100,
    fieldHeight=50,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength
}) => {
    return(
        <FieldContent fieldWidth={fieldWidth}>
            <Label
                textLabel={textLabel}
            />

            <InputForm
                fieldHeight={fieldHeight}
                editable={editable}
                placeholder={placeholder}
                keyType={keyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
            />
        </FieldContent>
    )
}