import SchoolActivitiesCard from "./SchoolActivitiesCard";

const activities = [
  {
    cardImage: "209175921_4156413627770896_608231583804384439_n.jpg",
    cardImageAltText: "Students participating in a science fair",
    cardTitle: "Science Fair",
  },
  {
    cardImage: "192215417_4052251904853736_8127764376681001094_n.jpg",
    cardImageAltText: "Students playing football",
    cardTitle: "Football Tournament",
  },
  {
    cardImage: "469040315_8843340029078209_3313891321238616397_n.jpg",
    cardImageAltText: "Art exhibition showcasing student artwork",
    cardTitle: "Art Exhibition",
  },
  {
    cardImage: "468982066_8843337612411784_8309463610828055914_n.jpg",
    cardImageAltText: "Students performing in a school play",
    cardTitle: "School Play",
  },
  {
    cardImage: "46425883_1996769483735332_7583241781630730240_n.jpg",
    cardImageAltText: "Students on a field trip",
    cardTitle: "Field Trip",
  },
];

const SchoolActivities = () => {
  return (
    <section className="max-w-7xl mx-auto mt-5 py-8 px-4 md:px-10">
      <h2 className="text-2xl text-[#da9408] py-5 px-3 md:px-5 uppercase text-center md:w-[300px] text-nowrap mb-10 md:mb-20 md:mx-auto md:border-b-4 md:border-[#da9408]">school activities</h2>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activities.map((activity, i) => (
          <SchoolActivitiesCard key={i} {...activity} />
        ))}
      </div>
    </section>
  );
};

export default SchoolActivities;
