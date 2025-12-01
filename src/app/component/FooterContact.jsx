import Link from "next/link";

const FooterContact = () => {
  return (
    <nav className="text-[#ffffff] mt-8 md:mt-0">
      <h3 className="font-bold">Our Contact</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <ul className="list-none space-y-2">
        <li>
          <p>KNUST</p>
        </li>
        <li>
          <Link href="mailto:email@gmail.com">email@gmail.com</Link>
        </li>
        <li>
          <Link href="tel:+2332638920281">+233 2638920281</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterContact;
