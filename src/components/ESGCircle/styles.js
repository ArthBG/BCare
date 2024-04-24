import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      circle: {
        width: 110,
        height: 110,
        borderRadius: 55,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      },
      text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        
      },
      componentContainer: {
        alignItems: 'center',
    },
    textBelowCircle: {
        position: 'absolute',
        top: 30,
        fontWeight: "bold",
        color: '#545454',
        fontSize: 30,
    },
    });

export default styles;