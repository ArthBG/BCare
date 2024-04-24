import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import styles from "./styles";

import scheduleRepository from "../../models/ScheduleRepository";

export default function Detailing({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
  const [show, setShow] = useState(false);
  const [showT, setShowT] = useState(false);
  const [mode, setMode] = useState("date");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const editSchedule = () => {
    navigation.navigate("EditSchedule", { schedule: data, edit: true });
  };

  const deleteSchedule = () => {
    scheduleRepository.removeSchedule(data.id);
    navigation.goBack();
  };

  const convertDataInPTBR = (data) => {
    const date = new Date(data);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.text}>{data.userName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>E-mail:</Text>
          <Text style={styles.text}>{data.userEmail}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Descrição:</Text>
          <Text style={styles.text}>{data.description}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Data:</Text>
          <Text style={styles.text}>{convertDataInPTBR(data.date)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Hora:</Text>
          <Text style={styles.text}>{data.time}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={editSchedule}>
          <Text style={styles.editButton}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteSchedule}>
          <Text style={styles.deleteButton}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
