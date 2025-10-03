import FreaquentlyAskedQuestions from "@/app/component/FreaquentlyAskedQuestions";
import WhyOurSchool from "../components/WhyOurSchool";

const faq = [
  {
    question: "Somthing is wrong with your school?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ratione eveniet, id est perferendis libero aperiam architecto ipsum reiciendis iusto doloremque debitis quos exercitationem iste? Repellat accusantium provident tenetur quos voluptate distinctio facilis! Maxime et beatae provident officiis voluptates atque animi, eum in incidunt modi, autem quod nemo velit perferendis.",
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ratione eveniet, id est perferendis libero aperiam architecto ipsum reiciendis iusto doloremque debitis quos exercitationem iste? Repellat accusantium provident tenetur quos voluptate distinctio facilis! Maxime et beatae provident officiis voluptates atque animi, eum in incidunt modi, autem quod nemo velit perferendis.",
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ratione eveniet, id est perferendis libero aperiam architecto ipsum reiciendis iusto doloremque debitis quos exercitationem iste? Repellat accusantium provident tenetur quos voluptate distinctio facilis! Maxime et beatae provident officiis voluptates atque animi, eum in incidunt modi, autem quod nemo velit perferendis.",
  },
  {
    question: "Lorem ipsum dolor sit amet.",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ratione eveniet, id est perferendis libero aperiam architecto ipsum reiciendis iusto doloremque debitis quos exercitationem iste? Repellat accusantium provident tenetur quos voluptate distinctio facilis! Maxime et beatae provident officiis voluptates atque animi, eum in incidunt modi, autem quod nemo velit perferendis.",
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <main className="mt-[100px]">
      <WhyOurSchool />
      <FreaquentlyAskedQuestions faq={faq} />
    </main>
  );
};

export default FrequentlyAskedQuestions;
