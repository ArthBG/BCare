import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EAEAEA',
  },
  scheduleContainer: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    backgroundColor: "#f14666",
  },
  scheduleDoctorImage: {
    width: 160,
    padding: 10,
    height: 160,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  doctorText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
export default styles;
