import { ContactShadows, Environment, Float, OrbitControls, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'

function FloatingShape({ position, children, ...props }: any) {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} {...props}>
        {children}
      </mesh>
    </Float>
  )
}

function Scene3D() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 6]
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#ff0000" intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#0000ff" intensity={0.5} />

          {/* Environment */}
          <Environment preset="city" />

          {/* Floating Shapes */}
          <FloatingShape position={[-2, 2, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={hovered === 'box' ? '#ff6b6b' : '#4ecdc4'}
              roughness={0.3}
              metalness={0.8}
            />
          </FloatingShape>

          <FloatingShape position={[2, -1, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial
              color={hovered === 'sphere' ? '#ff9f43' : '#6c5ce7'}
              roughness={0.2}
              metalness={0.9}
            />
          </FloatingShape>

          <FloatingShape position={[0, -2, -1]}>
            <torusGeometry args={[0.8, 0.3, 16, 100]} />
            <meshStandardMaterial
              color={hovered === 'torus' ? '#a55eea' : '#26de81'}
              roughness={0.1}
              metalness={1}
            />
          </FloatingShape>

          {/* Main Title */}
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Text
              position={[0, 1, 0]}
              fontSize={0.7}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              I am Vu Tran
            </Text>
            
          </Float>

          {/* Interactive Elements */}
          <mesh
            position={[-2, 2, 0]}
            onPointerOver={() => setHovered('box')}
            onPointerOut={() => setHovered(null)}
            scale={hovered === 'box' ? 1.1 : 1}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial transparent opacity={0} />
          </mesh>

          <mesh
            position={[2, -1, 0]}
            onPointerOver={() => setHovered('sphere')}
            onPointerOut={() => setHovered(null)}
            scale={hovered === 'sphere' ? 1.1 : 1}
          >
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial transparent opacity={0} />
          </mesh>

          <mesh
            position={[0, -2, -1]}
            onPointerOver={() => setHovered('torus')}
            onPointerOut={() => setHovered(null)}
            scale={hovered === 'torus' ? 1.1 : 1}
          >
            <torusGeometry args={[0.8, 0.3, 16, 100]} />
            <meshStandardMaterial transparent opacity={0} />
          </mesh>

          {/* Contact Shadows */}
          <ContactShadows
            position={[0, -3, 0]}
            opacity={0.4}
            scale={20}
            blur={2}
            far={4.5}
          />

          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene3D