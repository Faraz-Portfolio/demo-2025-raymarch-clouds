import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Clouds } from "./Clouds";

export default function App() {
  return (
    <>
      <Canvas>
        <OrbitControls
          makeDefault
          enableDamping={false}
          target={[0, 0, 0.00001]}
        />
        <PerspectiveCamera position={[0.9, 0, -0.9]} makeDefault />

        <Clouds />
      </Canvas>
    </>
  );
}
