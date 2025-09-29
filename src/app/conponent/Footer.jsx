import FooterMessage from "./FooterMessage";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="footer mt-20">
      <div className=" py-10 px-5 flex flex-col md:flex-row justify-start items-center gap-10">
        <FooterMessage />
        <FooterLinks />
      </div>
      <div className="bg-[#2a0b5f] text-center text-white py-4">
        <p>&copy; {new Date().getFullYear()} Se-Menhyia Royal International School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
