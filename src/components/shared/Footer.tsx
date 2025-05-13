import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-pink-50 dark:bg-gray-900 text-black dark:text-white pt-12 pb-6 shadow-inner mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center text-center lg:text-left">
        
        <div>
          <h2 className="text-3xl font-bold text-pink-600 mb-2">Makeup Store</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Glam. Beautify. Shine.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold mb-2 text-pink-500">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 hover:text-pink-500 transition">
              <FaHome /> Home
            </Link>
            <Link href="/about" className="flex items-center justify-center lg:justify-start gap-2 hover:text-pink-500 transition">
              <FaInfoCircle /> About
            </Link>
            <Link href="/contact-us" className="flex items-center justify-center lg:justify-start gap-2 hover:text-pink-500 transition">
              <FaPhoneAlt /> Contact
            </Link>
            
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-pink-500">Follow Us</h4>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="#" className="text-white bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-white bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-white bg-pink-500 hover:bg-pink-600 p-2 rounded-full transition">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-pink-600 pt-4 text-sm text-center text-gray-600 dark:text-gray-400">
        © 2025 Makeup Store. All rights reserved.
      </div>
    </footer>
  );
}
