"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/simple-logo - Copy.png";
import AppButton from "./AppButton";

export default function AppNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Product", href: "/product" },
    { title: "Feature", href: "/feature" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed mx-auto w-full h-24 backdrop-blur-sm bg-[#060C12] pt-[5px] z-50">
      <div className="text-[18px] max-w-[1320px] rounded-[8px] mx-auto flex items-center justify-between p-[6px] my-3">
        {/* Brand */}
        <Link href="/" className="flex items-center pl-3">
          <Image src={logo} alt="Brand Logo" width={140} height={47} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <div key={item.title} className="flex items-center space-x-6">
              <Link
                href={item.href}
                className={`flex items-center gap-1 transition-colors ${
                  pathname === item.href
                    ? "text-[#4CCEEE] font-medium"
                    : "text-white hover:text-[#4CCEEE]"
                }`}
              >
                {item.title}
                {(item.title === "Product" || item.title === "Feature") && (
                  <ChevronDown size={16} />
                )}
              </Link>

              {/* Divider except last item */}
              {index < navItems.length - 1 && (
                <div className="w-[0.1px] h-7 bg-[#FFFFFF1A]" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block pr-6">
          <AppButton className="bg-white/5" title="Sign Up" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (below 900px) */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#060C12] border-t border-[#1E293B] px-4 py-4 flex flex-col space-y-4 text-white">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-1 transition-colors ${
                pathname === item.href
                  ? "text-[#4CCEEE] font-medium"
                  : "hover:text-[#4CCEEE]"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.title}
              {(item.title === "Product" || item.title === "Feature") && (
                <ChevronDown size={16} />
              )}
            </Link>
          ))}

          <AppButton
            className="hover:bg-[#4CCEEE]! hover:border-none backdrop-blur-sm bg-white/5"
            title="Sign Up"
          />
        </div>
      )}
    </nav>
  );
}
