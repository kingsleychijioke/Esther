import { useMemo } from "react";
import * as THREE from "three";

export default function Particles({ count = 1800 }) {
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      array[i] = (Math.random() - 0.5) * 35;
      array[i + 1] = (Math.random() - 0.5) * 25;
      array[i + 2] = (Math.random() - 0.5) * 30;
    }

    return array;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.025}
        color="#ffffff"
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}