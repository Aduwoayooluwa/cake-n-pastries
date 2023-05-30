import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

export function Scene() {
    const gltf = useLoader(GLTFLoader, "/models/scene.gltf")
    return (
        <>
            <mesh castShadow scale={1.0} position={[-3, -1.0, -4.4]}>    
                <ambientLight />
                <OrbitControls 
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI - Math.PI / 6}
                enablePan={false} enableZoom={false}/>
                <primitive object={gltf.scene} />
            </mesh>
        </>
    )
}

export function CakeModel() {
    const group = useRef(null)
    const { nodes }: any = useGLTF('')
    return (
        <group ref={group} dispose={null}>
            <mesh castShadow geometry={nodes} receiveShadow  />
        </group>
    )
}

//useGLTF.preload('')