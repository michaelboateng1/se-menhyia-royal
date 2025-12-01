import SocialsIcons from "./SocialsIcons";

const FooterMessage = () => {
  return (
    <section className="space-y-4 flex flex-col items-center md:items-start">
      <img src="/images/images.jpeg" alt="School Logo" className="w-32 h-32 object-cover rounded-full inline-block mx-auto md:mx-0" />
      <p className="py-5 w-[40ch] px-3 mx-auto md:mx-0 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta voluptates eius natus laboriosam. Quisquam, eum.</p>
      <div className="flex gap-4 text-white text-2xl mt-4 justify-center md:justify-start w-full">
        <SocialsIcons icon="facebook" />
        <SocialsIcons icon="twitter" />
        <SocialsIcons icon="instagram" />
      </div>
    </section>
  );
};

export default FooterMessage;
