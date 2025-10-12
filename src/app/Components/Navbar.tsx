"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "@/assests/simple-logo - Copy.png";
import AppButton from "./common/AppButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [templateOpen, setTemplateOpen] = useState(false);

  return (
    <nav className="fixed px-75 w-full top-4 z-50">
      <nav className="text-[15px] rounded-[8px] mx-auto flex items-center justify-between p-[6px] my-3">
        {/* Brand */}
        <Link href="/" className="flex items-center pl-3">
          <Image src={logo} alt="Brand Logo" width={140} height={47} />
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-[#4CCEEE]">
            Home
          </Link>
          <div className="w-[0.1px] h-7 bg-[#FFFFFF1A] mx-24"></div>

          <Link
            href="/"
            className="hover:text-[#4CCEEE] flex items-center gap-1"
          >
            Product <ChevronDown size={16} />
          </Link>
          <Link
            href="/"
            className="hover:text-[#4CCEEE] flex items-center gap-1"
          >
            Feature <ChevronDown size={16} />
          </Link>
          <Link href="/" className="hover:text-[#4CCEEE]">
            About Us
          </Link>
          <Link href="/" className="hover:text-[#4CCEEE]">
            Contact
          </Link>
        </div>
        <AppButton
          className="hover:bg-[#4CCEEE]! hover:border-none w-[125px] h-12"
          title="Sign Up"
        />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 flex flex-col space-y-4">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about-01" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/features-01" className="hover:text-blue-600">
            Features
          </Link>
          <Link
            href="/request-demo"
            className="px-4 py-2 rounded-lg bg-[#B7DB7D] text-white hover:bg-blue-700 transition text-center"
          >
            Request Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
