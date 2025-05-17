import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Computer from "./three-models/Computer";
import Loader from "./Loader";

export default function ComputersCanvas() {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update viewport on resize
  useEffect(() => {
    function handleResize() {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate scale and camera position based on width (you can tweak these values)
  const isMobile = viewport.width < 600;

  const scale = isMobile ? 0.35 : 0.85
  5;
  const cameraPosition = isMobile ? [10, 2, 3] : [20, 3, 5];
  const modelPosition = isMobile ? [0, -1, 0] : [0, -3.3, 0];
  const orbitZoom = !isMobile; // enable zoom on desktop, disable on mobile
  const rotation= !isMobile ? [0, -4.55, 0] : [0, Math.PI / 2, 0];

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[3.5, 3.5]} // reduce dpr on mobile for performance
      camera={{ position: cameraPosition, fov: 25 }}
      gl={{ antialias: true, preserveDrawingBuffer: true }}
      className="absolute inset-0 w-full h-full"
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={5.5} />
      <spotLight position={[20, 50, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />

      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        //   enabled={!isMobile}
        />
        <Computer scale={scale} position={modelPosition} rotation={rotation} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
