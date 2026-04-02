"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { MathUtils, type Mesh, type Group } from "three";
import { scrollState, mouseState } from "@/lib/store";

export function HeroModel() {
  const groupRef = useRef<Group>(null);
  const mainRef = useRef<Mesh>(null);

  const lerped = useRef({ mx: 0, my: 0, scroll: 0 });

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const l = lerped.current;
    l.mx = MathUtils.damp(l.mx, mouseState.x, 4, delta);
    l.my = MathUtils.damp(l.my, mouseState.y, 4, delta);
    l.scroll = MathUtils.damp(l.scroll, scrollState.progress, 4, delta);

    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.12 + l.mx * 0.38;
    groupRef.current.rotation.x = Math.sin(t * 0.06) * 0.12 + l.my * 0.2;

    const targetX = state.viewport.width > 7 ? 0.9 : 0;
    groupRef.current.position.x = MathUtils.damp(
      groupRef.current.position.x,
      targetX,
      4,
      delta
    );
    groupRef.current.position.y = 0.2 - l.scroll * 2.5;
    const s = 1 - l.scroll * 0.25;
    groupRef.current.scale.setScalar(Math.max(s, 0.45));
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <hemisphereLight args={["#ddd6fe", "#111827", 0.7]} position={[0, 20, 0]} />
      <directionalLight position={[8, 10, 10]} intensity={1.25} color="#ffffff" />
      <pointLight position={[4, 3, 7]} intensity={1.5} color="#a78bfa" distance={28} />
      <pointLight position={[-5, -2, 4]} intensity={0.9} color="#22d3ee" distance={24} />

      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.55}>
        <group ref={groupRef} position={[0, 0, 0]}>
          {/* Elegant primary planet */} 
          <mesh ref={mainRef}>
            <icosahedronGeometry args={[1.62, 4]} />
            <MeshDistortMaterial
              color="#c4b5fd"
              emissive="#7c3aed"
              emissiveIntensity={0.25}
              metalness={0.35}
              roughness={0.28}
              distort={0.18}
              speed={1.05}
            />
          </mesh>

          <mesh scale={1.045}>
            <icosahedronGeometry args={[1.62, 2]} />
            <meshBasicMaterial
              color="#ede9fe"
              wireframe
              transparent
              opacity={0.46}
            />
          </mesh>

          <mesh scale={0.45}>
            <sphereGeometry args={[1, 24, 24]} />
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.18} />
          </mesh>

          <OrbitRing radius={2.2} speed={0.28} tilt={Math.PI / 3} />
          <OrbitRing radius={2.5} speed={-0.18} tilt={Math.PI / 1.45} />
        </group>
      </Float>
    </>
  );
}

function OrbitRing({
  radius,
  speed,
  tilt,
}: {
  radius: number;
  speed: number;
  tilt: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * speed;
  });

  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 12, 80]} />
      <meshBasicMaterial color="#c4b5fd" transparent opacity={0.45} />
    </mesh>
  );
}
