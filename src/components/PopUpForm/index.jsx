import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import axios from 'axios';

import styles from './styles.js'

const PopUp = ({ doctor, data, time, exitPopUp, clearInps }) => {
  const navigation = useNavigation();
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSend = async () => {
    const resposeDoctor = await axios.get(`${apiURL}/doctors/name/${doctor}`);
    if (!name || !email) {
      alert('Preencha todos os campos')
      return
    }
    const response = await axios.get(`${apiURL}/users/${name}/${email}`);
    if (response.data.status == 'success') {
      const userAlreadyExists = response.data.user;
      try {
        await axios.post(`${apiURL}/scheduling`, {
          user_id: userAlreadyExists[0].id,
          doctor_id: resposeDoctor.data.doctor[0].id,
          date: data,
          time: time
        });
        await AsyncStorage.setItem('@asyncStorage:user', JSON.stringify(userAlreadyExists[0]));
        alert('Agendamento cadastrado com sucesso');
        navigation.navigate('Agenda');
        exitPopUp(false);
        clearInps();
      } catch (error) {
        alert('Erro ao cadastrar agendamento');
      }
    } else {
      try {
        const response = await axios.post(`${apiURL}/users`, {
          name,
          email
        })
        await axios.post(`${apiURL}/scheduling`, {
          user_id: response.data.user.id,
          doctor_id: resposeDoctor.data.doctor[0].id,
          date: data,
          time: time
        });
        await AsyncStorage.setItem('@asyncStorage:user', JSON.stringify(response.data.user));
        alert('Agendamento cadastrado com sucesso');
        navigation.navigate('Agenda');
        exitPopUp(false);
        clearInps();

      } catch (error) {
        if (error.response.data.message == "Email já cadastrado") {
          alert('Email já cadastrado')
        }
        else {
          alert('Erro ao cadastrar usuário')
        }
      }
    }


  }

  return (
    <View style={styles.screen}>

      <View style={styles.container}>
        <Text style={styles.title}>Insira seus dados</Text>
        <View>
          <TextInput style={styles.inp} onChangeText={setName} placeholder="Nome" />
          <TextInput style={styles.inp} onChangeText={setEmail} placeholder="Email" />
          <TouchableOpacity onPress={() => handleSend()} style={styles.button}>
            <Text>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PopUp