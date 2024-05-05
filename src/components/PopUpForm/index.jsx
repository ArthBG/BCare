import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

import styles from './styles.js'

const PopUp = ({ doctor, data, time }) => {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSend = async () => {
    if (!name || !email) {
      alert('Preencha todos os campos')
      return
    }
    const response = await axios.get(`${apiURL}/users/${name}/${email}`);
    if (response.data.status == 'success') {
      const userAlreadyExists = response.data.user;
      const resposeDoctor = await axios.get(`${apiURL}/doctors/name/${doctor}`);
      try {
        const [month, day, year] = data.split('/');
        var formattedDate = `${day}/${month}/${year}`;
        await axios.post(`${apiURL}/scheduling`, {
          user_id: userAlreadyExists[0].id,
          doctor_id: resposeDoctor.data.doctor[0].id,
          date: formattedDate,
          time: time
        });
        alert('Agendamento cadastrado com sucesso')
      } catch (error) {
        console.log(userAlreadyExists[0].id, resposeDoctor.data.doctor[0].id, formattedDate, time);
        alert('Erro ao cadastrar agendamento')
        console.log(error);
      }


    } else {
      try {
        await axios.post(`${apiURL}/users`, {
          name,
          email
        })
        alert('Usuário cadastrado com sucesso')

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