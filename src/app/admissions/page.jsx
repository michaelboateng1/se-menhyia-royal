import Heading from "../component/Heading";
import AdmissionsInfo from "./components/AdmissionsInfo";

const admissions = [
  {
    title: "Primary Admissions",
    description: "We announces for the information of the general public, applicants, parents and guardians that applications are open for the admission of prospective applicants for the 2025/2026 academic year.",
    imageUrl: "/images/469020946_8843340025744876_3157290728349908696_n.jpg",
    altText: "Primary Admissions",
  },
  {
    title: "Secondary Admissions",
    description: "We announces for the information of the general public, applicants, parents and guardians that applications are open for the admission of prospective applicants for the 2025/2026 academic year.",
    imageUrl: "/images/469020946_8843340025744876_3157290728349908696_n.jpg",
    altText: "Secondary Admissions",
  },
  {
    title: "Secondary Admissions",
    description: "We announces for the information of the general public, applicants, parents and guardians that applications are open for the admission of prospective applicants for the 2025/2026 academic year.",
    imageUrl: "/images/469020946_8843340025744876_3157290728349908696_n.jpg",
    altText: "Secondary Admissions",
  },
  {
    title: "Secondary Admissions",
    description: "We announces for the information of the general public, applicants, parents and guardians that applications are open for the admission of prospective applicants for the 2025/2026 academic year.",
    imageUrl: "/images/469020946_8843340025744876_3157290728349908696_n.jpg",
    altText: "Secondary Admissions",
  },
];

const Admissions = () => {
  return (
    <main className="mt-[100px]">
      <Heading heading="Admissions" subheading="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem." />
      <AdmissionsInfo admissions={admissions} />
    </main>
  );
};

export default Admissions;
