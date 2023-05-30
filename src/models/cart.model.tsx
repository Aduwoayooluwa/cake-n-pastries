import React from 'react'
import { Html, OrbitControls, RandomizedLight, Text, useTexture } from '@react-three/drei'
type Props = {
    img?: string
}

export const CartScene = (props: Props) => {
    //const colorMap = useTexture(props.img)
    return (
        <>      
            <ambientLight  intensity={0.2} />
            <directionalLight />
            <mesh castShadow scale={1.5}>
            
            <sphereGeometry  />
            <meshStandardMaterial />
            <OrbitControls 
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI - Math.PI / 6}
                enablePan={false} enableZoom={false}/>

            <Html position={[0, 0, 0]} center>
                    <div
                    style={{
                        fontSize: '2em',
                        color: 'black', 
                    }}
                    >
                    0 {/* Replace with your dynamic variable */}
                    </div>
                </Html>
            </mesh>
    </>
    )
}

export default CartScene