import { Float } from "@react-three/drei";

export default function Cake() {
  return (
    <Float
      speed={1}
      rotationIntensity={0.1}
      floatIntensity={0.4}
    >
      <group position={[0, -2, 0]}>
        <mesh>
          <cylinderGeometry args={[1.8, 1.8, 0.8, 64]} />

          <meshStandardMaterial
            color="#f0b8d6"
            roughness={0.3}
          />
        </mesh>

        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[1.6, 1.6, 0.25, 64]} />

          <meshStandardMaterial
            color="#fff0f7"
            roughness={0.25}
          />
        </mesh>

        {[0, 1, 2].map((x) => (
          <mesh
            key={x}
            position={[
              (x - 1) * 0.65,
              1.05,
              0
            ]}
          >
            <cylinderGeometry args={[0.06, 0.06, 0.8, 16]} />

            <meshStandardMaterial
              color="#fff"
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}