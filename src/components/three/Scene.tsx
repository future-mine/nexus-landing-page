"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, AdaptiveDpr } from "@react-three/drei";
import { HeroModel } from "./HeroModel";
import { Particles } from "./Particles";
import { Effects } from "./Effects";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * No Suspense around HeroModel — drei's Environment async-loads HDRIs and can leave
 * an empty canvas (fallback null) on slow/blocked networks. Planet uses lights + emissive only.
 * Keep rendering path stable and add only subtle post effects.
 */
export default function Scene() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Canvas
      className="h-full w-full touch-none"
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: false,
      }}
    >
      <color attach="background" args={["#030014"]} />
      <HeroModel />
      <Particles count={isMobile ? 120 : 350} />
      {!isMobile && <Effects />}
      <AdaptiveDpr />
      <Preload all />
    </Canvas>
  );
}
