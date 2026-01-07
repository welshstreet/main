export default function Footer() {
  return (
    <footer className="relative z-50 h-[80px] sm:h-[100px] bg-background/50 backdrop-blur-md border-t border-black/[.08] dark:border-white/[.145] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Mobile Layout */}
        <div className="flex sm:hidden flex-col justify-center items-center py-4">
          {/* Social icons row */}
          <div className="flex justify-center items-center gap-4 mb-2">
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-link flex items-center justify-center w-6 h-6 text-white/80 transition-colors"
              aria-label="X (Twitter)"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.53 3H21.5l-7.19 8.21L23 21h-7.38l-5.77-7.07L2.97 21H-1l7.67-8.76L1 3h7.5l5.23 6.41L17.53 3zm-1.05 15.5h2.02L7.59 5.36H5.44l11.04 13.14z" />
              </svg>
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-link flex items-center justify-center w-6 h-6 text-white/80 transition-colors"
              aria-label="Discord"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.112.112 0 0 0-.119.056c-.524.908-.995 1.87-1.41 2.882a18.524 18.524 0 0 0-5.292 0 13.09 13.09 0 0 0-1.412-2.882.115.115 0 0 0-.119-.056c-1.432.326-2.797.81-4.117 1.469a.105.105 0 0 0-.051.043C.533 9.045-.32 13.58.099 18.057a.117.117 0 0 0 .045.082c1.733 1.277 3.416 2.052 5.077 2.563a.112.112 0 0 0 .123-.042c.391-.537.74-1.1 1.045-1.684a.112.112 0 0 0-.061-.155c-.552-.21-1.077-.465-1.58-.762a.112.112 0 0 1-.011-.186c.106-.08.213-.162.316-.246a.112.112 0 0 1 .114-.013c3.33 1.522 6.927 1.522 10.217 0a.112.112 0 0 1 .116.012c.104.084.21.167.317.247a.112.112 0 0 1-.01.186c-.504.297-1.03.552-1.582.762a.112.112 0 0 0-.06.155c.305.584.654 1.147 1.045 1.684a.112.112 0 0 0 .123.042c1.671-.511 3.354-1.286 5.077-2.563a.112.112 0 0 0 .045-.082c.5-5.177-.838-9.673-3.548-13.645a.093.093 0 0 0-.05-.043z"
                />
              </svg>
            </a>
            <a
              href="/"
              className="anchor-link flex items-center justify-center w-6 h-6 text-white/80 transition-colors"
              aria-label="Terms and Conditions"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h4" strokeLinecap="round" />
              </svg>
            </a>
          </div>
          
          {/* Attribution text below icons on mobile */}
          <div className="flex justify-center items-center">
            <a
              className="flex items-center justify-center"
              href="https://x.com/enjoywithout"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="anchor-link text-white/80 text-xs text-center">Made with 🧡 by @enjoywithouthey</span>
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid sm:grid-cols-3 items-center h-full">
          {/* Left column - empty */}
          <div></div>

          {/* Center column */}
          <div className="flex justify-center">
            <a
              className="flex items-center gap-2"
              href="https://x.com/enjoywithouthey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="anchor-link text-white/80 text-sm">Made with 🧡 by @enjoywithouthey</span>
            </a>
          </div>

          {/* Right column - Social icons */}
          <div className="flex justify-end items-center gap-4">
            <a
              href="https://x.com/welshstreet"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-link text-white/80 hover:text-white transition-colors p-1"
              aria-label="X (Twitter)"
            >
              <svg width="18" height="18" className="sm:w-[22px] sm:h-[22px]" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M17.53 3H21.5l-7.19 8.21L23 21h-7.38l-5.77-7.07L2.97 21H-1l7.67-8.76L1 3h7.5l5.23 6.41L17.53 3zm-1.05 15.5h2.02L7.59 5.36H5.44l11.04 13.14z"
                />
              </svg>
            </a>
            <a
              href="https://discord.gg/zWzvtVrPeJ"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-link text-white/80 hover:text-white transition-colors p-1"
              aria-label="Discord"
            >
              <svg width="18" height="18" className="sm:w-[22px] sm:h-[22px]" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.112.112 0 0 0-.119.056c-.524.908-.995 1.87-1.41 2.882a18.524 18.524 0 0 0-5.292 0 13.09 13.09 0 0 0-1.412-2.882.115.115 0 0 0-.119-.056c-1.432.326-2.797.81-4.117 1.469a.105.105 0 0 0-.051.043C.533 9.045-.32 13.58.099 18.057a.117.117 0 0 0 .045.082c1.733 1.277 3.416 2.052 5.077 2.563a.112.112 0 0 0 .123-.042c.391-.537.74-1.1 1.045-1.684a.112.112 0 0 0-.061-.155c-.552-.21-1.077-.465-1.58-.762a.112.112 0 0 1-.011-.186c.106-.08.213-.162.316-.246a.112.112 0 0 1 .114-.013c3.33 1.522 6.927 1.522 10.217 0a.112.112 0 0 1 .116.012c.104.084.21.167.317.247a.112.112 0 0 1-.01.186c-.504.297-1.03.552-1.582.762a.112.112 0 0 0-.06.155c.305.584.654 1.147 1.045 1.684a.112.112 0 0 0 .123.042c1.671-.511 3.354-1.286 5.077-2.563a.112.112 0 0 0 .045-.082c.5-5.177-.838-9.673-3.548-13.645a.093.093 0 0 0-.05-.043z"
                />
              </svg>
            </a>
            <a
              href="https://docs.welshstreet.com/docs/terms"
              className="anchor-link text-white/80 hover:text-white transition-colors p-1"
              aria-label="Terms and Conditions"
            >
              <svg width="18" height="18" className="sm:w-[22px] sm:h-[22px]" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}