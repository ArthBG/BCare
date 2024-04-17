import { useState, useEffect } from "react";
import { View, TextInput, Text, Touchable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import styles from "./styles";

import Schedule from "../../models/Schedule";
import scheduleRepository from "../../models/ScheduleRepository";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ScheduleForm({ route }) {
  const { schedule, edit } = route.params;

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [doctor, setDoctor] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isUpdate, setIsUpdate] = useState(edit);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setUserName(schedule.userName);
      setUserEmail(schedule.userEmail);
      setDoctor(schedule.doctor);
      setDescription(schedule.description);
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
    if (!userName || !userEmail || !doctor || !description) {
      displayErrorMessage("Preencha todos os campos!");
      return;
    }

    if (isUpdate) {
      scheduleRepository.updateSchedule(
        schedule.id,
        userName,
        userEmail,
        doctor,
        description,
        date,
        time
      );
      clearInputs();
    } else {
      const newSchedule = new Schedule({
        userName,
        userEmail,
        doctor,
        description,
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

  const clearInputs = () => {
    setIsUpdate(false);
    setUserName("");
    setUserEmail("");
    setDoctor("");
    setDescription("");
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
            style={styles.input}
            selectedValue={doctor}
            onValueChange={setDoctor}
          >
            <Picker.Item label="Selecione um médico" value="" />
            <Picker.Item label="Dr. João" value="Dr. João" />
            <Picker.Item label="Dr. José" value="Dr. José" />
            <Picker.Item label="Dr. Maria" value="Dr. Maria" />
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.dateTime}>
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(_, selectedDate) => {
                setDate(selectedDate);
              }}
            />
            <DateTimePicker
              value={time}
              mode="time"
              display="default"
              onChange={(_, selectedTime) => {
                setTime(selectedTime);
              }}
            />
          </View>
          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}
          <TouchableOpacity onPress={handleScheduleAction}>
            {isUpdate ? (
              <Text style={styles.button}>Atualizar</Text>
            ) : (
              <Text style={styles.button}>Agendar</Text>
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