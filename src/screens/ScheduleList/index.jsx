import { useEffect, useState } from 'react'
import scheduleRepository from '../../models/agendamentos/ScheduleRepository'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

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

    const handleUpdate = (id) => {
        navigation.navigate('Agendamento', { schedule: schedule, edit: true })
    };

    return (
        <View>
            {
                schedulesList.length > 0 ?
                schedulesList.map((schedule) => (
                        <View key={schedule.id}>
                            <View style={styles.scheduleContainer}>   
                            <View style={styles.scheduleDoctorImage}>
                                <Text>Imagem</Text>
                            </View>
                            <Text style={styles.doctorText}>{schedule.doctor}</Text>
                            </View>
                            <Text>{schedule.userName}</Text>
                            <Text>{schedule.userEmail}</Text>
                            <Text>{schedule.date}</Text>
                            <Text>{schedule.time}</Text>
                            <TouchableOpacity onPress={() => handleDelete(schedule.id)}>
                                <Text>Remover</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleUpdate(schedule.id)}>
                                <Text>Alterar</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                    :
                    <View>
                        <Text>Nenhum agendamento cadastrado</Text>
                    </View>
            }
        </View>
    )
}