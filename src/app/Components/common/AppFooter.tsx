import { Mail, Twitter, Send, Github } from "lucide-react";
import SMPLAIlogo from "@/assets/2 2.png";
import Image from "next/image";

export default function AppFooter() {
  return (
    <footer className="bg-[#091017] text-gray-300 border-t border-gray-700">
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
            <button className="backdrop-blur-[10px] bg-[radial-gradient(95.52%_96.38%_at_23%_10%,rgba(76,206,238,0.26),rgba(43,117,136,0)_100%)] p-3 rounded-full border border-[#295366]">
              <Mail className="w-5 h-5 text-[#4CCEEE]" />
            </button>
            <button className="backdrop-blur-[10px] bg-[radial-gradient(95.52%_96.38%_at_23%_10%,rgba(76,206,238,0.26),rgba(43,117,136,0)_100%)] p-3 rounded-full border border-[#295366]">
              <Twitter className="w-5 h-5 text-[#4CCEEE]" />
            </button>
            <button className="backdrop-blur-[10px] bg-[radial-gradient(95.52%_96.38%_at_23%_10%,rgba(76,206,238,0.26),rgba(43,117,136,0)_100%)] p-3 rounded-full border border-[#295366]">
              <Send className="w-5 h-5 text-[#4CCEEE]" />
            </button>
            <button className="backdrop-blur-[10px] bg-[radial-gradient(95.52%_96.38%_at_23%_10%,rgba(76,206,238,0.26),rgba(43,117,136,0)_100%)] p-3 rounded-full border border-[#295366]">
              <Github className="w-5 h-5 text-[#4CCEEE]" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-dashed border-r border-[#383D41]">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Buy $SMPL</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="border-dashed border-r border-[#383D41]">
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div className="border-dashed border-r border-[#383D41]">
          <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a href="#">SMPL GPT</a>
            </li>
            <li>
              <a href="#">SMPL PROTECT</a>
            </li>
            <li>
              <a href="#">SMPL CREATE</a>
            </li>
            <li>
              <a href="#">SMPL AI AGENTS</a>
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

          {/* ✅ Centered & Responsive Subscribe Form */}
          <form className="flex items-center bg-[#0f1a23] rounded-full overflow-hidden md:max-w-none">
            <input
              type="email"
              placeholder="Your Email Here"
              className="flex-grow bg-transparent px-3 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none min-w-0"
            />
            <button
              type="submit"
              className="bg-[#4CCEEE] hover:bg-[#36b4d1] text-[#091017] text-sm font-medium px-2 py-2.5 m-[3px] rounded-full transition-all duration-200 whitespace-nowrap"
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
