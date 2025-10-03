import SocialsIcons from "./SocialsIcons";

const FooterMessage = () => {
  return (
    <section className="p-8 space-y-4 flex flex-col items-center md:items-start">
      <img src="/images/images.jpeg" alt="School Logo" className="w-32 h-32 object-cover rounded-full inline-block mx-auto md:mx-0" />
      <p className="w-[40ch] py-5 px-3 mx-auto md:mx-0 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur a veniam laboriosam excepturi quidem provident. Non labore perferendis, vero, iusto dignissimos at eaque excepturi quis atque quasi, rerum cumque nam distinctio alias sunt. Aspernatur aliquam corrupti, commodi ea officia, recusandae aliquid maiores tenetur provident rem harum voluptatum incidunt debitis?</p>
      <div className="flex gap-4 text-white text-2xl mt-4 justify-center md:justify-start w-full">
        <SocialsIcons icon="facebook" />
        <SocialsIcons icon="twitter" />
        <SocialsIcons icon="instagram" />
      </div>
    </section>
  );
};

export default FooterMessage;
