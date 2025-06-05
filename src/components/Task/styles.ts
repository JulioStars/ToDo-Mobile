import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "auto",
        backgroundColor: "#262626",
        borderWidth: 1,
        borderColor: "#333333",
        flexDirection: "row",
        borderRadius: 8,
        padding: 12,
        alignItems: "center",
        gap: 8,
        overflow: "hidden"
    },
    description: {
        width: 250,
        fontSize: 14,
        lineHeight: 25,
    }
})