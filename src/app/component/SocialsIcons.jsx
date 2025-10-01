import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const SocialsIcons = ({ icon }) => {
  return (
    <>
      {icon === "facebook" && <FaFacebook />}
      {icon === "twitter" && <FaXTwitter />}
      {icon === "instagram" && <FaInstagram />}
      {icon === "linkedin" && <FaLinkedin />}
    </>
  );
};

export default SocialsIcons;
