import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { LayoutCamera } from "framer-motion-3d";
import { useState } from "react";

const Camera = ({ isPhone }) => {
  const variants = {
    first: {
      x: 0,
      y: 0,
      z: isPhone ? 8 : 5,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    },
    second: {
      x: isPhone ? 1 : 5,
      y: -7,
      z: 5,
      rotateX: 0,
      rotateY: -Math.PI / 2,
      rotateZ: 0,
    },
    third: {
      x: 0,
      y: -11,
      z: isPhone ? 8 : 5,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    },
    fourth: {
      x: isPhone ? 1 : 5,
      y: -15,
      z: 10,
      rotateX: 0,
      rotateY: -Math.PI / 2,
      rotateZ: 0,
    },
  };

  const scroll = useScroll();
  const [moveTo, setMoveTo] = useState("first");

  useFrame(() => {
    if (scroll.offset < 0.08 && moveTo !== "first") {
      return setMoveTo("first");
    } else if (
      scroll.offset >= 0.08 &&
      scroll.offset < 0.24 &&
      moveTo !== "second"
    ) {
      return setMoveTo("second");
    } else if (
      scroll.offset >= 0.24 &&
      scroll.offset < 0.5 &&
      moveTo !== "third"
    ) {
      return setMoveTo("third");
    } else if (scroll.offset >= 0.5 && moveTo !== "fourth") {
      return setMoveTo("fourth");
    }
  });

  return (
    <LayoutCamera
      position={[0, 0, isPhone ? 25 : 10]}
      animate={moveTo}
      variants={variants}
      transition={{ duration: 2 }}
    />
  );
};
export default Camera;
