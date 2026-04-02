/**
 * Mutable state stores shared between the DOM world (React/Framer Motion)
 * and the WebGL world (R3F useFrame). Using plain objects avoids React
 * re-renders — values are written by event listeners and read inside
 * requestAnimationFrame loops.
 */

export const scrollState = {
  progress: 0,
  velocity: 0,
};

export const mouseState = {
  x: 0,
  y: 0,
};
