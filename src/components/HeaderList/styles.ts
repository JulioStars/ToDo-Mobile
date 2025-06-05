import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
        marginBottom: 20
    },
    titles: {
        fontSize: 14,
        fontWeight: "bold"
    },
    textContainer: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center"
    },
    number: {
        color: "#fff",
        backgroundColor: "#333333",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 9999
    }
})