import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from './styles'


export default function Social() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.title}>BCare Social Clinic</Text>
      <Image
            style={{ width: 320, height: 200, borderRadius: 10, alignSelf: "center", margin: 10 }}
            source={require("../../../assets/images/socialclinic.jpeg")}
          />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compromisso com a Comunidade</Text>
        <Text style={styles.sectionText}>
          Na ESG, estamos comprometidos em contribuir positivamente para a comunidade local e promover o bem-estar social.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acesso Equitativo à Saúde</Text>
        <Text style={styles.sectionText}>
          Atendimento Inclusivo: Garantimos que nossos serviços sejam acessíveis a todos, independentemente de origem étnica, social ou econômica.
          Programas de Assistência: Oferecemos programas de assistência e descontos para pacientes em situação de vulnerabilidade.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Diversidade e Inclusão</Text>
        <Text style={styles.sectionText}>
          Ambiente Inclusivo: Promovemos um ambiente de trabalho diversificado e inclusivo, valorizando a igualdade de oportunidades e respeito mútuo.
          Cultura de Respeito: Fomentamos uma cultura de respeito e tolerância entre funcionários, pacientes e parceiros.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educação e Conscientização</Text>
        <Text style={styles.sectionText}>
          Campanhas de Saúde: Realizamos campanhas educativas sobre saúde preventiva e conscientização sobre doenças crônicas na comunidade.
          Programas de Treinamento: Oferecemos workshops e palestras educativas abertas à comunidade sobre temas de saúde relevantes.
        </Text>
      </View>
      <Image
               style={{ width: 200, height: 200, borderRadius: 10, alignSelf: "center", margin: 10 }}
              source={require("../../../assets/logo.jpeg")} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 BCare</Text>
      </View>
    </ScrollView>
  );
}

