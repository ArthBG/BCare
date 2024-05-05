import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Members } from "../../data/Member";
import { ScrollView } from "react-native";
export default function Sobrenos() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.containerColumn}>
        <Image src=""/>
        <View style={styles.containerColumnBcare}>
    <Text style={styles.header}>
      Bem-vindo à BCare, sua Clínica Online de Confiança!
    </Text>
    <Image style={styles.image} source={require("../../../assets/logo.jpeg")} />
    <Text style={styles.textTop}>
      Na BCare, estamos comprometidos em proporcionar uma experiência médica moderna e acessível, adaptada para atender às demandas de um mundo em constante movimento. Nossa missão é tornar o acesso aos cuidados de saúde mais simples e conveniente do que nunca, oferecendo consultas médicas online de alta qualidade, conectando você com médicos qualificados em diversas especialidades, tudo isso sem que você precise sair de casa.
    </Text>
  </View>
  <Image
    style={{ width: 330, height: 300, borderRadius: 10}}
    source={require("../../../assets/images/hospitalmark.webp")}
  />
  <Text style={styles.textTop}>
    Somos um grupo de profissionais apaixonados por tecnologia e inovação. Nossa missão é criar soluções criativas e eficazes para problemas complexos, sempre com foco na qualidade e na satisfação do cliente. Estamos sempre em busca de novos desafios e oportunidades de aprendizado, e estamos comprometidos em entregar o melhor resultado possível em todos os nossos projetos.
  </Text>
  <Text style={styles.textTop}>
    Além disso, nos esforçamos para oferecer um atendimento personalizado a cada paciente, garantindo que suas necessidades individuais sejam atendidas de maneira eficaz e compassiva. Na BCare, acreditamos que todos merecem cuidados de saúde de qualidade, e estamos comprometidos em tornar essa visão uma realidade para todos os nossos pacientes.
  </Text>
      </View>

      <View style={styles.containerMembers}>
        {
          Members ? Members.map((member, index) => (
            <View key={index} style={styles.containerMember}>
               <Image
               style={styles.image}
              source={member.image}
                />
              <Text style={styles.textMemberT}>
                {member.name}
              </Text>
              <Text style={styles.textMember}>
                {member.cargo}
              </Text>
              <Text style={styles.textMember}>
                {member.descripition}
              </Text>
            </View>
          )) : (
            <Text style={styles.text}>Sem membros para exibir</Text>
          )
        }

      </View>
      </ScrollView>
    </View>
  );
}
