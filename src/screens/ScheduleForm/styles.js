import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  Div1: {
    backgroundColor: "#f14666",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 300,
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: "#22B78A",
    color: "#fff",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  dateAndTimerContainer: {
    height: 50,
    width: 300,
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: "#22B78A",
    color: "#fff",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    padding: 20,
    backgroundColor: "#53E6DD",
    borderRadius: 10,
    marginBottom: 20,
  },
  btnSubmit: {
    backgroundColor: "#22B78A",
    width: 300,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginBottom: 20,
    alignSelf: "center",
  },
  button: {
    color: "#fff",
  },
  img: {
    width: 300,
    height: 220,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
  },
});

export default styles;
