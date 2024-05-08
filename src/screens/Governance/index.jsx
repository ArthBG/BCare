import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./styles";
import BackBtn from "../../components/backBtn";

export default function Governance() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.title}>BCare Governance Clinic</Text>
      <Image
        style={{
          width: 320,
          height: 200,
          borderRadius: 10,
          alignSelf: "center",
          margin: 10,
        }}
        source={require("../../../assets/images/govclinic.jpg")}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Princípios de Governança</Text>
        <Text style={styles.sectionText}>
          Na BCare, adotamos uma abordagem sólida de governança corporativa para
          garantir a transparência, ética e eficácia em todas as nossas práticas
          e decisões.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Transparência e Prestação de Contas
        </Text>
        <Text style={styles.sectionText}>
          Divulgação de Informações: Mantemos uma política de transparência,
          divulgando informações relevantes sobre nossas operações, desempenho e
          impacto. Relatórios Regulares: Publicamos relatórios periódicos que
          detalham nossas iniciativas, progresso e metas relacionadas à
          governança.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Comitê de Ética e Conformidade</Text>
        <Text style={styles.sectionText}>
          Comitê de Ética: Mantemos um comitê dedicado à ética e conformidade,
          responsável por garantir que nossas práticas estejam alinhadas com os
          mais altos padrões éticos. Código de Conduta: Todos os funcionários e
          parceiros são orientados por um código de conduta claro e abrangente.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Políticas Anti-Corrupção</Text>
        <Text style={styles.sectionText}>
          A Tolerância Zero à Corrupção: Implementamos políticas rigorosas de
          combate à corrupção em todas as áreas da nossa operação.
        </Text>
      </View>
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 10,
          alignSelf: "center",
          margin: 10,
        }}
        source={require("../../../assets/logo.jpeg")}
      />
      <BackBtn text={"Voltar"} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 BCare</Text>
      </View>
    </ScrollView>
  );
}
