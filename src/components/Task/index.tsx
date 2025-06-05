import { View, Text, TouchableOpacity } from "react-native"

import { Icon } from "../Icon"
import {styles} from "./styles"

enum TaskStatus {
    PENDING = "pending",
    DONE = "done"
}

type ItemData = {
    status: TaskStatus
    description: string
}

type Props = {
    data: ItemData
    onRemove: () => void
    onStatus ?: () => void
}

export function Task({data, onRemove, onStatus}: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onStatus}>
                {
                    data.status === TaskStatus.DONE ? <Icon name="check-circle" size={24} color="#8284FA" /> : <Icon name="radio-button-unchecked" size={24} color="#4EA8DE" />
                }
            </TouchableOpacity>

            <Text style={[styles.description, data.status === TaskStatus.DONE ? {color: "#808080", textDecorationLine: "line-through"} : {color: "#fff"}]}>{data.description}</Text>

            <TouchableOpacity style={{marginLeft: "auto"}} onPress={onRemove}>
                <Icon name="delete-outline" size={24} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}