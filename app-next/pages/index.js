import Home from "../components/Routes/Home";
import { NextSeo } from "next-seo";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div>
      <NextSeo
        title={`Samrid Pandit`}
        description={
          "Hi, I'm Samrid (CaffeineDuck) 👋 I'm a backend engineer and a student. Take a look at my portfolio!"
        }
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "portfolio, caffeineduck, python, samrid, samrid pandit, async, rust",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: `https://samrid.me/`,
          title: `Samrid Pandit`,
          description:
            "Hi, I'm Samrid (CaffeineDuck) 👋 I'm a backend engineer and a student. Take a look at my portfolio!",
        }}
      />
      <Home isPhone={isPhone} />
    </div>
  );
};
export default App;
