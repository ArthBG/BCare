// Desc: ESGComponents component
// Se for usar esse componente em outro lugar, 
// basta add uma padding de 20 no container do ESGComponents para que ele fique centralizado.

import { View, Text } from 'react-native'
import React from 'react'
import ESGCircle from '../../components/ESGCircle'
import styles from './styles'
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons'

const ESGComponents = () => {
    return (
        <View style={styles.ESGContainer}>
            <ESGCircle color="#8ba900" text="Environmental" style={{ top: 0, left: 0 }} route={''} icon={<Entypo name="leaf" size={24} color="white" />} />
            <ESGCircle color="#38b4bc" text="Social" style={{ top: 0, right: 0 }} route={''}  icon={<Ionicons name="people" size={24} color="white" />}/>
            <ESGCircle color="#d2953b" text="Governance" style={{ bottom: 0, alignSelf: 'center' }} route={''} icon={<FontAwesome name="institution" size={24} color="white" />}/>
        </View>
    )
}

export default ESGComponents