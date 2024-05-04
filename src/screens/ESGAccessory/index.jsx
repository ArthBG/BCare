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
  const [sliderValue, setSliderValue] = useState(0.5);



  useEffect(() => {
    try {
      if (isEnabled) {
        console.log('Luz ligada');
      } else {
        setSliderValue(0.5);
        console.log('Luz desligada');
      }
    } catch (error) {
      console.error(error);
    }


  }, [isEnabled, sliderValue]);


  return (
    <View style={styles.containerPage}>
      <View {...events} style={styles.containerModel}>
        <Canvas>
          <OrbitControls enablePan={false} enableZoom={false} minDistance={1000} />
          <directionalLight position={[0, 5, 5]} args={['#fff', sliderValue]} />
          <directionalLight scale={0} position={[0, 0, -20]} args={['#fff', sliderValue]} />
          <Suspense fallback={null}>
            <ModelClinic />
          </Suspense>
        </Canvas>
      </View>


      <View style={styles.container}>
        <ToggleSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
        {
          isEnabled ? <Text style={styles.text}>Luz ligada : {sliderValue.toFixed(1)}</Text> : <Text style={styles.text}>Luz desligada</Text>
        }

      </View>

      {
        isEnabled && (
          <View style={styles.container}>
            <SliderInput Value={setSliderValue} />
          </View>
        )
      }



    </View>
  )
}