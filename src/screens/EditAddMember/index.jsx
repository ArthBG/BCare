import React, { useState } from "react";
import styles from "./styles";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

export default function EditAddMember({ route, navigation }) {
  const [name, setName] = useState(route.params ? route.params.name : "");
  const [age, setAge] = useState(route.params ? route.params.name : "");
  const [image, setImage] = useState(route.params ? route.params.name : "");
  const [description, setDescription] = useState(
    route.params ? route.params.description : ""
  );
  const [cargo, setCargo] = useState(route.params ? route.params.cargo : "");

  const handleSubmit = () => {
    if (route.params) {
      memberRepository.editMember({ name, age, image, cargo, description });
    } else {
      memberRepository.addMember({ name, age, image, cargo, description });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Idade:</Text>
      <TextInput style={styles.input} value={age} onChangeText={setAge} />

      <Text style={styles.label}>Imagem: (bota o link da imagem)</Text>
      <TextInput style={styles.input} value={cargo} onChangeText={setCargo} />

      <Text style={styles.label}>Cargo:</Text>
      <TextInput style={styles.input} value={cargo} onChangeText={setCargo} />

      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
}
