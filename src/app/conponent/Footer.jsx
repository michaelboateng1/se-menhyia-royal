import FooterMessage from "./FooterMessage";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="footer mt-20">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-10 flex flex-col md:flex-row justify-start md:items-center items-start gap-10">
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
