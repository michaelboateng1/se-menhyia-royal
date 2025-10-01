import Heading from "../component/Heading";
import AboutTheSchool from "./components/AboutTheSchool";
import Academics from "./components/Academics";

const About = () => {
  return (
    <main className="mt-[100px]">
      <Heading heading="About Us" subheading="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem." />
      <AboutTheSchool />
      <Academics />
    </main>
  );
};

export default About;
