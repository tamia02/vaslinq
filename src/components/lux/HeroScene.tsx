"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
  RoundedBox,
} from "@react-three/drei";
import * as THREE from "three";

export type Shape = "knot" | "crystal" | "ring" | "block" | "orb";

type Props = { active: boolean; reduced: boolean; shape?: Shape };

// One glass object per page: knot (home), crystal (AI agents), ring
// (automation), block (software), orb (about / studio).
function Geometry({ shape }: { shape: Shape }) {
  switch (shape) {
    case "crystal":
      return <icosahedronGeometry args={[1.45, 0]} />;
    case "ring":
      return <torusGeometry args={[1.1, 0.44, 64, 180]} />;
    case "orb":
      return <sphereGeometry args={[1.35, 96, 96]} />;
    default:
      return <torusKnotGeometry args={[1, 0.34, 256, 48, 2, 3]} />;
  }
}

// Small glossy spheres orbiting the core — the "AI agents" working around the business.
function Agent({ radius, speed, offset, size, color, tilt }: {
  radius: number;
  speed: number;
  offset: number;
  size: number;
  color: string;
  tilt: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    if (!ref.current) return;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t) * radius * tilt, Math.sin(t) * radius * 0.6);
  });
  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[size, 48, 48]} />
      <meshPhysicalMaterial color={color} roughness={0.12} metalness={0.25} clearcoat={1} clearcoatRoughness={0.1} />
    </mesh>
  );
}

function Sculpture({ reduced, shape }: { reduced: boolean; shape: Shape }) {
  const group = useRef<THREE.Group>(null);
  const knot = useRef<THREE.Mesh>(null);
  const distortion = shape === "orb" ? 0.6 : 0.25;

  useFrame((state, delta) => {
    if (reduced) return;
    if (knot.current) {
      knot.current.rotation.x += delta * 0.12;
      knot.current.rotation.y += delta * 0.18;
    }
    if (group.current) {
      // Ease the whole piece toward the pointer for a subtle parallax.
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.35, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.2, 0.05);
    }
  });

  return (
    <group ref={group}>
      <Float speed={reduced ? 0 : 1.4} rotationIntensity={0.25} floatIntensity={0.8}>
        {shape === "block" ? (
          <RoundedBox ref={knot} args={[1.9, 1.9, 1.9]} radius={0.38} smoothness={6} castShadow>
          <MeshTransmissionMaterial
            background={new THREE.Color("#f6f5fb")}
            color="#cfc4ff"
            thickness={1.4}
            roughness={0.06}
            transmission={1}
            ior={1.35}
            chromaticAberration={0.08}
            anisotropy={0.2}
            distortion={distortion}
            distortionScale={0.4}
            temporalDistortion={0.08}
            iridescence={1}
            iridescenceIOR={1.3}
            iridescenceThicknessRange={[100, 800]}
            samples={6}
            resolution={512}
          />
          </RoundedBox>
        ) : (
          <mesh ref={knot} castShadow>
            <Geometry shape={shape} />
          <MeshTransmissionMaterial
            background={new THREE.Color("#f6f5fb")}
            color="#cfc4ff"
            thickness={1.4}
            roughness={0.06}
            transmission={1}
            ior={1.35}
            chromaticAberration={0.08}
            anisotropy={0.2}
            distortion={distortion}
            distortionScale={0.4}
            temporalDistortion={0.08}
            iridescence={1}
            iridescenceIOR={1.3}
            iridescenceThicknessRange={[100, 800]}
            samples={6}
            resolution={512}
          />
          </mesh>
        )}

        {/* Solid indigo halo ring */}
        <mesh rotation={[Math.PI / 2.3, 0.3, 0]}>
          <torusGeometry args={[2.05, 0.022, 32, 200]} />
          <meshStandardMaterial color="#5b3df5" metalness={0.6} roughness={0.25} />
        </mesh>
      </Float>

      <Agent radius={2.05} speed={0.45} offset={0} size={0.17} color="#5b3df5" tilt={0.35} />
      <Agent radius={2.05} speed={0.45} offset={2.1} size={0.12} color="#ffffff" tilt={0.35} />
      <Agent radius={2.05} speed={0.45} offset={4.2} size={0.14} color="#110e24" tilt={0.35} />
    </group>
  );
}

export default function HeroScene({ active, reduced, shape = "knot" }: Props) {
  return (
    <Canvas
      frameloop={active ? "always" : "demand"}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.4], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      shadows
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} castShadow />
      <Sculpture reduced={reduced} shape={shape} />
      <ContactShadows position={[0, -2.2, 0]} opacity={0.35} scale={9} blur={2.6} far={4} color="#3a22c7" />
      {/* Studio lighting built from light-formers, so nothing is fetched from a CDN. */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="ring" color="#8b6dff" intensity={6} rotation-y={Math.PI / 2} position={[10, 1, 0]} scale={8} />
          <Lightformer form="rect" color="#ffffff" intensity={3} position={[0, 0, 6]} scale={[10, 2, 1]} />
          <Lightformer form="rect" color="#c9bcff" intensity={2} position={[-6, -2, 2]} scale={[4, 8, 1]} />
        </group>
      </Environment>
    </Canvas>
  );
}
