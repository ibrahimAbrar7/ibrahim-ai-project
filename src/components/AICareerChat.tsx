"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from 'three';
import { inSphere } from 'maath/random';
import Link from "next/link";

const ParticleBackground = () => {
  const particles = useRef<THREE.Points>(null);
  const [spherePositions, setSpherePositions] = useState<Float32Array>(new Float32Array());

  useEffect(() => {
    setSpherePositions(inSphere(new Float32Array(5000), { radius: 5 }) as Float32Array);
  }, []);

  useFrame((state, delta) => {
    if (particles.current) {
      particles.current.rotation.x += delta * 0.1;
      particles.current.rotation.y += delta * 0.1;
      particles.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Points ref={particles} positions={spherePositions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

function CareerPathModel() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <meshBasicMaterial color="pink" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 text-gray-900 dark:text-white">
      {/* Particle Background Canvas */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating 3D Model */}
      <div className="absolute right-10 lg:right-20 top-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 hidden md:block">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Suspense fallback={null}>
            <CareerPathModel />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1}
            enablePan={false}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/40 dark:bg-white/10 backdrop-blur-sm rounded-full mb-6 shadow-sm border border-blue-300/30 dark:border-white/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-800 dark:text-white">
              AI Career Assistant
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-blue-900 dark:text-white"
          >
            <span>Transform your career with</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              intelligent guidance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Our AI-powered platform analyzes your skills, passions, and market trends to create a personalized career roadmap for your success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl shadow-lg transition-all relative overflow-hidden group"
            ><Link href="/form" className="relative z-10">
  Get Started - It&apos;s Free
</Link>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gray-100 dark:bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              See How It Works
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 pt-8 border-t border-gray-300 dark:border-white/10 text-center"
        >
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
            Made with ❤️ by <span className="text-blue-800 dark:text-white font-semibold">Mohd Ibrahim Ahmed</span> — a passionate web developer and MCA final-year student at Sai Sudhir PG College.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-sm text-gray-600 dark:text-gray-200 pb-6"
            whileHover={{ scale: 1.05 }}
          >
            Building intelligent web solutions with Next.js, Tailwind CSS, and AI.
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
