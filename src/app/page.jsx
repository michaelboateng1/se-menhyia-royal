import Hero from "./conponent/Hero";
import OurStory from "./conponent/OurStory";
import Facilities from "./conponent/Facilities";
import Extracurricular from "./conponent/Extracurricular";
import SchoolActivities from "./conponent/SchoolActivities";
import Calltoaction from "./conponent/Calltoaction";
import Footer from "./conponent/Footer";

export default function Home() {
  return (
    <main className="mt-[120px]">
      <article>
        <Hero />
        <OurStory />
        <Facilities />
        <Extracurricular />
        <SchoolActivities />
        <Calltoaction />
      </article>
    </main>
  );
}
