import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import styles from "./styles";

export default function Detailing({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
  const [show, setShow] = useState(false);
  const [showT, setShowT] = useState(false);
  const [mode, setMode] = useState("date");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const onChangeT = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowT(false);
    setTime(currentTime);
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
  const convertDataInPTBR = (data) => {
    const date = new Date(data);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <View style={styles.container}>
      
      {/* <View style={styles.datePickerContainer}>
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
    </View>
  );
}
