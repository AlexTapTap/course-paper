import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';

function Model({ url }: { url: string }) {
  try {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
  } catch (e) {
    console.warn("Model loading failed, check if house.glb exists in /public");
    return (
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#333" wireframe />
      </mesh>
    );
  }
}

export default function HouseModel() {
  return (
    <div className="w-full h-[300px] md:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="#333" wireframe /></mesh>}>
          <PerspectiveCamera makeDefault position={[8, 8, 8]} fov={50} />
          <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.7, blur: 2 }} adjustCamera={true}>
            <Model url="./house.glb" />
          </Stage>
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
