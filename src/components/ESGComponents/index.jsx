import { View, Text } from 'react-native'
import React from 'react'
import ESGCircle from '../../components/ESGCircle'
import styles from './styles'

const ESGComponents = () => {
    return (
        <View style={styles.ESGContainer}>
            <ESGCircle color="#8ba900" text="Environmental" style={{ top: 0, left: 0 }} />
            <ESGCircle color="#38b4bc" text="Social" style={{ top: 0, right: 0 }} />
            <ESGCircle color="#d2953b" text="Governance" style={{ bottom: 0, alignSelf: 'center' }} />
        </View>
    )
}

export default ESGComponents