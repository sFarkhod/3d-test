import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Suspense } from "react";

const canvasStyle = {
  height: "100%",
};

const Scene = () => {
  const colorMap = useLoader(TextureLoader, "MetalCastRusted001_COL_2K.png");

  const fbx = useLoader(FBXLoader, "penguin.fbx");

  fbx.position.set(0, 0, 0);


  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 1, 0]} intensity={0.6} />
      <primitive object={fbx} scale={0.02} map={colorMap} />
      <mesh position={[0, -2, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
};

export default function Model() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas style={canvasStyle}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
