import { View, Text } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';

const SliderInput = ({ Value }) => {
    return (
        <Slider
            style={{ width: 400, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#3e3e3e"
            maximumTrackTintColor="#767577"
            thumbTintColor="#bb0000"
            onValueChange={Value}
        />
    )
}

export default SliderInput