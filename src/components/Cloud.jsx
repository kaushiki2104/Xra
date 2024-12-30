import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

// Define the fadeOnBeforeCompile function
function fadeOnBeforeCompile(shader) {
  // Use a custom uniform name to avoid conflict
  shader.uniforms.customOpacity = { value: 1.0 };

  // Modify the fragment shader
  shader.fragmentShader = `
    uniform float customOpacity; // Custom uniform for opacity
    ${shader.fragmentShader.replace(
      `gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
      `gl_FragColor = vec4( outgoingLight, diffuseColor.a * customOpacity );`
    )}
  `;
}

export function Cloud({ sceneOpacity = 1.0, ...props }) {
  const { nodes, materials } = useGLTF("./models/cloud/model.glb");
  const materialRef = useRef();

  // useFrame(()=>{
  //   materialRef.current.opacity = sceneOpacity.current;
  // });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
        <meshStandardMaterial
          ref={materialRef}
          onBeforeCompile={fadeOnBeforeCompile}
          envMapIntensity={2}
          // {...materials["lambert2SG.001"]}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/cloud/model.glb");
