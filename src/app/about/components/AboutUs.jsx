const AboutUs = () => {
  return (
    <section className="container md:mx-auto flex flex-col md:flex-row items-start justify-between gap-8 my-12 px-4">
      <div className="z-10 w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-[#da9408]">About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia veniam odio! Et consectetur praesentium ducimus dolorem vitae nulla repellendus est, necessitatibus rerum esse autem magnam, labore modi? Eligendi, saepe.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos neque consectetur autem qui numquam perferendis porro dolorum, quas repudiandae architecto!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam fugit voluptatibus odit dolor mollitia excepturi, omnis hic ducimus culpa ut sunt debitis sed assumenda magni!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cum, quidem enim quaerat beatae cupiditate. Esse unde reprehenderit quidem nobis molestiae, iste expedita veniam.</p>
      </div>
      <div className="relative w-[60%] mx-auto h-auto md:w-[400px] h-64 md:h-auto mt-4 md:mt-0">
        <img src="/images/afyl_jx6j_230421.jpg" alt="About Us" className="w-full h-auto object-cover" />
        <img src="/images/mind-svgrepo-com.svg" className="w-[30%] absolute top-0 right-0" alt="" />
        <img src="/images/read-svgrepo-com.svg" className="w-[30%] absolute top-0 -left-10 md:-left-10" alt="" />
        <img src="/images/statistics-svgrepo-com.svg" className="w-[30%] absolute bottom-10 -left-14 sm:-left-20 md:-left-24" alt="" />
      </div>
    </section>
  );
};

export default AboutUs;
