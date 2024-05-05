import { useEffect, useState } from 'react'
import scheduleRepository from '../../models/agendamentos/ScheduleRepository'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'

export default function ScheduleList({route}) {
    const { schedule } = route.params;
    const navigation = useNavigation();
    const [schedulesList, setSchedules] = useState(scheduleRepository.getAll());

    useEffect(() => {
        setSchedules(scheduleRepository.getAll());
    }, []);

    const handleDelete = (id) => {
        scheduleRepository.removeSchedule(id);
        setSchedules(scheduleRepository.getAll());
    };

    const handleUpdate = () => {
        navigation.navigate('Agendamento', { schedule: schedule, edit: true })
    };

    return (
        <View style={styles.container}>
            <ScrollView>
            {/* <Text>{schedule.userName}</Text>
                            <Text>{schedule.userEmail}</Text> */}
            {
                schedulesList.length > 0 ?
                schedulesList.map((schedule) => (
                        <View key={schedule.id}>
                            <View style={{ marginBottom: 70 }}>
                            <View style={styles.scheduleContainer}>   
                            <View style={styles.scheduleDoctorImage}>
                                <Text>Imagem</Text>
                            </View>
                            <Text style={styles.doctorText}>{schedule.doctor}</Text>
                            <Text style={styles.doctorSubText}>{schedule.specialist}</Text>
                            </View>
                            
                            <View style={styles.scheduleContainerSchedules}>
                            <Text style={styles.Title}>Consultas marcadas</Text>
                            <View style={styles.textsContainer}>
                            <Text style={styles.texts}>• Dia: {schedule.date}</Text>
                            <Text style={styles.texts}>Horário: {schedule.time}</Text>
                            </View>
                            </View>
                            <View style={styles.scheduleContainerBtns}>
                            <TouchableOpacity onPress={() => handleDelete(schedule.id)} style={styles.btnremove}>
                                <Text style={styles.texts}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleUpdate} style={styles.btnedit}>
                                <Text style={styles.texts}>Alterar</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    ))
                    :
                    <View>
                        <Text>Nenhum agendamento realizado</Text>
                    </View>
            }
            </ScrollView>
        </View>
    )
}