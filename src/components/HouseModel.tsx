import { Suspense, Component, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, Environment } from '@react-three/drei';
import houseModelUrl from '/house.glb?url';

class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.error("Three.js Error:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

const PlaceholderModel = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#444" wireframe />
  </mesh>
);

export default function HouseModel() {
  return (
    <div className="w-full h-[300px] md:h-[500px] cursor-grab active:cursor-grabbing bg-bg-secondary/50 rounded-sm">
      <Canvas 
        shadows 
        dpr={[1, 1.5]}
        camera={{ position: [8, 8, 8], fov: 50 }}
        onError={(e) => console.error("Canvas Error:", e)}
      >
        <ErrorBoundary fallback={<PlaceholderModel />}>
          <Suspense fallback={<PlaceholderModel />}>
            <Stage environment="city" intensity={0.6} shadows="contact" adjustCamera={true}>
              <Model url={houseModelUrl} />
            </Stage>
            <OrbitControls 
              enableZoom={true}
              autoRotate 
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
              enableDamping
            />
          </Suspense>
        </ErrorBoundary>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
