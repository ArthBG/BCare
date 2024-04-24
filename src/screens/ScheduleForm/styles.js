import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
    },
    form: {
        marginBottom: 20,
        
    },
    divBtn : {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#3498db",
        padding: 10,
        borderRadius: 7,
        alignItems: "center",
        color: "#fff",
        width: 150,
    },
    datePicker: {
        marginBottom: 20,
    },
    datePickerContainer: {
        marginBottom: 20,
    },
    datePickerText: {
        fontSize: 18,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    errorMessage: {
        color: "red",
        fontSize: 16,
        marginBottom: 10,
    },

}
);
export default styles;