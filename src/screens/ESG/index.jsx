import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import Title from '../../components/Title'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import ESGComponents from '../../components/ESGComponents'


export default function ESG() {

  const navigation = useNavigation()



  return (
    <View style={styles.mainContainer}>


      <ScrollView style={styles.infoContainer}>

        <Title style={styles.title} title="ESG" />
        <Text style={styles.title}>Governança ambiental, social e corporativa.</Text>
        <Image
            style={{ width: 320, height: 200, borderRadius: 10, alignSelf: "center", margin: 10 }}
            source={require("../../../assets/images/ESG.jpg")}
          />
        <View style={styles.infoContainer}>
          <Text style={styles.subtitle}>O que é ESG?</Text>
          <Text style={styles.text}>ESG é a sigla para Environmental, Social and Governance, que em português significa Ambiental, Social e Governança. ESG é um conjunto de práticas que as empresas adotam para atender a critérios ambientais, sociais e de governança corporativa.</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.subtitle}>ESG na BCare</Text>
          <Text style={styles.text}>Na BCare, acreditamos que a sustentabilidade é um fator fundamental para o sucesso de qualquer negócio. Por isso, adotamos práticas de ESG em todas as nossas operações, garantindo que nossas ações tenham um impacto positivo no meio ambiente, na sociedade e na governança corporativa.</Text>

        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.subtitle}>Veja os detalhes do ESG abaixo:</Text>
          <ESGComponents />
        </View>

      </ScrollView>

    </View>
  )
}