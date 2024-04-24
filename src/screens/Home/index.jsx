import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.textPrincipal}>Tela Inicial</Text>
      </View>
      <ScrollView style={{ margin: 0 }}>
        <View style={{ margin: "auto", alignItems: "center" }}>
          <Image
            style={styles.image}
            source={require("../../../assets/logovdd.png")}
          ></Image>
        </View>
        <Text style={styles.textInicio}>Bem-vindo à BCare</Text>
        <Text style={styles.textInicio2}>Sua Clínica Online de Confiança!</Text>
        <Text style={styles.text}>
          Agende consultas médicas online de forma simples e rápida. Conecte-se
          com médicos qualificados em diversas especialidades através de
          consultas virtuais de alta qualidade, tudo isso sem sair de casa.
        </Text>
        <Text style={styles.textInicio3}>Por que escolher a BCare?</Text>

        <Text style={styles.item1}>• Agendamento online simplificado</Text>
        <Text style={styles.item2}>• Consultas virtuais de qualidade</Text>
        <Text style={styles.item3}>• Variedade de especialidades médicas</Text>
        <Text style={styles.item4}>• Conveniência e acessibilidade</Text>
        <Text style={styles.item5}>• Atendimento personalizado</Text>
      </ScrollView>
    </View>
  );
}
