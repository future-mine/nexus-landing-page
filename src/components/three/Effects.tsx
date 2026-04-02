"use client";

import { Bloom, EffectComposer } from "@react-three/postprocessing";

export function Effects() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.4}
        luminanceSmoothing={0.9}
        intensity={1.2}
        mipmapBlur
      />
    </EffectComposer>
  );
}
