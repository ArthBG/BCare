import { Gltf, useGLTF } from '@react-three/drei/native'
import Model from "../../../assets/models/hospital.glb"


export function ModelClinic(props) {
  const { nodes, materials } = useGLTF(Model)
  return (
    <group rotation={[0.3, 4.5, 0]} {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 876.868, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Materiais018_0.geometry}
            material={materials['Materiais.018']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Materiais016_0.geometry}
            material={materials['Materiais.016']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Materiais004_0.geometry}
            material={materials['Materiais.004']}
          />
        </group>
        <group
          position={[-1172.088, 876.868, -4811.071]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material_0.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Materiais025_0.geometry}
            material={materials['Materiais.025']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Materiais011_0.geometry}
            material={materials['Materiais.011']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Materiais006_0.geometry}
            material={materials['Materiais.006']}
          />
        </group>
        <group position={[0, -99.355, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_Materiais_0.geometry}
            material={materials.Materiais}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_Materiais002_0.geometry}
            material={materials['Materiais.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_Materiais027_0.geometry}
            material={materials['Materiais.027']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_Materiais028_0.geometry}
            material={materials['Materiais.028']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_Materiais013_0.geometry}
            material={materials['Materiais.013']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_Materiais003_0.geometry}
            material={materials['Materiais.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_Materiais030_0.geometry}
            material={materials['Materiais.030']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_Materiais029_0.geometry}
            material={materials['Materiais.029']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_Materiais001_0.geometry}
            material={materials['Materiais.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_Materiais014_0.geometry}
            material={materials['Materiais.014']}
          />
        </group>
        <group position={[0, 1012.179, -4833.541]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo002_Materiais009_0.geometry}
            material={materials['Materiais.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo002_Materiais022_0.geometry}
            material={materials['Materiais.022']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo002_Materiais021_0.geometry}
            material={materials['Materiais.021']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo002_Materiais012_0.geometry}
            material={materials['Materiais.012']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo002_Materiais010_0.geometry}
            material={materials['Materiais.010']}
          />
        </group>
        <group
          position={[-1176.731, 1012.179, 12.023]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo003_Materiais007_0.geometry}
            material={materials['Materiais.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo003_Materiais020_0.geometry}
            material={materials['Materiais.020']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo003_Materiais019_0.geometry}
            material={materials['Materiais.019']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo003_Materiais026_0.geometry}
            material={materials['Materiais.026']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo003_Materiais015_0.geometry}
            material={materials['Materiais.015']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cubo003_Materiais008_0.geometry}
            material={materials['Materiais.008']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro_Materiais033_0.geometry}
          material={materials['Materiais.033']}
          position={[163.979, 34.127, 268.647]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={70.962}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro001_Materiais034_0.geometry}
          material={materials['Materiais.034']}
          position={[163.979, 34.127, -1045.864]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={70.962}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro002_Materiais035_0.geometry}
          material={materials['Materiais.035']}
          position={[163.979, 34.127, -3882.436]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={70.962}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro003_Materiais036_0.geometry}
          material={materials['Materiais.036']}
          position={[163.979, 34.127, -6414.791]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={70.962}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro004_Materiais037_0.geometry}
          material={materials['Materiais.037']}
          position={[-1447.944, 34.127, -6414.791]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={70.962}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo_Materiais038_0.geometry}
          material={materials['Materiais.038']}
          position={[0, 808.939, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo004_Materiais023_0.geometry}
          material={materials['Materiais.023']}
          position={[347.836, 620.031, -2362.656]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={45.437}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo005__0.geometry}
          material={materials['Cubo.005__0']}
          position={[-2655.622, 79.185, 261.506]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Texto_Materiais024_0.geometry}
          material={materials['Materiais.024']}
          position={[325.001, 653.921, 115.43]}
          rotation={[-2.543, 1.567, 2.549]}
          scale={217.716}
        />
      </group>
    </group>
  )
}

useGLTF.preload(Model)