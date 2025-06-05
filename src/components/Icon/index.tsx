import {MaterialIcons} from "@expo/vector-icons"

type Props = {
    name: keyof typeof MaterialIcons.glyphMap
    size?: number
    color?: string
}

export function Icon({color, name, size, ...rest}: Props) {
    return <MaterialIcons name={name} size={size} color={color} {...rest}  />
}