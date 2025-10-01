import AcademicsCard from "./AcademicsCard";

const academicPrograms = [
  {
    title: "Undergraduate Programs",
    description: "Explore our diverse range of undergraduate programs designed to equip students with foundational knowledge and skills for their future careers.",
    imageUrl: "469181416_8843340015744877_598972008993789511_n.jpg",
  },
  {
    title: "Graduate Programs",
    description: "Our graduate programs offer advanced study and research opportunities, fostering innovation and expertise in various fields.",
    imageUrl: "469181416_8843340015744877_598972008993789511_n.jpg",
  },
  {
    title: "Online Learning",
    description: "Discover our flexible online learning options that allow students to pursue their education from anywhere in the world.",
    imageUrl: "469181416_8843340015744877_598972008993789511_n.jpg",
  },
];

const Academics = () => {
  return <section className="mt-10">{academicPrograms.map((program, i) => (i % 2 !== 0 ? <AcademicsCard key={i} title={program.title} description={program.description} imageUrl={program.imageUrl} moveTop={true} /> : <AcademicsCard key={i} title={program.title} description={program.description} imageUrl={program.imageUrl} moveTop={false} index={i} />))}</section>;
};

export default Academics;
