import { View, Text, Image } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";
import { Members } from "../../data/Member";
export default function Sobrenos() {
  return (
    <View style={styles.container}>
      <Title title="Sobre-nós" />
      <View style={styles.containerColumn}>
        <Image src=""/>
        <Text style={styles.text}>
          Somos um grupo de desenvolvedores apaixonados por tecnologia e
          inovação. Nossa missão é criar soluções criativas e eficazes para
          problemas complexos, sempre com foco na qualidade e na satisfação do
          cliente. Estamos sempre em busca de novos desafios e oportunidades de
          aprendizado, e estamos comprometidos em entregar o melhor resultado
          possível em todos os nossos projetos.
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
              <Text style={styles.textMember}>
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

    </View>
  );
}
