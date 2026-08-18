import { useMemo } from "react";
import * as THREE from "three";
import { Float } from "@react-three/drei";

function Heart({ position, scale, rotation }) {
  const shape = useMemo(() => {
    const heart = new THREE.Shape();

    heart.moveTo(0, 0.25);

    heart.bezierCurveTo(
      -0.55,
      0.85,
      -1.15,
      0.15,
      0,
      -0.65
    );

    heart.bezierCurveTo(
      1.15,
      0.15,
      0.55,
      0.85,
      0,
      0.25
    );

    return heart;
  }, []);

  return (
    <mesh
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <extrudeGeometry
        args={[
          shape,
          {
            depth: 0.18,
            bevelEnabled: true,
            bevelSegments: 3,
            steps: 2,
            bevelSize: 0.05,
            bevelThickness: 0.05
          }
        ]}
      />

      <meshStandardMaterial
        color="#ff5cac"
        emissive="#ff1f82"
        emissiveIntensity={2}
        roughness={0.2}
        metalness={0.1}
      />
    </mesh>
  );
}

export default function Hearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        position: [
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 13,
          (Math.random() - 0.5) * 10
        ],
        scale: 0.06 + Math.random() * 0.12,
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ]
      })),
    []
  );

  return (
    <group>
      {hearts.map((heart, index) => (
        <Float
          key={index}
          speed={0.5 + Math.random()}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <Heart {...heart} />
        </Float>
      ))}
    </group>
  );
}