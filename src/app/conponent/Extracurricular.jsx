import ExtracurricularCard from "./ExtracurricularCard";

const curriculum = [
  {
    cardImage: "165241263_3872392792839649_5614509530255848085_n (1).jpg",
    cardImageAltText: "Abacus Traning",
    cardTitle: "Abacus Traning",
    cardBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, praesentium! Velit impedit voluptas tenetur, commodi cumque quisquam molestias praesentium saepe eaque provident animi sit assumenda id in! Omnis facilis et quos sit error voluptatibus dolore obcaecati, dolorem laborum corporis vel sequi corrupti eaque dicta sint ad voluptates ex doloribus ipsam.",
    instituteImage: "1671183047248.jpeg",
    instituteAltText: "Smart Tribe Logo Image",
  },
  {
    cardImage: "482226642_9393237557421784_8538544568944101409_n.jpg",
    cardImageAltText: "Abacus Traning",
    cardTitle: "Coding Traning",
    cardBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam mollitia dignissimos veritatis reprehenderit! Delectus aliquid nesciunt quos soluta, illum dolores non assumenda optio molestiae accusantium provident nisi culpa doloremque.",
    instituteImage: "1671183047248.jpeg",
    instituteAltText: "Smart Tribe Logo Image",
  },
  {
    cardImage: "Untitled.jpeg",
    cardImageAltText: "Abacus Traning",
    cardTitle: "Robotics Traning",
    cardBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae soluta ab alias maiores quas placeat vitae doloribus eaque praesentium eligendi, at cupiditate natus adipisci autem! Reiciendis eaque esse obcaecati quisquam?",
    instituteImage: "1671183047248.jpeg",
    instituteAltText: "Smart Tribe Logo Image",
  },
  {
    cardImage: "469218438_8843340022411543_302253053401079749_n.jpg",
    cardImageAltText: "Home Economics",
    cardTitle: "Home Economics",
    cardBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur laboriosam natus dolorum dolore eveniet, voluptatum magnam numquam. Dolor qui enim assumenda aliquid minus ut nobis similique? Aliquam corrupti cum, dicta, ullam amet temporibus illum consequatur quasi laboriosam et aut qui.",
    instituteImage: "images.jpeg",
    instituteAltText: "School Logo Image",
  },
];

const Extracurricular = () => {
  return (
    <section className="container mt-5 py-5 px-10">
      <h2 className="text-2xl text-[#da9408] py-5 px-3 md:px-5 uppercase md:text-center md:w-[300px] text-nowrap mb-20 md:mx-auto md:border-b-4 md:border-[#da9408]">extracurricular</h2>
      <div className="container grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {curriculum.map((curriculum, i) => (
          <ExtracurricularCard key={i} {...curriculum} />
        ))}
      </div>
      <p></p>
    </section>
  );
};

export default Extracurricular;
