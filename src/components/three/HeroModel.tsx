"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { MathUtils, type Mesh, type Group } from "three";
import { scrollState, mouseState } from "@/lib/store";

/*
 * To swap in a real GLTF/GLB model:
 *
 *   import { useGLTF } from '@react-three/drei';
 *
 *   function Model() {
 *     const { scene } = useGLTF('/models/your-model.glb');
 *     return <primitive object={scene} scale={1} />;
 *   }
 *
 *   useGLTF.preload('/models/your-model.glb');
 *
 * Place optimized (draco / meshopt) .glb files in public/models/.
 */

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
    groupRef.current.rotation.y = t * 0.1 + l.mx * 0.5;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.1 + l.my * 0.3;

    groupRef.current.position.y = -l.scroll * 3;
    const s = 1 - l.scroll * 0.3;
    groupRef.current.scale.setScalar(Math.max(s, 0.3));
  });

  return (
    <>
      <Environment preset="city" environmentIntensity={0.4} />
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#7c3aed" />
      <pointLight position={[-10, -5, -10]} intensity={0.8} color="#06b6d4" />
      <directionalLight position={[0, 5, 5]} intensity={0.3} />

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <group ref={groupRef}>
          {/* Primary morphing icosahedron */}
          <mesh ref={mainRef}>
            <icosahedronGeometry args={[1.5, 8]} />
            <MeshDistortMaterial
              color="#7c3aed"
              metalness={0.95}
              roughness={0.08}
              distort={0.35}
              speed={1.5}
              envMapIntensity={1.2}
            />
          </mesh>

          {/* Wireframe overlay for tech aesthetic */}
          <mesh scale={1.02}>
            <icosahedronGeometry args={[1.5, 3]} />
            <meshBasicMaterial
              color="#a78bfa"
              wireframe
              transparent
              opacity={0.08}
            />
          </mesh>

          {/* Inner glow core */}
          <mesh scale={0.4}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.15} />
          </mesh>

          {/* Orbiting rings */}
          <OrbitRing radius={2.2} speed={0.3} tilt={Math.PI / 3} />
          <OrbitRing radius={2.6} speed={-0.2} tilt={Math.PI / 1.5} />
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
      <torusGeometry args={[radius, 0.005, 16, 100]} />
      <meshBasicMaterial color="#a78bfa" transparent opacity={0.2} />
    </mesh>
  );
}
