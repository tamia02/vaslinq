"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";

type Props = { active: boolean; reduced: boolean; shape?: unknown };

const ORBS: { pos: [number, number, number]; r: number; color: string; metal: number }[] = [
  { pos: [0, 0, 0], r: 1.15, color: "#ffffff", metal: 0.1 },
  { pos: [1.7, 0.9, -0.6], r: 0.55, color: "#c9bcff", metal: 0.3 },
  { pos: [-1.6, -0.8, 0.3], r: 0.45, color: "#1e1060", metal: 0.6 },
  { pos: [1.3, -1.2, 0.8], r: 0.3, color: "#ffffff", metal: 0.2 },
  { pos: [-1.2, 1.3, -0.4], r: 0.22, color: "#a78bfa", metal: 0.4 },
];

export default function OrbScene({ active, reduced }: Props) {
  return (
    <Canvas
      frameloop={active ? "always" : "demand"}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1.4} />
      {ORBS.map((o, i) => (
        <Float key={i} speed={reduced ? 0 : 1.2 + i * 0.3} floatIntensity={1.2} rotationIntensity={0.4}>
          <mesh position={o.pos}>
            <sphereGeometry args={[o.r, 64, 64]} />
            <meshPhysicalMaterial
              color={o.color}
              roughness={0.08}
              metalness={o.metal}
              clearcoat={1}
              clearcoatRoughness={0.05}
              iridescence={0.8}
              iridescenceIOR={1.4}
            />
          </mesh>
        </Float>
      ))}
      <Environment resolution={128}>
        <Lightformer form="rect" intensity={3} position={[0, 4, 4]} scale={[8, 3, 1]} />
        <Lightformer form="ring" color="#a78bfa" intensity={5} position={[-6, 0, 2]} scale={5} />
        <Lightformer form="circle" color="#ffffff" intensity={3} position={[6, 2, 0]} scale={3} />
      </Environment>
    </Canvas>
  );
}
