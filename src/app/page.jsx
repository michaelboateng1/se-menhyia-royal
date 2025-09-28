import Hero from "./conponent/Hero";
import OurStory from "./conponent/OurStory";
import Facilities from "./conponent/Facilities";
import SchoolActivities from "./conponent/SchoolActivities";

export default function Home() {
  return (
    <main className="mt-[120px]">
      <Hero />
      <OurStory />
      <Facilities />
      <SchoolActivities />
    </main>
  );
}
