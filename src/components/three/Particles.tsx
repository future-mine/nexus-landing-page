"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, BufferAttribute, Points as ThreePoints } from "three";

/** Deterministic PRNG so positions are identical if this tree ever SSRs (avoids hydration drift). */
function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Particles({ count = 500 }: { count?: number }) {
  const ref = useRef<ThreePoints>(null);

  const geometry = useMemo(() => {
    const rnd = mulberry32(0x9e3779b9);
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rnd() - 0.5) * 25;
      positions[i * 3 + 1] = (rnd() - 0.5) * 25;
      positions[i * 3 + 2] = (rnd() - 0.5) * 25;
      sizes[i] = rnd() * 0.03 + 0.005;
    }

    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(positions, 3));
    geo.setAttribute("size", new BufferAttribute(sizes, 1));
    return geo;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        color="#a78bfa"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
