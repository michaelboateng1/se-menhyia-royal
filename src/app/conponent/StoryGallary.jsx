const StoryGallary = () => {
  return (
    <div className="block md:flex w-[50%]">
      <div className="block md:flex md:flex-col w-full h-[300px] md:h-auto mt-5 md:mt-0">
        <img alt="Our Story" src="/images/465098785_8654312857980928_9125003845167791671_n.jpg" width={981} height={981} className="hidden md:block h-full w-full object-cover border-4 border-[#fff] rounded-tl-[10px]" />
        <img alt="Our Story" src="/images/465226065_8654311911314356_5383156439751233946_n.jpg" width={2048} height={1356} className="h-full w-full object-cover border-4 border-[#fff] rounded-[10px] md:rounded-[0px] md:rounded-bl-[10px]" />
      </div>
      <img alt="Our Story" src="/images/140385158_3694857573926506_6586025298240270010_n.jpg" width={1536} height={1536} className="w-full h-full object-fill hidden md:block border-4 border-[#fff] rounded-tr-[10px] rounded-br-[10px]" />
    </div>
  );
};

export default StoryGallary;
