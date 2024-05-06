import { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import PopUp from "../../components/PopUpForm";
import axios from "axios";

import styles from "./styles";

import Schedule from "../../models/agendamentos/Schedule";
import scheduleRepository from "../../models/agendamentos/ScheduleRepository";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function ScheduleForm({ route }) {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const { schedule, edit } = route.params;
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [doctor, setDoctor] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);
  const [errorMessage, setErrorMessage] = useState("");
  const [doctors, setDoctors] = useState([]);

  const [date, setDate] = useState(new Date());
  const [datePicker, setDatePicker] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [time, setTime] = useState(new Date());
  const [timePicker, setTimePicker] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [popUp, setPopUp] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit && schedule) {
      setUserName(schedule.userName);
      setUserEmail(schedule.userEmail);
      setSpecialist(schedule.specialist);
      setDoctor(schedule.doctor);
      setDate(schedule.date);
      setTime(schedule.time);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [schedule, edit]);

  useEffect(() => {
    if (specialist) {
      getDoctors(specialist).then(setDoctors);
    }
  }, [specialist]);

  const displayErrorMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  const getDoctors = async (params) => {
    try {
      const response = await axios.get(`${apiURL}/doctors/${params}`);
      return response.data.doctor;
    } catch (error) {
      console.error("Erro ao buscar os médicos:", error);
      displayErrorMessage("Erro ao buscar os médicos. Tente novamente mais tarde.");
    }
  }

  const handleScheduleAction = async () => {
    if (!doctor || !specialist || !date || !time) {
      displayErrorMessage("Preencha todos os campos!");
      return;
    }
    if (new Date(date) < new Date()) {
      displayErrorMessage("Data inválida!");
      return;
    } else {
      console.log(date);
    }
    setPopUp(true);

    // if (!userName || !userEmail || !doctor || !specialist) {
    //   displayErrorMessage("Preencha todos os campos!");
    //   return;
    // }
    // const specialistSchedule = await scheduleRepository.findScheduleBySpecialistDateTime(doctor, date, time);

    // if (specialistSchedule) {
    //   displayErrorMessage(`O especialista ${doctor} já tem um horário marcado para esta data e horário!`);
    //   return;
    // }

    // const newSchedule = new Schedule(userName, userEmail, specialist, doctor, date, time);

    // try {
    //   if (isUpdate && schedule) {
    //     await scheduleRepository.updateSchedule(schedule.id, newSchedule);
    //   } else {
    //     await scheduleRepository.createSchedule(newSchedule);
    //   }
    // } catch (error) {
    //   console.error("Erro ao salvar o agendamento:", error);
    //   displayErrorMessage("Erro ao salvar o agendamento. Tente novamente mais tarde.");
    // }


    // if (isUpdate) {
    //   scheduleRepository.updateSchedule(
    //     schedule.id,
    //     userName,
    //     userEmail,
    //     specialist,
    //     doctor,
    //     date,
    //     time
    //   );
    //   clearInputs();
    // } else {
    //   setIsUpdate(false);
    //   const newSchedule = new Schedule({
    //     userName,
    //     userEmail,
    //     specialist,
    //     doctor,
    //     date,
    //     time,
    //   });
    //   scheduleRepository.addSchedule(newSchedule);
    //   clearInputs();
    // }
    // navigation.navigate("Agenda");
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
    if (edit == false) {
      setDate(currentDate.toLocaleDateString());
    } else {
      setDatePicker(currentDate);
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

  console.log("essa é a data" + "" + date);
  console.log("esse é o horario" + "" + time);

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

          {
            specialist && (
              <Picker
                selectedValue={doctor}
                onValueChange={(itemValue) => setDoctor(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Selecione o médico" value="" />
                {
                  doctors.map((doctor) => (
                    <Picker.Item key={doctor.id} label={doctor.name} value={doctor.name} />
                  ))
                }
              </Picker>
            )
          }

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
        {/* <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={userEmail}
            onChangeText={setUserEmail}
          />
          <Text>
            {specialist === "" ? "Selecione a especialidade" : specialist}
          </Text>
          <Text>{doctor === "" ? "Selecione o médico" : doctor}</Text>
        </View> */}
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity style={styles.btnSubmit} onPress={handleScheduleAction}>
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
        {
          popUp && (
            <PopUp doctor={doctor} data={date} time={time} />
          )
        }
      </View>
    </ScrollView>
  );
}
