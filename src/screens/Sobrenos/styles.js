import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      containerColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
      },
      image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        borderRadius: 100,
        marginBottom: 20,
      },
      containerMembers: {
        alignSelf: 'center',    
      },
      text: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify',
      },
      containerMember: {
        width: '90%',
        margin: 10,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#f7f7f7',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
      },
      textMemberT: {
        fontSize: 18,
        color: '#181818',
        fontWeight: 'bold',
        marginBottom: 10,
      },
      textMember: {
        fontSize: 14,
        color: '#667',
        marginBottom: 10,
      },
    });

export default styles;