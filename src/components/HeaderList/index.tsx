import { Text, TextProps, View } from "react-native";
import {styles} from "./styles"

type Props = TextProps & {
    createdTitle: string
    checkedTitle: string
}

export function HeaderList({checkedTitle, createdTitle}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={[styles.titles, {color: "#4EA8DE"}]}>Criadas</Text>
                <Text style={[styles.titles, styles.number]}>{createdTitle}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={[styles.titles, {color: "#8284FA"}]}>Concluídas</Text>
                <Text style={[styles.titles, styles.number]}>{checkedTitle}</Text>
            </View>
        </View>
    )
}