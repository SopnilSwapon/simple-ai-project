import { Mail, Twitter, Send, Github } from "lucide-react";

export default function AppFooter() {
  return (
    <footer className="bg-[#091017] text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-[#4CCEEE] mb-4">
            SMPL<span className="text-white">AI</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            SIMPLE AI enhances blockchain security, automation, and development
            with AI-powered insights and smart tools.
          </p>

          <div className="flex space-x-4 mt-6">
            <button className="bg-[#0f1a23] hover:bg-[#16242f] p-3 rounded-full border border-gray-700 transition">
              <Mail className="w-5 h-5 text-[#4CCEEE]" />
            </button>
            <button className="bg-[#0f1a23] hover:bg-[#16242f] p-3 rounded-full border border-gray-700 transition">
              <Twitter className="w-5 h-5 text-[#4CCEEE]" />
            </button>
            <button className="bg-[#0f1a23] hover:bg-[#16242f] p-3 rounded-full border border-gray-700 transition">
              <Send className="w-5 h-5 text-[#4CCEEE]" />
            </button>
            <button className="bg-[#0f1a23] hover:bg-[#16242f] p-3 rounded-full border border-gray-700 transition">
              <Github className="w-5 h-5 text-[#4CCEEE]" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
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
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
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
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-400">
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
          <form className="flex items-center bg-[#0f1a23] rounded-full overflow-hidden border border-gray-700">
            <input
              type="email"
              placeholder="Your Email Here"
              className="bg-transparent px-4 py-2 text-sm text-gray-300 flex-grow outline-none"
            />
            <button
              type="submit"
              className="bg-[#4CCEEE] hover:bg-[#36b4d1] text-[#091017] text-sm font-medium px-5 py-2 rounded-full m-1"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-500">
        © 2025 SIMPLE AI. All rights reserved.
      </div>
    </footer>
  );
}
