import Image from "next/image";
import Link from "next/link";
import { Mail, Twitter, Send, Github } from "lucide-react";
import SMPLAIlogo from "@/assets/2 2.png";

export default function AppFooter() {
  return (
    <footer className="bg-[#091017] text-gray-300">
      <div className="max-w-[1320px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {/* Brand Info */}
        <div className="border-dashed border-r border-[#383D41] w-full">
          <Image
            src={SMPLAIlogo}
            height={125}
            width={125}
            alt="SMPL Money logo"
          />
          <p className="text-sm leading-relaxed pt-4 text-gray-400 max-w-sm">
            SIMPLE AI enhances blockchain security, automation, and development
            with AI-powered insights and smart tools.
          </p>

          <div className="flex space-x-2 mt-6">
            {[Mail, Twitter, Send, Github].map((Icon, i) => (
              <button
                key={i}
                className="backdrop-blur-[10px] bg-[radial-gradient(95.52%_96.38%_at_23%_10%,rgba(76,206,238,0.26),rgba(43,117,136,0)_100%)] p-3 rounded-full border border-[#295366]"
              >
                <Icon className="w-5 h-5 text-[#4CCEEE]" />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-dashed border-r border-[#383D41]">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="#">Product</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Docs</Link>
            </li>
            <li>
              <Link href="#">Buy $SMPL</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="border-dashed border-r border-[#383D41]">
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div className="border-dashed border-r border-[#383D41]">
          <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="#">SMPL GPT</Link>
            </li>
            <li>
              <Link href="#">SMPL PROTECT</Link>
            </li>
            <li>
              <Link href="#">SMPL CREATE</Link>
            </li>
            <li>
              <Link href="#">SMPL AI AGENTS</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-[#4CCEEE] mb-4">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for the latest AI and blockchain updates
          </p>

          <form className="flex items-center bg-[#0f1a23] rounded-full border border-[#4CCEEE] overflow-hidden md:max-w-none">
            <input
              type="email"
              placeholder="Your Email Here"
              className="flex-grow bg-transparent px-3 py-3  text-sm text-gray-300 placeholder-gray-500 outline-none min-w-0"
            />
            <button
              type="submit"
              className="bg-[#4CCEEE] hover:bg-[#36b4d1] text-[#091017] text-sm font-medium px-3 py-3 m-[3px] rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="mx-auto max-w-[1320px] h-[1px] border-dashed border-r border-[#383D41]" />

      {/* Bottom Line */}
      <div className="text-center py-6 text-sm text-gray-500">
        © 2025 SIMPLE AI. All rights reserved.
      </div>
    </footer>
  );
}
