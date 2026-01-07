export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-md border-b border-black/[.08] dark:border-white/[.145]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px] sm:h-[100px]">
          {/* Left Column - Logo/Brand */}
          <div className="flex items-center">
            <a
              href="https://bitcoin.org/bitcoin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <img
                src="/bitcoin-logo.png"
                alt="Bitcoin Logo"
                className="h-16 w-16 sm:h-16 sm:w-16"
              />
            </a>
          </div>

          {/* Right Column - Hamburger Menu */}
          <div className="relative">
            {/* Hidden checkbox for state */}
            <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
            
            {/* Hamburger button */}
            <label
              htmlFor="mobile-menu-toggle"
              className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer flex flex-col items-center justify-center w-8 h-8"
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-current transition-all transform origin-center duration-300 peer-checked:rotate-45 peer-checked:translate-y-1.5"></span>
              <span className="block w-6 h-0.5 bg-current mt-1 transition-all transform origin-center duration-300 peer-checked:opacity-0"></span>
              <span className="block w-6 h-0.5 bg-current mt-1 transition-all transform origin-center duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-1.5"></span>
            </label>

            {/* Navigation Menu */}
            <div className="absolute top-full right-0 w-64 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg mt-2 transition-all duration-300 transform translate-y-[-10px] opacity-0 invisible peer-checked:translate-y-0 peer-checked:opacity-100 peer-checked:visible">
              <div className="px-4 py-4 space-y-3">
                <a
                  href="/"
                  className="anchor-link block py-2 text-white/80 hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="/#about"
                  className="anchor-link block py-2 text-white/80 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="/#tokenomics"
                  className="anchor-link block py-2 text-white/80 hover:text-white transition-colors"
                >
                  Tokenomics
                </a>
                <a
                  href="/#dyor"
                  className="anchor-link block py-2 text-white/80 hover:text-white transition-colors"
                >
                  DYOR
                </a>
                <a
                  href="/#lfg"
                  className="anchor-link block py-2 text-white/80 hover:text-white transition-colors"
                >
                  LFG
                </a>
                <a
                  href="/"
                  className="anchor-link block py-2 text-white/80 hover:text-white transition-colors"
                >
                  Terms
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}