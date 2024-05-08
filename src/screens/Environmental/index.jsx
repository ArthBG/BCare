import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'


export default function Environmental() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.title}>Environmental Clinic</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compromisso Ambiental</Text>
        <Text style={styles.sectionText}>
          Na Clínica de Agendamento, estamos comprometidos com a proteção do meio ambiente e a promoção da sustentabilidade em todas as nossas operações e práticas. Valorizamos a saúde não apenas dos nossos pacientes, mas também do planeta.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Práticas Sustentáveis</Text>
        <Text style={styles.sectionText}>
          Redução de Resíduos: Implementamos estratégias para reduzir o uso de materiais descartáveis e adotamos práticas de reciclagem e compostagem.
          Eficiência Energética: Utilizamos tecnologias e equipamentos energeticamente eficientes para minimizar nosso consumo de energia.
          Transporte Sustentável: Incentivamos o uso de transporte público, bicicletas ou carros compartilhados pelos nossos funcionários e pacientes.
          Preservação da Água: Adotamos medidas para reduzir o consumo de água e promovemos o uso consciente desse recurso vital.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Políticas Ambientais</Text>
        <Text style={styles.sectionText}>
          Certificações Sustentáveis: Buscamos certificações ambientais reconhecidas que validem nossos esforços em prol da sustentabilidade.
          Educação e Conscientização: Promovemos a conscientização ambiental entre os nossos colaboradores, pacientes e comunidade local.
          Parcerias com Fornecedores Sustentáveis: Preferimos colaborar com fornecedores que compartilham nosso compromisso com práticas sustentáveis.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Impacto Positivo na Comunidade</Text>
        <Text style={styles.sectionText}>
          Além de cuidar do meio ambiente, procuramos ter um impacto positivo na comunidade onde estamos inseridos. Estamos abertos ao diálogo com stakeholders e engajados em iniciativas sociais que promovam o bem-estar geral.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Environmental Clinic</Text>
      </View>
    </ScrollView>
  );
}

