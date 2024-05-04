import { View, Text, Image } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";
import { Members } from "../../data/Member";
import { ScrollView } from "react-native-gesture-handler";
export default function Sobrenos() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Title title="Bcare" />
      <View style={styles.containerColumn}>
        <Image src=""/>
        <View style={styles.containerColumnBcare}>
          <Text style={styles.textBcare}>
          Bem-vindo à BCare, sua Clínica Online de Confiança! Na BCare, estamos comprometidos em proporcionar uma experiência médica moderna e acessível, adaptada para atender às demandas de um mundo em constante movimento. Nossa missão é tornar o acesso aos cuidados de saúde mais simples e conveniente do que nunca, oferecendo consultas médicas online de alta qualidade, conectando você com médicos qualificados em diversas especialidades, tudo isso sem que você precise sair de casa.
          </Text>
          </View>
          <Text style={styles.textBcare}>
          Na BCare, buscamos revolucionar a maneira como as pessoas acessam os serviços de saúde. Nosso principal objetivo é oferecer uma plataforma intuitiva e eficiente para o agendamento de consultas médicas online, simplificando o processo e economizando tempo para nossos pacientes. Além disso, estamos empenhados em fornecer consultas virtuais de qualidade, garantindo que nossos pacientes recebam o mesmo nível de cuidado e atenção que teriam em uma consulta presencial.
            </Text>
        <Text style={styles.text}>
          Somos um grupo de profissionais apaixonados por tecnologia e
          inovação. Nossa missão é criar soluções criativas e eficazes para
          problemas complexos, sempre com foco na qualidade e na satisfação do
          cliente. Estamos sempre em busca de novos desafios e oportunidades de
          aprendizado, e estamos comprometidos em entregar o melhor resultado
          possível em todos os nossos projetos.
        </Text>
        <Text style={styles.text}>
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
