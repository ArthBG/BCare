// Desc: ESG Circle component
// NAO EXPORTE ESSE COMPONENT, ELE DEVE SER USADO APENAS DENTRO DO ESGComponents.

import React from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity } from 'react-native';

const ESGCircle = ({ color, text, style, route }) => {
    return (
        <View style={styles.componentContainer}>
        <TouchableOpacity style={[styles.circle, style, {backgroundColor: color}]}  onPress={() => navigation.navigate(`${route}`, {})}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
        <Text style={styles.textBelowCircle}>ESG</Text>
      </View>
    );
};

export default ESGCircle