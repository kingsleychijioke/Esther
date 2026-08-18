import { useRef, useState } from "react";

import { useFrame } from "@react-three/fiber";

import { Float, Sparkles } from "@react-three/drei";

import * as THREE from "three";

import { useBirthdayExperience } from "../context/BirthdayExperience";

export default function GiftBox() {
  const group = useRef();

  const lid = useRef();

  const [hovered, setHovered] = useState(false);

  const { giftOpened, openGift } = useBirthdayExperience();

  useFrame((state, delta) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;

    if (!giftOpened) {
      group.current.rotation.y += delta * 0.15;

      group.current.position.y = Math.sin(time * 1.4) * 0.08;
    }

    if (giftOpened) {
      group.current.rotation.y += delta * 1.4;

      group.current.position.y += delta * 0.7;

      const targetScale = 1.3;

      group.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        delta * 2,
      );

      if (lid.current) {
        lid.current.rotation.x = THREE.MathUtils.lerp(
          lid.current.rotation.x,
          -Math.PI * 0.65,
          delta * 3,
        );

        lid.current.position.y = THREE.MathUtils.lerp(
          lid.current.position.y,
          1.2,
          delta * 3,
        );
      }
    } else {
      group.current.scale.lerp(
        new THREE.Vector3(
          hovered ? 1.08 : 1,
          hovered ? 1.08 : 1,
          hovered ? 1.08 : 1,
        ),
        delta * 5,
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group
        ref={group}
        position={[0, -1.2, -1]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onClick={openGift}
      >
        {/* BOX */}

        <mesh castShadow>
          <boxGeometry args={[2.4, 1.8, 2.4]} />

          <meshStandardMaterial
            color="#b51d70"
            roughness={0.25}
            metalness={0.2}
          />
        </mesh>

        {/* VERTICAL RIBBON */}

        <mesh position={[0, 0, 1.22]}>
          <boxGeometry args={[0.38, 1.85, 0.05]} />

          <meshStandardMaterial
            color="#ffd1ea"
            emissive="#ff5aaa"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* HORIZONTAL RIBBON */}

        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.45, 0.38, 2.45]} />

          <meshStandardMaterial
            color="#ffd1ea"
            emissive="#ff5aaa"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* LID */}

        <group ref={lid} position={[0, 1.05, 0]}>
          <mesh castShadow>
            <boxGeometry args={[2.65, 0.35, 2.65]} />

            <meshStandardMaterial
              color="#d82b86"
              roughness={0.2}
              metalness={0.25}
            />
          </mesh>
        </group>

        {/* LIGHT INSIDE */}

        {giftOpened && (
          <>
            <pointLight color="#ff8ed0" intensity={20} distance={10} />

            <Sparkles
              count={250}
              scale={[5, 5, 5]}
              size={5}
              speed={1.5}
              color="#ffb7df"
            />
          </>
        )}
      </group>
    </Float>
  );
}
