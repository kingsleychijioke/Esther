import { Float } from "@react-three/drei";

function Balloon({ position, scale = 1 }) {
  return (
    <Float
      speed={1.2}
      rotationIntensity={0.15}
      floatIntensity={1}
    >
      <group position={position} scale={scale}>
        <mesh>
          <sphereGeometry args={[0.55, 32, 32]} />

          <meshStandardMaterial
            color="#d94b9c"
            roughness={0.15}
            metalness={0.2}
          />
        </mesh>

        <mesh position={[0, -0.7, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 1.2, 8]} />

          <meshStandardMaterial color="#dddddd" />
        </mesh>
      </group>
    </Float>
  );
}

export default function Balloons() {
  return (
    <group>
      <Balloon position={[-5, 2, -2]} scale={1.2} />
      <Balloon position={[5, 3, -3]} scale={0.9} />
      <Balloon position={[-6, -2, -1]} scale={0.7} />
      <Balloon position={[6, -1, -2]} scale={1.1} />
    </group>
  );
}