import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo / Site Name */}
        <Link href="/" className="text-xl">
          <Image
            src="/logo/logo.webp"
            width={107}
            height={87}
            alt="brand logo"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/products" className="hover:text-white">
            Products
          </Link>
          <Link href="/login" className="hover:text-white">
            Login
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.facebook.com/abusolaymun.sefat/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/Abusolaymansefat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abu-solayman-sefat/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://portfolio-tau-jet-53.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGlobe />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
