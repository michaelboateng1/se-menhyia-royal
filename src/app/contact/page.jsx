import Heading from "../component/Heading";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

const Contact = () => {
  return (
    <main className="mt-[100px]">
      <Heading heading="Contact Us" subheading="Get in touch with us for any inquiries or support." />
      <ContactForm />
      <ContactInfo />
    </main>
  );
};

export default Contact;
