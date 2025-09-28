import SchoolActivitiesCard from "./SchoolActivitiesCard";

const SchoolActivities = () => {
  return (
    <section className="mt-5 py-5 px-10">
      <h2 className="text-2xl text-[#da9408] py-5 px-2 uppercase text-center w-[20%] text-nowrap mb-10  mx-auto border-b-4 border-[#da9408]">school activities</h2>
      <div className="container grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <SchoolActivitiesCard cardImage={"468861802_8843340119078200_2897796237502648679_n.jpg"} cardImageAltText={"Abacus Traning"} cardTitle={"Abacus Traning"} cardBody={"Somthing long a bit"} instituteImage={"images.jpeg"} instituteAltText={"School Logo"} />
      </div>
    </section>
  );
};

export default SchoolActivities;
