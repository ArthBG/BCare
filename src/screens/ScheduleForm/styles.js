import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 10,
  },
  form: {
    marginBottom: 20,
  },
  divColor: {
    backgroundColor: "#f14666",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  divImg: {
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3498db",
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 7,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  pickerItem: {
    height: 44,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  pickerItemLabel: {
    fontSize: 16,
  },
  pickerItemValue: {
    fontSize: 16,
  },
  pickerItemValueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pickerItemValueLabel: {
    fontSize: 16,
  },
  pickerItemValuePrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pickerItemValuePriceContainer: {
    flexDirection: "row",
  },
  errorMessage: {
    color: "red",
    marginBottom: 20,
  },
});
export default styles;
