const Heading = ({ heading, subheading }) => {
  return (
    <section className="bg-image text-white text-center flex flex-col justify-center items-center h-60 border-b-8 border-[#da9408]">
      <h1 className="capitalize text-4xl  p-4">{heading}</h1>
      <p className="text-lg p-4">{subheading}</p>
    </section>
  );
};
export default Heading;
