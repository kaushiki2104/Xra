import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useState } from "react";
import { Airplane } from "./Airplane";

export default function ExploreAirplane() {
  const [showAirplane, setShowAirplane] = useState(false);

  const handleExploreClick = () => {
    setShowAirplane(true); // Trigger to show the Airplane component
  };

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      {showAirplane ? (
        <Canvas>
          {/* Ambient lighting for better visuals */}
          <ambientLight intensity={0.5} />
          {/* Directional light */}
          <directionalLight position={[5, 5, 5]} intensity={1} />
          {/* Camera controls for 3D navigation */}
          <OrbitControls />
          {/* Render the Airplane component */}
          <Airplane position={[0, 0, 0]} scale={[1, 1, 1]} />
        </Canvas>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor: "#000",
            color: "#fff",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <button
            onClick={handleExploreClick}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              background: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Explore Now
          </button>
        </div>
      )}
    </div>
  );
}
