import { View, Text } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';

const SliderInput = ({ Value }) => {
    return (
        <Slider
            style={{ width: 360, height: 40 }}
            minimumValue={0.5}
            maximumValue={2}
            minimumTrackTintColor="#3e3e3e"
            maximumTrackTintColor="#767577"
            thumbTintColor="#bb0000"
            onValueChange={Value}
        />
    )
}

export default SliderInput