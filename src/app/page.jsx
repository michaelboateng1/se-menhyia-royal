import Hero from "./component/Hero";
import OurStory from "./component/OurStory";
import Facilities from "./component/Facilities";
import Extracurricular from "./component/Extracurricular";
import SchoolActivities from "./component/SchoolActivities";
import Calltoaction from "./component/Calltoaction";

export default function Home() {
  return (
    <main className="mt-[100px]">
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
