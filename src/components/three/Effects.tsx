"use client";

import { Bloom, EffectComposer } from "@react-three/postprocessing";

export function Effects() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.6}
        luminanceSmoothing={0.6}
        intensity={0.5}
        mipmapBlur
      />
    </EffectComposer>
  );
}
