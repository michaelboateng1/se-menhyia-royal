import StoryText from "./StoryText";
import StoryGallary from "./StoryGallary";

const OurStory = () => {
  return (
    <section className="container py-5 px-10 mt-5">
      <h2 className="uppercase py-5 px-2 text-2xl text-[#da9408] text-center w-[20%] text-nowrap mb-10 mx-auto border-b-4 border-[#da9408]">our campus</h2>
      <div className="flex flex-col md:flex-row justify-start gap-20 md:h-[400px]">
        <StoryGallary />
        <StoryText />
      </div>
    </section>
  );
};

export default OurStory;
