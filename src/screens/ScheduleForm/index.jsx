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

import styles from "./styles";

import Schedule from "../../models/agendamentos/Schedule";
import scheduleRepository from "../../models/agendamentos/ScheduleRepository";

import DateTimePicker from '@react-native-community/datetimepicker';

export default function ScheduleForm({ route }) {
  const { schedule, edit } = route.params;

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [doctor, setDoctor] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);
  const [errorMessage, setErrorMessage] = useState("");

  const [date, setDate] = useState(new Date());
  const [datePicker, setDatePicker] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [time, setTime] = useState(new Date());
  const [timePicker, setTimePicker] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);



  const navigation = useNavigation();


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
    if (!userName || !userEmail || !doctor || !specialist || !date || !time) {
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
        time

      });
      scheduleRepository.addSchedule(newSchedule);
      clearInputs();
    }
    let schedule1 = scheduleRepository.getAll();
    navigation.navigate("ScheduleList", { schedule: schedule1, edit: edit });
  };

  const clearInputs = () => {
    setIsUpdate(false);
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
    setDate(currentDate.toLocaleDateString());
    setDatePicker(currentDate);
    setShowTimePicker(true);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime.toLocaleTimeString());
    setTimePicker(currentTime);
  }

  const dataPiecker = () => {
    setShowDatePicker(true);
  }

  // console.log('essa é a data' + '' + date);
  // console.log('esse é o horario' + '' + time);



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

          {specialist === "Cardiologista" ? (
            <Picker
              style={styles.picker}
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
              style={styles.picker}
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item
                label="Dra. Sarah Thé Coelho"
                value="Dra. Sarah Thé Coelho"
              />
              <Picker.Item
                label="Dra. Flávia M. Rapello"
                value="Dra. Flávia M. Rapello"
              />
              <Picker.Item
                label="Dr. Caio Vieira de Campos"
                value="Dr. Caio Vieira de Campos"
              />
            </Picker>
          ) : null}
          {specialist === "Endocrinologista" ? (
            <Picker
              style={styles.picker}
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item
                label="Dr. Marcio Chaves"
                value="Dr. Marcio Chaves"
              />
              <Picker.Item
                label="Dr. Márcio Gambini"
                value="Dr. Márcio Gambini"
              />
              <Picker.Item
                label="Dra. Caroline Schnoll"
                value="Dra. Caroline Schnoll"
              />
            </Picker>
          ) : null}
          {specialist === "Ginecologista" ? (
            <Picker
              style={styles.picker}
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item
                label="Dra. Luíza Vidigal Sette"
                value="Dra. Luíza Vidigal Sette"
              />
              <Picker.Item
                label="Dra. Luíza Queiroz"
                value="Dra. Luíza Queiroz"
              />
              <Picker.Item
                label="Dr. Allan Nogueira da Silva"
                value="Dr. Allan Nogueira da Silva"
              />
            </Picker>
          ) : null}
          {specialist === "Ortopedista" ? (
            <Picker
              style={styles.picker}
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item
                label="Selecione o médico"
                value="Dr. Fernando Gouvea"
              />
              <Picker.Item label="Dr. Fernando Gouvea" value="" />
              <Picker.Item label="Dr. Lucas Prado" value="Dr. Lucas Prado" />
              <Picker.Item
                label="Dr. André Lange Canhos"
                value="Dr. André Lange Canhos"
              />
            </Picker>
          ) : null}
          {specialist === "Pediatra" ? (
            <Picker
              style={styles.picker}
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item
                label="Dra. Camila Ohomoto de Morais"
                value="Dra. Camila Ohomoto de Morais"
              />
              <Picker.Item
                label="Dra. Juliana de Carvalho Campos"
                value="Dra. Juliana de Carvalho Campos"
              />
              <Picker.Item
                label="Dr. Gabriel Venturelli"
                value="Dr. Gabriel Venturelli"
              />
            </Picker>
          ) : null}
          {specialist === "Psiquiatra" ? (
            <Picker
              style={styles.picker}
              selectedValue={doctor}
              onValueChange={(itemValue) => setDoctor(itemValue)}
            >
              <Picker.Item label="Selecione o médico" value="" />
              <Picker.Item
                label="Dr. Gabriel Reifur"
                value="Dr. Gabriel Reifur"
              />
              <Picker.Item
                label="Dr. Jônatas Batista"
                value="Dr. Jônatas Batista"
              />
              <Picker.Item
                label="Dr. Roberto Ordonha"
                value="Dr. Roberto Ordonha"
              />
            </Picker>
          ) : null}
        </View>

        {
          showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={datePicker}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )
        }
        {
          showTimePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={timePicker}
              mode={'time'}
              is24Hour={true}
              display="default"
              onChange={onChangeTime}
            />
          )
        }





        <TouchableOpacity style={styles.dateAndTimerContainer} onPress={dataPiecker}>
          <Text style={styles.button}>Escolha sua data da consulta</Text>
        </TouchableOpacity>

      </View>
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
        <Text>
          {specialist === "" ? "Selecione a especialidade" : specialist}
        </Text>
        <Text>{doctor === "" ? "Selecione o médico" : doctor}</Text>
      </View>
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
    </ScrollView>
  );
}
