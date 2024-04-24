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
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#f14666',
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
    textDescricao: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
    },
    textNome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textCargo: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
    },
    textGrupo: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    editButton:[
        {
            backgroundColor: '#6d012b',
            color: '#fff',
            padding: 10,
            margin: 10,
            borderRadius: 5,
        }
    ],
    addButton:[
        {
            backgroundColor: '#008000',
            color: '#fff',
            padding: 10,
            margin: 10,
            borderRadius: 5,
            textAlign: 'center',
        }
    ],
    deleteButton: [
        {
            backgroundColor: '#ff0000',
            color: '#fff',
            padding: 10,
            margin: 10,
            borderRadius: 5,
        }
    ],
    
});

export default styles;