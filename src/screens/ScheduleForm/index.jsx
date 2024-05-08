import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image , StyleSheet, Dimensions} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import ErrorMsg from "../../components/ErrorMsg";
import PopUp from "../../components/PopUpForm";
import axios from "axios";
import styles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ScheduleForm({ route }) {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const { schedule, edit } = route.params;
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [doctor, setDoctor] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);
  const [popupErrorMessage, setPopupErrorMessage] = useState("");
  const [doctors, setDoctors] = useState([]);

  const [date, setDate] = useState(new Date());
  const [datePicker, setDatePicker] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [time, setTime] = useState(new Date());
  const [timePicker, setTimePicker] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [popUp, setPopUp] = useState(false);

  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  const styles2 = StyleSheet.create({
    backdrop: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor de fundo desfocada
    },
    // Restante do seu estilo existente...
  });

  useEffect(() => {
    if (specialist) {
      getDoctors(specialist).then(setDoctors);
    }
  }, [specialist]);

  const displayErrorMessage = (message) => {
    setPopupErrorMessage(message);
    setTimeout(() => {
      setPopupErrorMessage("");
    }, 3000);
  };

  function convertDate(inputFormat) {
    const parts = inputFormat.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

  const getDoctors = async (params) => {
    try {
      const response = await axios.get(`${apiURL}/doctors/${params}`);
      return response.data.doctor;
    } catch (error) {
      console.error("Erro ao buscar os médicos:", error);
      displayErrorMessage(
        "Erro ao buscar os médicos. Tente novamente mais tarde."
      );
    }
  };

  const handleScheduleAction = async () => {
    if (!doctor || !specialist || !date || !time) {
      displayErrorMessage("Preencha todos os campos!");
      return;
    }
    if (new Date(date) < new Date()) {
      displayErrorMessage("Data inválida!");
      return;
    }
    setPopUp(true);
  };

  const clearInputs = () => {
    setUserName("");
    setUserEmail("");
    setSpecialist("");
    setDoctor("");
    setDate("");
    setTime("");
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    const convertedDate = convertDate(currentDate.toLocaleDateString());
    if (edit == false) {
      setDate(convertedDate);
    } else {
      setDatePicker(convertedDate);
    }
    setShowTimePicker(true);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime.toLocaleTimeString());
    setTimePicker(currentTime);
  };

  const dataPiecker = () => {
    setShowDatePicker(true);
  };

  return (
    <ScrollView>
      <Text style={styles.title}>Agendamento</Text>
      <View style={styles.Div1}>
        <View style={styles.logoDiv}>
          <Image
            source={require("../../../assets/logovdd.png")}
            style={styles.logo}
          />
          <Picker
            selectedValue={specialist}
            onValueChange={(itemValue) => setSpecialist(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione a especialidade" value="" />
            <Picker.Item label="Cardiologista" value="Cardiologista" />
            <Picker.Item label="Dermatologista" value="Dermatologista" />
            <Picker.Item label="Endocrinologista" value="Endocrinologista" />
            <Picker.Item label="Ginecologista" value="Ginecologista" />
            <Picker.Item label="Ortopedista" value="Ortopedista" />
            <Picker.Item label="Pediatra" value="Pediatra" />
            <Picker.Item label="Psiquiatra" value="Psiquiatra" />
          </Picker>

          {specialist && (
            <Picker
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione o médico" value="" />
              {doctors.map((doctor) => (
                <Picker.Item
                  key={doctor.id}
                  label={doctor.name}
                  value={doctor.name}
                />
              ))}
            </Picker>
          )}

          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={datePicker}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          {showTimePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={timePicker}
              mode={"time"}
              is24Hour={true}
              display="default"
              onChange={onChangeTime}
            />
          )}

          <TouchableOpacity
            style={styles.dateAndTimerContainer}
            onPress={dataPiecker}
          >
            <Text style={styles.button}>Escolha sua data da consulta</Text>
          </TouchableOpacity>
        </View>
        {popupErrorMessage ? <ErrorMsg msg={popupErrorMessage} /> : null}
        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={handleScheduleAction}
        >
          {isUpdate ? (
            <Text style={styles.button}>Atualizar</Text>
          ) : (
            <View style={styles.divBtn}>
              <Text style={styles.button}>Agendar</Text>
            </View>
          )}
        </TouchableOpacity>
        {isUpdate && (
          <TouchableOpacity onPress={clearInputs}>
            <Text style={styles.button}>Cancelar</Text>
          </TouchableOpacity>
        )}
        {popUp && (
          <PopUp
            doctor={doctor}
            data={date}
            time={time}
            exitPopUp={setPopUp}
            clearInps={clearInputs}
            errorMessage={popupErrorMessage}
          />
        )}
      </View>
    </ScrollView>
  );
}
