import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, Environment } from '@react-three/drei';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

useGLTF.preload('/house.glb');

export default function HouseModel() {
  return (
    <div className="w-full h-[300px] md:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas 
        shadows 
        dpr={[1, 1.5]} // Lowering max DPR for mobile performance
        camera={{ position: [8, 8, 8], fov: 50 }}
      >
        <Suspense fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#444" wireframe />
          </mesh>
        }>
          <Stage environment="city" intensity={0.6} shadows="contact" adjustCamera={true}>
            <Model url="house.glb" />
          </Stage>
          <OrbitControls 
            enableZoom={true} // Allow zoom on mobile to see better
            autoRotate 
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            enableDamping
          />
        </Suspense>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
