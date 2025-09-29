import SocialsIcons from "./SocialsIcons";

const FooterMessage = () => {
  return (
    <section className="p-8 space-y-4">
      <img src="/images/images.jpeg" alt="School Logo" className="w-32 h-32 object-cover rounded-full inline-block mx-auto" />
      <p className="w-[40ch] py-5 px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur a veniam laboriosam excepturi quidem provident. Non labore perferendis, vero, iusto dignissimos at eaque excepturi quis atque quasi, rerum cumque nam distinctio alias sunt. Aspernatur aliquam corrupti, commodi ea officia, recusandae aliquid maiores tenetur provident rem harum voluptatum incidunt debitis?</p>
      <div className="flex gap-4 text-2xl mt-4">
        <SocialsIcons icon="facebook" />
        <SocialsIcons icon="twitter" />
        <SocialsIcons icon="instagram" />
      </div>
    </section>
  );
};

export default FooterMessage;
