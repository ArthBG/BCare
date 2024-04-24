import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FfFFFF",
    },
    head: {
        backgroundColor: "#f14666",
        width: 412,
        height: 59,
        marginTop: 0,
    },
    textPrincipal: {
        textAlign: "center",
        fontSize: 25,
        margin: 10,
    },
    containerColumn: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    containerMember: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    imgGrupo: {
        width: 412,
        height: 200,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    textMember: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
    },
});

export default styles;