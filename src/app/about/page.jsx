import Heading from "../component/Heading";
import AboutTheSchool from "./components/AboutTheSchool";
import Academics from "./components/Academics";
import AboutUs from "./components/AboutUs";
import CalltoAction from "../component/Calltoaction";

export const metadata = {
  title: "Se-Menhyia Royal International School - About Us",
  description: "Learn more about Se-Menhyia Royal International School, our mission, vision, and values.",
};

const About = () => {
  return (
    <main className="mt-[100px] overflow-x-hidden">
      <Heading heading="About Us" subheading="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem." />
      <AboutUs />
      <AboutTheSchool />
      {/* <CalltoAction /> */}
      <Academics />
    </main>
  );
};

export default About;
