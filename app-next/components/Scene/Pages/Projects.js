import { Scroll, Text, Torus } from "@react-three/drei";
import GlassPanel from "../Images/GlassPanel";
import { motion } from "framer-motion-3d";
import { useState, useEffect } from "react";
import { RoughMaterialRoyalBlue, DarkRoyalBlueMaterial } from "../Materials";
import RoundedCube from "../Cubes/RoundedCube";

const query = {
  query: `
  {
  user(login: "CaffeineDuck") {
    pinnedItems(first: 4, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          url
          description
          owner {
            login
          }
          openGraphImageUrl
        }
      }
    }
  }
}
`,
};

const Projects = ({ theme, setCursor, isPhone }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((res) => setData(res.data.user.pinnedItems.nodes));
  }, []);

  return (
    <Scroll>
      <group position={[0, -16, 0]}>
        {isPhone ? (
          <group position={[0, 1.6, 1]}>
            <Text
              scale={2}
              color={theme ? "black" : "white"}
              font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
            >
              Let's take a look at
            </Text>
            <Text
              position={[0, -0.2, 0]}
              scale={2}
              color={theme ? "black" : "white"}
              font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
            >
              my projects!
            </Text>
          </group>
        ) : (
          <Text
            position={[0, 1.5, 1]}
            scale={2}
            color={theme ? "black" : "white"}
            font={`https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff`}
          >
            Let's take a look at my projects!
          </Text>
        )}
        // Map through the data and create a glass panel for each project
        <motion.mesh
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", bounce: 0.3, duration: 1 }}
        >
          {data &&
            data.map((project, index) => (
              <GlassPanel
                texture={project.openGraphImageUrl}
                imageScale={1.1}
                setCursor={setCursor}
                position={
                  index % 2 == 0
                    ? [-2, index * -1.2, 0]
                    : [2, (index - 1) * -1.2, 0]
                }
                onClick={() => window.open(project.url, "_blank")}
                key={`project_${index}`}
              />
            ))}
        </motion.mesh>
        <group>
          <RoundedCube
            position={[0, -1.2, -1]}
            scale={0.7}
            material={RoughMaterialRoyalBlue}
            radius={0.3}
          />
          <Torus
            args={[2, 1, 48, 64]}
            rotation={[Math.PI / 3, Math.PI / 2.5, 0]}
            position={[-4.3, 1, -1]}
            scale={0.15}
            material={DarkRoyalBlueMaterial}
          />
          <Torus
            args={[2, 1, 48, 64]}
            rotation={[-Math.PI / 3, -Math.PI / 2.5, 0]}
            position={[4.3, -3.4, -1]}
            scale={0.15}
            material={DarkRoyalBlueMaterial}
          />
        </group>
      </group>
    </Scroll>
  );
};
export default Projects;
