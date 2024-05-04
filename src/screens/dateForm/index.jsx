import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Detailing({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTime(false);
    setTime(currentTime);
  };

  const showDatePicker = () => {
    setShowDate(true);
  };

  const showTimePicker = () => {
    setShowTime(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.datePickerContainer}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.datePickerText}>
            Selecione a data que deseja agendar
          </Text>
        </TouchableOpacity>
        {showDate && (
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={onDateChange}
          />
        )}
      </View>

      <TouchableOpacity onPress={showTimePicker}>
        <Text style={styles.label}>Selecione o horário do agendamento</Text>
      </TouchableOpacity>
      {showTime && (
        <DateTimePicker
          value={time}
          mode="time"
          display="spinner"
          onChange={onTimeChange}
        />
      )}
    </View>
  );
}
