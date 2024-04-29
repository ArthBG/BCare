import Schedule from "../../models/Schedule";
import scheduleRepository from "../../models/ScheduleRepository";
import { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

// ler todas as informações do formulário com a possibilidade de editar ou excluir

export default function ScheduleForm({ route }) {
    const { schedule, edit } = route.params;
    console.log(schedule, edit);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [specialist, setSpecialist] = useState("");
    const [doctor, setDoctor] = useState("");
    const [isUpdate, setIsUpdate] = useState(edit);
    const [errorMessage, setErrorMessage] = useState("");
    
    const navigation = useNavigation();
    
    useEffect(() => {
        if (edit) {
        schedule.map = (schedule) => {
            setUserName(schedule.userName);
            setUserEmail(schedule.userEmail);
            setSpecialist(schedule.specialist);
            setDoctor(schedule.doctor);
        }
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
        );
        } else {
        scheduleRepository.addSchedule(
            new Schedule(userName, userEmail, specialist, doctor),
        );
        }
    
        navigation.navigate("ScheduleList");
    };
    
    const clearInputs = () => {
        setUserName("");
        setUserEmail("");
        setSpecialist("");
        setDoctor("");
    };
    
    return (
        <ScrollView style={styles.container}>
        <Text style={styles.title}>
            {isUpdate ? "Atualizar Consulta" : "Agendar Consulta"}
        </Text>
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
            style={styles.input}
        >
            <Picker.Item label="Selecione um especialista" value="" />
            <Picker.Item label="Cardiologista" value="Cardiologista" />
            <Picker.Item label="Dermatologista" value="Dermatologista" />
            <Picker.Item label="Ortopedista" value="Ortopedista" />
        </Picker>
        <TextInput
            style={styles.input}
            placeholder="Médico"
            value={doctor}
            onChangeText={setDoctor}
        />
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={handleScheduleAction}
        >
            <Text style={styles.buttonText}>
            {isUpdate ? "Atualizar" : "Agendar"}
            </Text>
        </TouchableOpacity>
        </ScrollView>
    );
}


