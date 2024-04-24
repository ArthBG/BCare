import { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import styles from "./styles";

import Schedule from "../../models/Schedule";
import scheduleRepository from "../../models/ScheduleRepository";

export default function ScheduleForm({ route }) {
  const { schedule, edit } = route.params;

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [doctor, setDoctor] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();

  const onChangeT = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowT(false);
    setTime(currentTime);
  };

  useEffect(() => {
    if (edit) {
      setUserName(schedule.userName);
      setUserEmail(schedule.userEmail);
      setSpecialist(schedule.specialist);
      setDoctor(schedule.doctor);
      setDate(schedule.date);
      setTime(schedule.time);
    } else {
      clearInputs();
    }
  }, [schedule, edit]);

  const displayErrorMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  const handleScheduleAction = () => {
    if (!userName || !userEmail || !doctor || !specialist) {
      displayErrorMessage("Preencha todos os campos!");
      return;
    }

    if (isUpdate) {
      scheduleRepository.updateSchedule(
        schedule.id,
        userName,
        userEmail,
        specialist,
        doctor,
        date,
        time
      );
      clearInputs();
    } else {
      const newSchedule = new Schedule({
        userName,
        userEmail,
        specialist,
        doctor,
        date,
        time,
      });
      scheduleRepository.addSchedule(newSchedule);
      clearInputs();
    }
    navigation.navigate("ScheduleList");
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;

    setShow(false);
    const newDate = new Date(
      currentDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );
    setDate(newDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showModeT = (currentMode) => {
    setShowT(true);
    setMode(currentMode);
  };

  const clearInputs = () => {
    setIsUpdate(false);
    setUserName("");
    setUserEmail("");
    setSpecialist("");
    setDoctor("");
    setDate(new Date());
    setTime(new Date());
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Agendamento</Text>
        <View style={styles.form}>
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
          <Picker
            selectedValue={specialist}
            onValueChange={(itemValue) => setSpecialist(itemValue)}
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

          {specialist === "Cardiologista" ? (
            <Picker
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item
                label="Dra. Lilian Seffrin Sande"
                value="Dra. Lilian Seffrin Sande"
              />
              <Picker.Item label="Dr. Felipe Leal" value="Dr. Felipe Leal" />
              <Picker.Item
                label="Dr. Alvaro Luiz P. Pantaleão"
                value="Dr. Alvaro Luiz P. Pantaleão"
              />
            </Picker>
          ) : null}
          {specialist === "Dermatologista" ? (
            <Picker
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item label="Dra. Sarah Thé Coelho" value="Dra. Sarah Thé Coelho" />
              <Picker.Item label="Dra. Flávia M. Rapello" value="Dra. Flávia M. Rapello" />
              <Picker.Item label="Dr. Caio Vieira de Campos" value="Dr. Caio Vieira de Campos" />
            </Picker>
          ) : null}
          {specialist === "Endocrinologista" ? (
            <Picker
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item label="Dr. Marcio Chaves" value="Dr. Marcio Chaves" />
              <Picker.Item label="Dr. Márcio Gambini" value="Dr. Márcio Gambini" />
              <Picker.Item label="Dra. Caroline Schnoll" value="Dra. Caroline Schnoll" />
            </Picker>
          ) : null}
          {specialist === "Ginecologista" ? (
            <Picker
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item label="Dra. Luíza Vidigal Sette" value="Dra. Luíza Vidigal Sette" />
              <Picker.Item label="Dra. Luíza Queiroz" value="Dra. Luíza Queiroz" />
              <Picker.Item label="Dr. Allan Nogueira da Silva" value="Dr. Allan Nogueira da Silva" />
            </Picker>
          ) : null}
          {specialist === "Ortopedista" ? (
            <Picker
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="Dr. Fernando Gouvea" />
              <Picker.Item label="Dr. Fernando Gouvea" value="" />
              <Picker.Item label="Dr. Lucas Prado" value="Dr. Lucas Prado" />
              <Picker.Item label="Dr. André Lange Canhos" value="Dr. André Lange Canhos" />
            </Picker>
          ) : null}
          {specialist === "Pediatra" ? (
            <Picker
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item label="Dra. Camila Ohomoto de Morais" value="Dra. Camila Ohomoto de Morais" />
              <Picker.Item label="Dra. Juliana de Carvalho Campos" value="Dra. Juliana de Carvalho Campos" />
              <Picker.Item label="Dr. Gabriel Venturelli" value="Dr. Gabriel Venturelli" />
            </Picker>
          ) : null}
          {specialist === "Psiquiatra" ? (
            <Picker
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item label="Dr. Gabriel Reifur" value="Dr. Gabriel Reifur" />
              <Picker.Item label="Dr. Jônatas Batista" value="Dr. Jônatas Batista" />
              <Picker.Item label="Dr. Roberto Ordonha" value="Dr. Roberto Ordonha" />
            </Picker>
          ) : null}
         {/*  <View style={styles.datePickerContainer}>
            <TouchableOpacity onPress={() => showMode(date)}>
              <Text style={styles.datePickerText}>
                Selecione a data que deseja agendar
              </Text>
            </TouchableOpacity>
          </View>

          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display="spinner"
              onChange={onDateChange}
              style={styles.datePicker}
            />
          )}

          <TouchableOpacity onPress={() => showModeT(time)}>
            <Text style={styles.label}>Selecione o horário do agendamento</Text>
          </TouchableOpacity>
          {showT && (
            <DateTimePicker
              value={time}
              mode="time"
              display="spinner"
              onChange={onChangeT}
              style={styles.datePicker}
            />
          )} */}
          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}
          <TouchableOpacity onPress={handleScheduleAction}>
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
        </View>
      </ScrollView>
    </View>
  );
}
