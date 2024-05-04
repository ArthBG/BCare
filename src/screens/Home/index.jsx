import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.head}>
          <Text style={styles.textPrincipal}>Tela Inicial</Text>
        </View>
        <View style={styles.containerall}>
          <View style={{ margin: "auto", alignItems: "center", marginBottom: 50 }}>
            <Image
              style={styles.image}
              source={require("../../../assets/logovdd.png")}
            ></Image>
          </View>
          <View style={styles.containerFirst}>
          <View style={styles.containerImage}>
          <Image style={styles.imageLoa} source={require('../../../assets/logovdd.png')} />
          </View>
          <View style={{ marginTop: 60 }}>
          <View style={{ margin: 10 }}>
          <Text style={styles.textInicio}>Bem-vindo à BCare</Text>
          <Text style={styles.textInicio2}>Sua Clínica Online de Confiança!</Text>
          <Text style={styles.text}>
            Agende consultas médicas online de forma simples e rápida. Conecte-se
            com médicos qualificados em diversas especialidades através de
            consultas virtuais de alta qualidade, tudo isso sem sair de casa.
          </Text>
          </View>
          </View>
          </View>
          <View style={styles.containerFirstt}>
            <View style={styles.containerImageAndText}>
          <View style={styles.containerImage}>
          <Image style={styles.imageLoa} source={require('../../../assets/logovdd.png')} />
          </View>
          <View style={{ position: 'absolute', left: 220}}>
          <TouchableOpacity style={styles.buttonInsider}>
            <Text style={styles.textButtonInsider}>Agendar Consulta</Text>
          </TouchableOpacity>
          </View>
          </View>
          <View style={{ marginTop: 60 }}>
          <View style={{ margin: 10 }}>
          <Text style={styles.textInicio3}>Por que escolher a BCare?</Text>
          <Text style={styles.item1}>• Agendamento online simplificado</Text>
          <Text style={styles.item2}>• Consultas virtuais de qualidade</Text>
          <Text style={styles.item3}>• Variedade de especialidades médicas</Text>
          <Text style={styles.item4}>• Conveniência e acessibilidade</Text>
          <Text style={styles.item5}>• Atendimento personalizado</Text>
          </View>
          </View>
          </View>
          <View style={styles.containerFooter}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Agendar Consulta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Consultar Agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Sobre a BCare</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}