"use client";

export default function Header() {
  const handleNavClick = (href: string) => {
    // Close the menu by unchecking the checkbox
    const checkbox = document.getElementById('mobile-menu-toggle') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
    
    // Navigate to the link
    window.location.href = href;
  };

  return (
    <>
      {/* Hidden checkbox for state - Outside header for peer selector relationship */}
      <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
      
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
              {/* Hamburger button */}
              <label
                htmlFor="mobile-menu-toggle"
                className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer flex flex-col items-center justify-center w-8 h-8 relative z-[110]"
                aria-label="Toggle menu"
              >
                <span className="block w-6 h-0.5 bg-current transition-all transform origin-center duration-300 peer-checked:rotate-45 peer-checked:translate-y-1.5"></span>
                <span className="block w-6 h-0.5 bg-current mt-1 transition-all transform origin-center duration-300 peer-checked:opacity-0"></span>
                <span className="block w-6 h-0.5 bg-current mt-1 transition-all transform origin-center duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-1.5"></span>
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay - Outside header for true fullscreen */}
      <div className="fixed inset-0 z-[999] bg-black/65 backdrop-blur-sm transition-all duration-500 ease-in-out opacity-0 invisible pointer-events-none -translate-y-full peer-checked:translate-y-0 peer-checked:opacity-100 peer-checked:visible peer-checked:pointer-events-auto">
        {/* Close button (X) in top right */}
        <div className="flex justify-end p-4">
          <label
            htmlFor="mobile-menu-toggle"
            className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
        
        {/* Menu content centered */}
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-6 px-4">
          <span
            className="anchor-link text-2xl text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={() => handleNavClick('/')}
          >
            Home
          </span>
          <span
            className="anchor-link text-2xl text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={() => handleNavClick('/#about')}
          >
            About
          </span>
          <span
            className="anchor-link text-2xl text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={() => handleNavClick('/#tokenomics')}
          >
            Tokenomics
          </span>
          <span
            className="anchor-link text-2xl text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={() => handleNavClick('/#dyor')}
          >
            DYOR
          </span>
          <span
            className="anchor-link text-2xl text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={() => handleNavClick('/#lfg')}
          >
            LFG
          </span>
          <span
            className="anchor-link text-2xl text-white/80 hover:text-white transition-colors cursor-pointer"
            onClick={() => handleNavClick('/')}
          >
            Terms
          </span>
        </div>
      </div>
    </>
  );
}