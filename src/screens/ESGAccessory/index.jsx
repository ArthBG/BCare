import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ToggleSwitch from '../../components/ToggleSwitch'
import styles from './styles'

export default function ESGAccessory() {
    return (
        <View>
            <Text>ESGAccessory</Text>
            {/* Pravel */}
            {/* <View>
        <ModelClinic />
      </View> */}















            {/* Fervas  */}

            <View style={styles.container}>
                <ToggleSwitch />
                <Text style={styles.text}>Luz</Text>
            </View>




        </View>
    )
}