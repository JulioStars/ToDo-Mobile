import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#1A1A1A",
    },
    content: {
        width: "100%",
        paddingHorizontal: 24,
    },
    form: {
        flexDirection: "row",
        gap: 8,
        marginTop: -28,
    },
    listEmpty: {
        alignItems: "center",
        paddingTop: 48,
        borderTopWidth: 1,
        borderColor: "#333333",
    },
    textListEmpty: {
        fontSize: 14,
        color: "#808080",
    },
    separatorList: {
        marginVertical: 8,
    },
    listContent: {
        paddingBottom: 384,
    },
    test: {
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})