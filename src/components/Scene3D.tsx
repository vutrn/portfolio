import { ContactShadows, Environment, Float, OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

function FloatingShape({ position, children, ...props }: any) {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} {...props}>
        {children}
      </mesh>
    </Float>
  );
}

function Scene3D() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 6],
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} color="#ff0000" intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#0000ff" intensity={0.3} />
          <pointLight position={[0, 0, -10]} color="#00ff00" intensity={0.2} />

          {/* Environment */}
          <Environment preset="forest" />

          {/* Main Floating Shapes */}
          <FloatingShape position={[-2, 2, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={hovered === "box" ? "#ff6b6b" : "#4ecdc4"}
              roughness={0.3}
              metalness={0.8}
            />
          </FloatingShape>

          <FloatingShape position={[2, -1, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial
              color={hovered === "sphere" ? "#ff9f43" : "#6c5ce7"}
              roughness={0.2}
              metalness={0.9}
            />
          </FloatingShape>

          <FloatingShape position={[0, -2, -1]}>
            <torusGeometry args={[0.8, 0.3, 16, 100]} />
            <meshStandardMaterial
              color={hovered === "torus" ? "#a55eea" : "#26de81"}
              roughness={0.1}
              metalness={1}
            />
          </FloatingShape>

          {/* Additional Small Floating Objects */}
          <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
            <mesh position={[-3.5, 0.5, -2]}>
              <coneGeometry args={[0.4, 0.8, 8]} />
              <meshStandardMaterial color="#ff6b35" roughness={0.2} metalness={0.7} />
            </mesh>
          </Float>

          <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.5}>
            <mesh position={[3.5, 1.5, -1.5]}>
              <cylinderGeometry args={[0.3, 0.3, 0.8, 8]} />
              <meshStandardMaterial color="#7209b7" roughness={0.4} metalness={0.6} />
            </mesh>
          </Float>

          <Float speed={3} rotationIntensity={3} floatIntensity={2.5}>
            <mesh position={[-1.5, -3, 1]}>
              <octahedronGeometry args={[0.5]} />
              <meshStandardMaterial color="#f72585" roughness={0.1} metalness={0.9} />
            </mesh>
          </Float>

          <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2}>
            <mesh position={[3, 3, 0.5]}>
              <dodecahedronGeometry args={[0.4]} />
              <meshStandardMaterial color="#4cc9f0" roughness={0.3} metalness={0.8} />
            </mesh>
          </Float>

          <Float speed={2.2} rotationIntensity={2.5} floatIntensity={1.8}>
            <mesh position={[-3, -1.5, 1.5]}>
              <tetrahedronGeometry args={[0.6]} />
              <meshStandardMaterial color="#06ffa5" roughness={0.2} metalness={0.7} />
            </mesh>
          </Float>

          <Float speed={1.5} rotationIntensity={1} floatIntensity={3}>
            <mesh position={[1.5, 3.5, -2.5]}>
              <icosahedronGeometry args={[0.4]} />
              <meshStandardMaterial color="#ffd60a" roughness={0.4} metalness={0.5} />
            </mesh>
          </Float>

          <Float speed={2.8} rotationIntensity={2} floatIntensity={2.2}>
            <mesh position={[-4, 2.5, 0]}>
              <ringGeometry args={[0.3, 0.6, 16]} />
              <meshStandardMaterial color="#e63946" roughness={0.3} metalness={0.8} />
            </mesh>
          </Float>

          <Float speed={1.3} rotationIntensity={1.2} floatIntensity={1.5}>
            <mesh position={[4, -2.5, -1]}>
              <torusKnotGeometry args={[0.4, 0.15, 64, 8]} />
              <meshStandardMaterial color="#9d4edd" roughness={0.2} metalness={0.9} />
            </mesh>
          </Float>

          <Float speed={2.5} rotationIntensity={3} floatIntensity={2}>
            <mesh position={[0, 4, -3]}>
              <capsuleGeometry args={[0.2, 0.6, 4]} />
              <meshStandardMaterial color="#43aa8b" roughness={0.1} metalness={0.8} />
            </mesh>
          </Float>

          <Float speed={1.7} rotationIntensity={1.8} floatIntensity={2.5}>
            <mesh position={[-2.5, -4, -0.5]}>
              <sphereGeometry args={[0.3, 16, 8]} />
              <meshStandardMaterial color="#f77f00" roughness={0.3} metalness={0.6} />
            </mesh>
          </Float>

          {/* Tiny accent objects */}
          <Float speed={3.5} rotationIntensity={4} floatIntensity={3}>
            <mesh position={[5, 0, -4]}>
              <boxGeometry args={[0.2, 0.2, 0.2]} />
              <meshStandardMaterial color="#ff006e" roughness={0.1} metalness={1} />
            </mesh>
          </Float>

          <Float speed={4} rotationIntensity={3.5} floatIntensity={3.5}>
            <mesh position={[-5, -0.5, -3.5]}>
              <sphereGeometry args={[0.15, 8, 8]} />
              <meshStandardMaterial color="#8338ec" roughness={0.2} metalness={0.9} />
            </mesh>
          </Float>

          {/* Main Title */}
          <Float speed={2} rotationIntensity={5} floatIntensity={5}>
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
            onPointerOver={() => setHovered("box")}
            onPointerOut={() => setHovered(null)}
            scale={hovered === "box" ? 1.1 : 1}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial transparent opacity={0} />
          </mesh>

          <mesh
            position={[2, -1, 0]}
            onPointerOver={() => setHovered("sphere")}
            onPointerOut={() => setHovered(null)}
            scale={hovered === "sphere" ? 1.1 : 1}
          >
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial transparent opacity={0} />
          </mesh>

          <mesh
            position={[0, -2, -1]}
            onPointerOver={() => setHovered("torus")}
            onPointerOut={() => setHovered(null)}
            scale={hovered === "torus" ? 1.1 : 1}
          >
            <torusGeometry args={[0.8, 0.3, 16, 100]} />
            <meshStandardMaterial transparent opacity={0} />
          </mesh>

          {/* Contact Shadows */}
          <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />

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
  );
}

export default Scene3D;
