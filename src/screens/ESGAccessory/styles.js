import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#fff',
        padding: 10,
        width: 390,
        height: 70,

    },

    containerPage: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    containerModel: {
        flex: 1,
    },
    containerPage: {
        flex: 1,
    },

    text: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',

    },

    scroll: {
        maxHeight: 300,
        borderTopColor: '#bb0000',
        borderTopWidth: 3,
    },

    boder: {
        borderTopColor: '#bb0000',
        borderTopWidth: 3,
    },


    esgIcon: {
        backgroundColor: '#bb0000',
        padding: 10,
        width: 100,
        height: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        position: 'relative',
        top: 25,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,

        // borderColor: '#000',
        // borderTopWidth: 3,
        // borderLeftWidth: 3,

    },

    containerESG: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },

        esgInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#fff',
        padding: 10,
        width: 390,
        height: 70,
    },

    textESG: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

});

export default styles;