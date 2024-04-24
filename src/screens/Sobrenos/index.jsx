import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import Members from "../../data/Member";
import memberRepository from "../../models/membros/MembrosRepository";
import { useNavigation } from "@react-navigation/native";
export default function Sobrenos({ route }) {
  /* const navigation = useNavigation();
  const { data } = route.params; 

  const editMember = () => {
    navigation.navigate("EditMember", { member: data, edit: true });
  };

  const deleteMember = () => {
    memberRepository.removeMember(data.id);
    navigation.goBack();
  };*/

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.textPrincipal}>Sobre Nós</Text>
      </View>
      <ScrollView>
        <Image source={require("../../../assets/pi.jpg")} style={styles.imgGrupo} />
        <Text style={styles.text}>
          Somos um grupo de desenvolvedores apaixonados por tecnologia e
          inovação. Nossa missão é criar soluções criativas e eficazes para
          problemas complexos, sempre com foco na qualidade e na satisfação do
          cliente. Estamos sempre em busca de novos desafios e oportunidades de
          aprendizado, e estamos comprometidos em entregar o melhor resultado
          possível em todos os nossos projetos.
        </Text>

        {Members ? (
          Members.map((member, id) => (
            <View key={id} style={styles.containerMember}>
              <Image style={styles.img} source={member.image} />
              <Text style={styles.textMember}>{member.name}</Text>
              <Text style={styles.textMember}>{member.cargo}</Text>
              <Text style={styles.textMember}>{member.descripition}</Text>
              {/* <View style={styles.buttons}>
                <TouchableOpacity onPress={editMember}>
                  <Text style={styles.editButton}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteMember}>
                  <Text style={styles.deleteButton}>Excluir</Text>
                </TouchableOpacity>
              </View> */}
            </View>
          ))
        ) : (
          <Text style={styles.text}>Sem membros para exibir</Text>
        )}
      </ScrollView>
    </View>
  );
}
