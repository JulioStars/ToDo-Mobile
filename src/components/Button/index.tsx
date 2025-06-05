import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"

import {styles} from "./styles"
import { Icon } from "../Icon";

type Props = TouchableOpacityProps & {
    iconSize?: number
    iconName: keyof typeof MaterialIcons.glyphMap
    iconColor?: string
}

export function Button({iconSize, iconName, iconColor, ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Icon name={iconName} size={iconSize} color={iconColor} />
        </TouchableOpacity>
    )
}