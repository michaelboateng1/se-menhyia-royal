import StoryText from "./StoryText";
import StoryGallary from "./StoryGallary";

const OurStory = () => {
  return (
    <section className="container py-5 px-10 mt-10 ">
      {/* <h2 className="hidden text-2xl text-[#da9408] py-5 px-3 md:px-5 uppercase md:text-center md:w-[200px] text-nowrap mb-20 md:mx-auto md:border-b-4 md:border-[#da9408]">our campus</h2> */}
      <div className="flex flex-col p-5 md:flex-row justify-start md:justify-center gap-10 md:h-[400px]">
        <StoryGallary />
        <StoryText />
      </div>
    </section>
  );
};

export default OurStory;
