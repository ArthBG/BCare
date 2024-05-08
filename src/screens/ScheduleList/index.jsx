import { useEffect, useState } from "react";
import React, { useCallback } from "react";
import scheduleRepository from "../../models/agendamentos/ScheduleRepository";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

export default function ScheduleList() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [schedules, setSchedules] = useState([]);
  const apiURL = process.env.EXPO_PUBLIC_API_URL;

  useFocusEffect(
    React.useCallback(() => {
      loading();
    }, [])
  );

  useEffect(() => {
    loading();
  }, []);

  useEffect(() => {
    if (user) {
      loadSchedules();
    }
  }, [user]);

  const loading = async () => {
    const alreadyUser = await AsyncStorage.getItem("@asyncStorage:user");
    if (alreadyUser) {
      setUser(JSON.parse(alreadyUser));
    } else {
      alert("Usuário não encontrado");
    }
  };

  const loadSchedules = async () => {
    try {
      const response = await axios.get(`${apiURL}/scheduling/user/${user.id}`);
      setSchedules(response.data.scheduling);
    } catch (error) {
      console.error(error);
      alert("Erro ao carregar agendamentos");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiURL}/scheduling/${id}`, {

      });
      await loadSchedules();
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  const handleUpdate = (schedule) => {
    navigation.navigate('Agendamento', { schedule_edit: schedule })
  }

  const formatDate = (date) => {
    const dateArray = date.split("-");
    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {schedules.length > 0 ? (
          schedules.map((schedule) => (
            <View key={schedule.id_agendamento}>
              <View style={{ marginBottom: 70 }}>
                <View style={styles.scheduleContainer}>
                  <View style={styles.scheduleDoctorImage}>
                    <Image
                      width={100}
                      height={100}
                      style={styles.doctorImage}
                      source={{ uri: schedule.picture }}
                    />
                  </View>
                  <Text style={styles.doctorText}>{schedule.doctor_name}</Text>
                  <Text style={styles.doctorSubText}>{schedule.specialty}</Text>
                </View>
                <View style={styles.scheduleContainerSchedules}>
                  <Text style={styles.Title}>Consultas marcadas</Text>
                  <View style={styles.textsContainer}>
                    <Text style={styles.texts}>
                      {formatDate(schedule.date)}
                    </Text>
                    <Text style={styles.texts}>Horário: {schedule.time}</Text>
                  </View>
                </View>
                <View>
                  <View style={styles.scheduleContainerBtns}>
                    <TouchableOpacity
                      style={styles.btnremove}
                      onPress={() => handleDelete(schedule.id_agendamento)}
                    >
                      <Text style={styles.textBtn}>Remover</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnremove} onPress={() => handleUpdate(schedule)}>
                      <Text style={styles.textBtn}>Editar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.Title}>Nenhum agendamento encontrado</Text>
        )}
      </ScrollView>
    </View>
  );
}
