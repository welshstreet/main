interface BannerProps {
    show?: boolean;
    children?: React.ReactNode;
}

export default function Banner({ show = true, children }: BannerProps) {
    return (
        <div
            className={`banner-outer h-10 w-full p-0.5 ${show ? 'block' : 'hidden'}`}
            id="banner"
        >
            <a href="/" className="banner-inner h-full w-full bg-black/95 relative block">
                <div className="flex items-center justify-center h-full text-md text-white/90 font-bold px-4">
                    {children}
                </div>
            </a>
        </div>
    );
}