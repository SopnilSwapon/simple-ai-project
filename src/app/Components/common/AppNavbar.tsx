"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/simple-logo - Copy.png";
import AppButton from "./AppButton";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function AppNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Product", href: "/product" },
    { title: "Features", href: "/features" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const featureSubItems = [
    { title: "SMPL GPT", href: "/features/smpl-gpt" },
    { title: "SMPL Protect", href: "/features/smpl-protect" },
    { title: "SMPL Create", href: "/features/smpl-create" },
    { title: "SMPL AI Agents", href: "/features/smpl-ai-agents" },
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
              {item.title === "Features" ? (
                <NavigationMenu>
                  <NavigationMenuItem className="hidden md:block">
                    <NavigationMenuTrigger
                      className={`flex items-center gap-1 text-[18px] transition-colors ${
                        pathname.includes("features")
                          ? "text-[#4CCEEE]"
                          : "text-primary hover:text-[#4CCEEE] font-normal"
                      }`}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-[#0C1E27]">
                      <ul className="grid w-[150px] gap-2 p-2">
                        {featureSubItems.map((sub) => (
                          <li key={sub.title}>
                            <NavigationMenuLink
                              asChild
                              className="bg-[#0C1E27] hover:bg-[#425058] pl-3 rounded-xl hover:text-[#4CCEEE] text-[14px] font-normal"
                            >
                              <Link
                                className={`${
                                  pathname === sub.href
                                    ? "text-[#4CCEEE] border"
                                    : " hover:text-[#4CCEEE] font-normal"
                                }}`}
                                href={sub.href}
                              >
                                {sub.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenu>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 transition-colors ${
                    pathname === item.href
                      ? "text-[#4CCEEE] font-medium"
                      : "text-white hover:text-[#4CCEEE]"
                  }`}
                >
                  {item.title}
                </Link>
              )}

              {/* Divider except last item */}
              {index < navItems.length - 1 && (
                <div className="w-[0.1px] h-7 bg-[#FFFFFF1A]" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block pr-6">
          <AppButton className="bg-white/5 py-2.5!" title="Sign Up" />
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
          {navItems.map((item) =>
            item.title === "Features" ? (
              featureSubItems.map((sub) => (
                <Link
                  key={sub.title}
                  href={sub.href}
                  className={`${
                    pathname === sub.href
                      ? "text-[#4CCEEE] border"
                      : " hover:text-[#4CCEEE] font-normal"
                  }}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {sub.title}
                </Link>
              ))
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className={`hover:text-[#4CCEEE] transition-colors ${
                  pathname === item.href
                    ? "text-[#4CCEEE]"
                    : " hover:text-[#4CCEEE] font-normal"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            ),
          )}

          <AppButton
            className="hover:bg-[#4CCEEE]! max-w-[150px] py-1! hover:border-none backdrop-blur-sm bg-white/5"
            title="Sign Up"
          />
        </div>
      )}
    </nav>
  );
}
