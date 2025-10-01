import Link from "next/link";
const Calltoaction = () => {
  return (
    <section className="mt-20 py-12 background-pattern">
      <div className="container mx-auto px-4 py-12 text-center text-white rounded-lg callto-action">
        <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
        <p className="mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta fugiat voluptas neque quasi?</p>
        <Link href="/admission" className="bg-white text-[#2a0b5f] capitalize font-semibold py-2 px-4 rounded-lg">
          apply now
        </Link>
      </div>
    </section>
  );
};

export default Calltoaction;
