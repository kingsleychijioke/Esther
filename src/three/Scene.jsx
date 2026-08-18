import { Canvas, useFrame } from "@react-three/fiber";

import { Environment, PerspectiveCamera } from "@react-three/drei";

import { useRef } from "react";

import * as THREE from "three";

import Particles from "./Particles";
import Hearts from "./Hearts";
import Balloons from "./Balloons";
import GiftBox from "./GiftBox";

import { useBirthdayExperience } from "../context/BirthdayExperience";

function CameraController() {
  const camera = useRef();

  const { giftOpened, celebration } = useBirthdayExperience();

  useFrame((state) => {
    const currentCamera = state.camera;

    if (giftOpened && !celebration) {
      currentCamera.position.lerp(new THREE.Vector3(0, 0, 2.5), 0.025);

      currentCamera.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }

    if (celebration) {
      const time = state.clock.elapsedTime;

      currentCamera.position.x = Math.sin(time * 0.2) * 3;

      currentCamera.position.y = Math.cos(time * 0.15) * 1.5;

      currentCamera.lookAt(0, 0, 0);
    }
  });

  return null;
}

export default function Scene() {
  return (
    <div className="three-background">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

        <ambientLight intensity={0.25} />

        <pointLight position={[0, 3, 4]} intensity={3} color="#ff8acb" />

        <CameraController />

        <Particles count={1800} />

        <Hearts />

        <Balloons />

        <GiftBox />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
