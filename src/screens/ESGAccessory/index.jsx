import { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber/native';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import useControls from "r3f-native-orbitcontrols"
import { ModelClinic } from '../../components/ModelClinic';
import ToggleSwitch from '../../components/ToggleSwitch';


import styles from './styles'
import SliderInput from '../../components/SliderInput';


export default function ESGAccessory() {
  const [OrbitControls, events] = useControls();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <View style={styles.containerPage}>
      <View {...events} style={styles.containerModel}>
        <Canvas>
          <OrbitControls enablePan={false} enableZoom={false} minDistance={1000} />
          <directionalLight position={[0, 5, 5]} args={['#fff', 1.2]} />
          <Suspense fallback={null}>
            <ModelClinic />
          </Suspense>
        </Canvas>
      </View>

      < SliderInput Value={setSliderValue} />

      <View style={styles.container}>
        <ToggleSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
        <Text style={styles.text}>Luz: {sliderValue.toFixed(2)}</Text>
      </View>
    </View>
  )
}