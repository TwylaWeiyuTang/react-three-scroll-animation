import {
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
} from "@react-three/drei";
import React from "react";
import { Office } from "./Office";
import Overlay from "./Overlay";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      {/* <PerspectiveCamera makeDefault position={[10, 10, 10]} /> */}
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};

export default Experience;
