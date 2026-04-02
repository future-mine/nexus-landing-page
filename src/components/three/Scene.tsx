"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload, AdaptiveDpr } from "@react-three/drei";
import { HeroModel } from "./HeroModel";
import { Particles } from "./Particles";
import { Effects } from "./Effects";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Scene() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={null}>
        <HeroModel />
        <Particles count={isMobile ? 200 : 500} />
        {!isMobile && <Effects />}
        <AdaptiveDpr pixelated />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
