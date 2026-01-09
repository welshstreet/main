import { Buttons } from "@/components/buttons";

export default function HeroSection() {
    return (
        <div id="hero-section" className="section bg-black/10 backdrop-blur-md rounded-3xl text-center space-y-6 sm:space-y-8 md:space-y-12 max-w-5xl w-full mx-auto px-6 sm:px-8 md:px-12 py-8">
            {/* Main Title */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                    Meme Rewards
                    <span className="block bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                        Built on Bitcoin
                    </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
                    $STREET is the first, dedicated liquidity rewards token designed to boost the first dog built on Bitcoin, $WELSH.
                </p>
            </div>

            <Buttons />

            {/* Social Icons Row */}
            <div className="flex justify-center items-center gap-4 sm:gap-6">
                <a
                    href="https://x.com/welshstreet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-12 h-12 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="X (Twitter)"
                >
                    <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                        <path d="M17.53 3H21.5l-7.19 8.21L23 21h-7.38l-5.77-7.07L2.97 21H-1l7.67-8.76L1 3h7.5l5.23 6.41L17.53 3zm-1.05 15.5h2.02L7.59 5.36H5.44l11.04 13.14z" />
                    </svg>
                </a>
                <a
                    href="https://discord.gg/zWzvtVrPeJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Discord"
                >
                    <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                        <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.112.112 0 0 0-.119.056c-.524.908-.995 1.87-1.41 2.882a18.524 18.524 0 0 0-5.292 0 13.09 13.09 0 0 0-1.412-2.882.115.115 0 0 0-.119-.056c-1.432.326-2.797.81-4.117 1.469a.105.105 0 0 0-.051.043C.533 9.045-.32 13.58.099 18.057a.117.117 0 0 0 .045.082c1.733 1.277 3.416 2.052 5.077 2.563a.112.112 0 0 0 .123-.042c.391-.537.74-1.1 1.045-1.684a.112.112 0 0 0-.061-.155c-.552-.21-1.077-.465-1.58-.762a.112.112 0 0 1-.011-.186c.106-.08.213-.162.316-.246a.112.112 0 0 1 .114-.013c3.33 1.522 6.927 1.522 10.217 0a.112.112 0 0 1 .116.012c.104.084.21.167.317.247a.112.112 0 0 1-.01.186c-.504.297-1.03.552-1.582.762a.112.112 0 0 0-.06.155c.305.584.654 1.147 1.045 1.684a.112.112 0 0 0 .123.042c1.671-.511 3.354-1.286 5.077-2.563a.112.112 0 0 0 .045-.082c.5-5.177-.838-9.673-3.548-13.645a.093.093 0 0 0-.05-.043z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}