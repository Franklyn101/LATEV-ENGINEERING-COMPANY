import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B1C1E] text-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">

          {/* LOGO + MESSAGE */}
          <div className="flex flex-col items-center lg:items-start max-w-sm">
            <Image
              src="/images/logonobg.png"
              width={140}
              height={48}
              alt="Latev Engineering Services Logo"
              className="mb-4 transition-all hover:scale-105"
            />

            <p className="text-gray-300 text-sm leading-relaxed text-center lg:text-left">
              Delivering innovative engineering, sustainable solutions, and
              reliable professional services across Nigeria — built on trust,
              precision, and excellence.
            </p>
          </div>

          {/* LINK SECTION */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-center lg:text-left">

            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wide">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="footer-link">About Us</a>
                </li>
                <li>
                  <a href="/services" className="footer-link">Services</a>
                </li>
                <li>
                  <a href="/provider" className="footer-link">Providers</a>
                </li>
                <li>
                  <a href="/contact" className="footer-link">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wide">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="/faq" className="footer-link">FAQ</a>
                </li>
                <li>
                  <a href="/help-center" className="footer-link">Help Center</a>
                </li>
                <li>
                  <a href="/privacy" className="footer-link">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="footer-link">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wide">
                Location
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                No. 3 Lekki Phase 1 <br />
                Lagos, Nigeria
              </p>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="text-gray-400 text-center">
            © 2025 Latev Engineering Services Ltd. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="social-icon" target="_blank" aria-label="Twitter" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path fill="#D0D5DD" d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0ZM7.12 20.452H3.558V8.995H7.12v11.457ZM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125Zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286Z"></path>
              </svg>
            </a>
            <a className="social-icon" target="_blank" aria-label="LinkedIn" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="none">
                <path fill="#D0D5DD" d="M7.55 19.75c9.055 0 14.008-7.503 14.008-14.008 0-.21-.004-.426-.014-.637A9.999 9.999 0 0 0 24 2.555c-.898.4-1.85.66-2.826.774A4.95 4.95 0 0 0 23.339.606a9.897 9.897 0 0 1-3.126 1.195 4.93 4.93 0 0 0-8.394 4.49A13.985 13.985 0 0 1 1.673 1.15a4.93 4.93 0 0 0 1.523 6.57 4.93 4.93 0 0 1-2.23-.614v.061a4.922 4.922 0 0 0 3.95 4.828 4.894 4.894 0 0 1-2.221.085A4.934 4.934 0 0 0 7.292 15.5 9.875 9.875 0 0 1 0 17.54a13.969 13.969 0 0 0 7.55 2.211Z"></path>
              </svg>
            </a>
            <a className="social-icon" target="_blank" aria-label="YouTube" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none"><path fill="#D0D5DD" d="M23.76 4.2s-.233-1.655-.955-2.381C21.89.862 20.869.858 20.4.8 17.044.558 12.005.558 12.005.558h-.01S6.956.558 3.6.8C3.131.858 2.11.862 1.195 1.82c-.722.726-.951 2.38-.951 2.38S0 6.146 0 8.087v1.818c0 1.941.24 3.886.24 3.886s.233 1.655.95 2.382c.915.956 2.115.923 2.65 1.026 1.92.183 8.16.24 8.16.24s5.044-.01 8.4-.25c.469-.055 1.49-.06 2.405-1.016.722-.727.956-2.382.956-2.382S24 11.85 24 9.904V8.086c0-1.94-.24-3.886-.24-3.886ZM9.52 12.112V5.367l6.483 3.384-6.483 3.361Z"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
