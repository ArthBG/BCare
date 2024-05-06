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
    borderRadius: 100,
  },
  scheduleContainerBtns: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  scheduleContainerSchedules: {
    width: "90%",
    marginTop: 20,
    padding: 10,
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "#53E6DD",
    shadowColor: '#5CFFF5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 9,
  },
  Title:{
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: "#FAFAFA",
  },
  textsContainer: {
    padding: 10,
    alignSelf: "center",
  },
  texts: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
  doctorText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  doctorSubText: {
    color: "#323232",
    fontSize: 16,
    textAlign: "center",
  },
  btnremove: {
    width: 150,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#f14666",
    textAlign: "center",
  },  
  btnedit : {
    width: 150,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#22B78A",
    textAlign: "center",
  }
});
export default styles;
