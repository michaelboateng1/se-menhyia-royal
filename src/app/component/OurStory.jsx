import Link from "next/link";
const OurStory = () => {
  return (
    <section className="container py-5 px-10 my-20">
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-8 h-[400px]">
        <div className="block md:flex md:w-[60%] hover:scale-[1.02] drop-shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <div className="block md:flex md:flex-col w-full mt-5 md:mt-0">
            <img alt="Our Story" src="/images/465098785_8654312857980928_9125003845167791671_n.jpg" className="hidden md:block md:border-r-0 md:border-b-0 h-1/2 w-full object-cover border-8 border-[#fff] rounded-tl-[10px]" />
            <img alt="Our Story" src="/images/465226065_8654311911314356_5383156439751233946_n.jpg" className="h-1/2 w-full object-cover border-8 border-[#fff] rounded-bl-[10px] md:border-r-0" />
          </div>
          <img alt="Our Story" src="/images/140385158_3694857573926506_6586025298240270010_n.jpg" width={1536} height={1536} className="w-full h-full object-fill hidden md:block border-8 border-[#fff] rounded-tr-[10px] rounded-br-[10px]" />
        </div>
        <div className="px-2 sm:px-0">
          <h3 className="text-xl py-2 text-[#da9408]">Our Campus</h3>
          <p className="sm:w-[40ch]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae distinctio praesentium voluptates, nam nobis, omnis fuga error esse cupiditate, deleniti tenetur consequatur doloribus accusamus ad quas earum nesciunt hic est. Delectus odit quia similique fuga. Ipsa corrupti impedit facilis nesciunt, neque, quidem veritatis debitis amet perspiciatis molestias hic fugit quos.</p>
          <Link href="/about" className="inline-block mt-5 text-[#da9408] rounded hover:dark:text-white transition-colors capitalize">
            find out more about us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

