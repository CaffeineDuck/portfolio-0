import { Scroll } from "@react-three/drei";
import ImageMesh from "../Images/ImageMesh";

const Medias = ({ setCursor }) => {
  return (
    <Scroll>
      <group position={[10, -27.6, 10]} rotation={[0, -Math.PI / 2, 0]}>
        <ImageMesh
          position={[-0.5, 0, 0]}
          texture={`/Assets/Logo/linkedin.svg`}
          scale={3}
          pointerIn={() => setCursor(true)}
          pointerOut={() => setCursor(false)}
          click={() =>
            window.open("https://www.linkedin.com/in/caffeineduck/", "_blank")
          }
        />
        <ImageMesh
          texture={`/Assets/Logo/github.svg`}
          scale={2.4}
          pointerIn={() => setCursor(true)}
          pointerOut={() => setCursor(false)}
          click={() => window.open("https://github.com/caffeineduck", "_blank")}
        />
        <ImageMesh
          position={[0.5, 0, 0]}
          texture={`/Assets/Logo/mail.svg`}
          scale={0.6}
          pointerIn={() => setCursor(true)}
          pointerOut={() => setCursor(false)}
          click={() => window.open("mailto:hello@samrid.me", "_blank")}
        />
      </group>
    </Scroll>
  );
};
export default Medias;
