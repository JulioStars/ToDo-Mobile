import { TextInput, TextInputProps } from "react-native";
import {styles} from "./styles"
import { useState } from "react";

type Props = TextInputProps

export function Input({...rest}: Props) {
    const [isFocus, setIsFocus] = useState(false)

    return (
        <TextInput
        style={[styles.container, isFocus ? styles.outline : null]}
        selectionColor="#fff"
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...rest}
        />
    )
}