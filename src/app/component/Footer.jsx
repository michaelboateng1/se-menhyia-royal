import FooterMessage from "./FooterMessage";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <footer className="footer mt-20">
      <div className="max-w-5xl mx-auto py-10 px-4 md:px-10 flex flex-col md:flex-row justify-start md:items-center md:justify-between items-start gap-20">
        <FooterMessage />
        <FooterLinks />
        <FooterContact />
      </div>
      <div className="bg-[#2a0b5f] text-center text-white py-4">
        <p>&copy; {new Date().getFullYear()} Se-Menhyia Royal International School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
