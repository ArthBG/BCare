import { View, Text } from 'react-native'
import Title from '../../components/Title'
import styles from './styles'

export default function ESG() {
  return (
    <View style={styles.mainContainer}>
        <Title title="ESG" />
        <Text style={styles.title}>Governança ambiental, social e corporativa.</Text>

        <View style={styles.infoContainer}>
            <Text style={styles.subtitle}>O que é ESG?</Text>
            <Text style={styles.text}>ESG é a sigla para Environmental, Social and Governance, que em português significa Ambiental, Social e Governança. ESG é um conjunto de práticas que as empresas adotam para atender a critérios ambientais, sociais e de governança corporativa.</Text>
        </View>


    </View>
  )
}