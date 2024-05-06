import { useEffect, useState } from "react";
import scheduleRepository from "../../models/agendamentos/ScheduleRepository";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export default function ScheduleList({ route }) {
  const { schedule } = route.params;
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const [schedules, setSchedules] = useState(null);
  const apiURL = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    loadingStoredData();
  }, []);

  const loadingStoredData = async () => {
    const alreadyUser = await AsyncStorage.getItem('@asyncStorage:user');
    if (!alreadyUser) {
      alert('Usuário não encontrado');
    }
    setUser(JSON.parse(alreadyUser));
    try {
      const response = await axios.get(`${apiURL}/scheduling/user/${user.id}`);
      setSchedules(response.data.scheduling);
    } catch (error) {
      console.error(error);
      alert('Erro ao carregar agendamentos');
    }

  }

  const handleDelete = (id) => {
    scheduleRepository.removeSchedule(id);
  };

  const handleUpdate = () => {
    navigation.navigate("Agendamento", { schedule: schedule, edit: true });
  };




  return (
    <View style={styles.container}>
      <ScrollView>
        {schedules ? schedules.map((schedule, index) => {
          return (
            <View key={schedule.id}>
              <View style={{ marginBottom: 70 }}>
                <View style={styles.scheduleContainer}>
                  <View style={styles.scheduleDoctorImage}>
                    <Image width={100} height={100} style={styles.doctorImage} source={{ uri: schedule.picture }} />
                  </View>
                  <Text style={styles.doctorText}>{schedule.doctor_name}</Text>
                  <Text style={styles.doctorSubText}>{schedule.specialty}</Text>
                </View>

                <View style={styles.scheduleContainerSchedules}>
                  <Text style={styles.Title}>Consultas marcadas</Text>
                  <View style={styles.textsContainer}>
                    <Text style={styles.texts}>• Dia: {schedule.date}</Text>
                    <Text style={styles.texts}>Horário: {schedule.time}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }) : <Text style={styles.Title}>Nenhum agendamento encontrado</Text>}
      </ScrollView>
    </View>
  );
}
