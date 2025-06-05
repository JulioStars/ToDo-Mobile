import { View, Image } from "react-native"
import {styles} from "./styles"

export function Header() {
    return (
        <View style={styles.container}>
            <Image source={require("@/assets/Logo.png")} />
        </View>
    )
}