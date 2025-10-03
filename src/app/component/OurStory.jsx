import Link from "next/link";
const OurStory = () => {
  return (
    <section className="container py-5 px-10 mt-20">
      {/* <h2 className="uppercase py-5 px-2 text-2xl text-[#da9408]">our campus</h2> */}
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-8 h-[400px]">
        <div className="block md:flex md:w-[60%] hover:scale-[1.02] drop-shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <div className="block md:flex md:flex-col w-full mt-5 md:mt-0">
            <img alt="Our Story" src="/images/465098785_8654312857980928_9125003845167791671_n.jpg" width={981} height={981} className="hidden md:block md:border-r-0 md:border-b-0 h-full w-full object-cover border-8 border-[#fff] rounded-tl-[10px]" />
            <img alt="Our Story" src="/images/465226065_8654311911314356_5383156439751233946_n.jpg" width={2048} height={1356} className="h-full w-full object-cover border-8 border-[#fff] rounded-bl-[10px] md:border-r-0" />
          </div>
          <img alt="Our Story" src="/images/140385158_3694857573926506_6586025298240270010_n.jpg" width={1536} height={1536} className="w-full h-full object-fill hidden md:block border-8 border-[#fff] rounded-tr-[10px] rounded-br-[10px]" />
        </div>
        <div>
          <h3 className="text-xl py-2 text-[#da9408]">Bomso Campus</h3>
          <p className="w-[40ch]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae distinctio praesentium voluptates, nam nobis, omnis fuga error esse cupiditate, deleniti tenetur consequatur doloribus accusamus ad quas earum nesciunt hic est. Delectus odit quia similique fuga. Ipsa corrupti impedit facilis nesciunt, neque, quidem veritatis debitis amet perspiciatis molestias hic fugit quos.</p>
          <Link href="/about" className="inline-block mt-5 text-[#da9408] rounded hover:text-white transition-colors capitalize">
            find out more about us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
