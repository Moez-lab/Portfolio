// Hero.jsx
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { styles } from "../style";
import Computer from "./three-models/Computer";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 h-40 sm:h-80 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Moez</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user interfaces, and web applications.
          </p>
        </div>
      </div>

      {/* Computer 3D Model */}
      <Canvas frameloop="demand" shadows dpr={[1, 2]} camera={{ position: [5, 2, 5], fov: 40 }} gl={{ preserveDrawingBuffer: true }} className="absolute inset-0 w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Computer />
        </Suspense>
        <Preload all />
      </Canvas>
    </section>
  );
};

export default Hero;
