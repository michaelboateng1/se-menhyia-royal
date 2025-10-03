const ContactForm = () => {
  return (
    <section className="flex justify-start items-start gap-8 p-8 mt-10">
      <form action="" className="flex-1">
        <h2 className="capitalize text-2xl text-[#da9408] mb-2">contact us</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input type="text" placeholder="First Name" className="border-b-4 border-[#da9408] focus:border-b-4 focus:border-[#660908] focus:outline-0 p-2 w-full mb-4" />
          <input type="text" placeholder="Last Name" className="border-b-4 border-[#da9408] focus:border-b-4 focus:border-[#660908] focus:outline-0 p-2 w-full mb-4" />
        </div>
        <input type="email" placeholder="Email" className="border-b-4 border-[#da9408] focus:border-b-4 focus:border-[#660908] focus:outline-0 p-2 w-full mb-4" />
        <textarea name="message" id="message" placeholder="Message" className="border-b-4 border-[#da9408] focus:border-b-4 focus:border-[#660908] focus:outline-0 p-2 w-full mb-4"></textarea>
        <button type="submit" className="bg-[#da9408] text-white px-4 py-2 mt-2 rounded-md hover:bg-[#b27c06] focus:outline-0 transition">
          Submit
        </button>
      </form>
      <div className="hidden md:block max-w-2xl">
        <img src="/images/165639898_3872392762839652_4595636999444007239_n.jpg" alt="" className="w-full h-auto object-cover rounded-2xl drop-shadow-lg" />
      </div>
    </section>
  );
};

export default ContactForm;
