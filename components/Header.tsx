'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaPrint, FaDownload, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaFloppyDisk, FaCartShopping, FaCloud } from "react-icons/fa6";
import { IoMdSchool, IoMdMail } from "react-icons/io";
import { IoHardwareChip, IoSettings } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

interface HeaderProps {
  staffId?: string;
  docReference: string;
}

const Header = ({ docReference }: HeaderProps) => {
  return (
    <header className="w-full">
      <div className="bg-[#2845a7] text-white">
        {/* Top Contact Bar */}
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mt-3 md:space-x-6">
            <a href="tel:+94713343824" className="flex items-center space-x-2 hover:text-blue-200">
              <FaPhoneAlt className="text-sm" />


              <span>+94 713343824</span>
            </a>
            <a href="mailto:info@cgnia.com" className="flex items-center space-x-2 hover:text-blue-200">
              <IoMdMail className="text-lg" />
              <span>info@cgnia.com</span>
            </a>
          </div>
          {/* Social Media Icons - Hidden on mobile */}
          <div className="flex items-center space-x-2 md:space-x-4">
          <Link href="#" className="hover:text-blue-200">
            <FaFacebook className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <Link href="#" className="hover:text-blue-200">
            <FaSquareXTwitter className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <Link href="#" className="hover:text-blue-200">
            <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
        </div>
        <hr className="border-t border-white/20 m-3" />
        {/* Main Header Content */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image 
                src="/images/logo.png"
                alt="Nexus International Alliance Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h1 className="text-xl font-bold">Nexus International Alliance Pvt Ltd</h1>
                <p className="text-sm">Document Reference: {docReference}</p>
                <p className="text-sm">Reg: PV00255287 | VAT: 1025528-7000</p>
              </div>
            </div>
            {/* Action Buttons - Hidden on mobile */}
            <div className="hidden md:flex space-x-4 text-xl">
            <button className="hover:text-blue-200 transition">
              <FaDownload />
            </button>
            <button className="hover:text-blue-200 transition">
              <FaPrint />
            </button>
            <button className="hover:text-blue-200 transition">
              <FaFloppyDisk />
            </button>
          </div>
          </div>

          {/* Services Bar */}
          <div className="hidden md:flex justify-center space-x-6 mt-6 text-sm">
  <span className="flex items-center space-x-2 hover:text-blue-200 cursor-pointer">
    <IoMdSchool className="text-lg" />
    <span>E-Learning</span>
  </span>
  <span className="flex items-center space-x-2 hover:text-blue-200 cursor-pointer">
    <IoHardwareChip className="text-lg" />
    <span>Electronic</span>
  </span>
  <span className="flex items-center space-x-2 hover:text-blue-200 cursor-pointer">
    <FaCartShopping className="text-lg" />
    <span>E-Commerce</span>
  </span>
  <span className="flex items-center space-x-2 hover:text-blue-200 cursor-pointer">
    <AiFillProduct className="text-lg" />
    <span>Digital Products</span>
  </span>
  <span className="flex items-center space-x-2 hover:text-blue-200 cursor-pointer">
    <IoSettings className="text-lg" />
    <span>Digital Services</span>
  </span>
  <span className="flex items-center space-x-2 hover:text-blue-200 cursor-pointer">
    <FaCloud className="text-lg" />
    <span>Cloud Services</span>
  </span>
</div>
        </div>
      </div>
    </header>
  );
};

export default Header;