import Link from "next/link";

const StoryText = () => {
  return (
    <div>
      <h3 className="text-xl py-2 text-[#da9408]">Bomso Campus</h3>
      <p className="md:w-[40ch]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae distinctio praesentium voluptates, nam nobis, omnis fuga error esse cupiditate, deleniti tenetur consequatur doloribus accusamus ad quas earum nesciunt hic est. Delectus odit quia similique fuga. Ipsa corrupti impedit facilis nesciunt, neque, quidem veritatis debitis amet perspiciatis molestias hic fugit quos.</p>
      <Link href="#" className="text-[#da9408]">
        Read more about us
      </Link>
    </div>
  );
};

export default StoryText;
