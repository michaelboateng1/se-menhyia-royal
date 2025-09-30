import Link from "next/link";

const FooterLinks = () => {
  return (
    <nav className="text-[#ffffff] mt-8 md:mt-0">
      <h3 className="font-bold">Links</h3>
      <ul className="list-none space-y-2">
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/privacy">Admission</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterLinks;
