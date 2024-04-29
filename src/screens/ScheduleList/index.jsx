import { useEffect, useState } from 'react'
import scheduleRepository from "../../models/ScheduleRepository";
import { View, Text, TouchableOpacity } from 'react-native'

export default function ScheduleList({route}) {
    const { schedule } = route.params;
    const [schedulesList, setSchedules] = useState(scheduleRepository.getAll());

    useEffect(() => {
        setSchedules(scheduleRepository.getAll());
    }, []);

    const handleDelete = (id) => {
        scheduleRepository.removeSchedule(id);
        setSchedules(scheduleRepository.getAll());
    };
    return (
        <View>
            {
                schedulesList.length > 0 ?
                schedulesList.map((schedule) => (
                        <View key={schedule.id}>
                            <Text>{schedule.userName}</Text>
                            <Text>{schedule.userEmail}</Text>
                            <Text>{schedule.specialist}</Text>
                            <Text>{schedule.doctor}</Text>
                            <TouchableOpacity onPress={() => handleDelete(schedule.id)}>
                                <Text>Remover</Text>
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