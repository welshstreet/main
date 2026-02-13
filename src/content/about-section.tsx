import Content from '@/components/content-creator';

export default function AboutSection() {
    return (
    <Content
        id="about"
        className="section"
        title="Welsh Street"
        subtitle="Dedicated Meme DEX"
        imageSrc="/wall-street.png"
        imageAlt="Welsh Corgi walking down wall street in a suit and tie"
        >
        <p>
            Welcome to Welsh Street — a mnemonic twist on "Wall Street" built for WELSH, the beloved
            community meme and the first dog coin built on Bitcoin.
        </p>
        <p>
            STREET represents a new tokenomic in the crypto space: The first dedicated <em>liquidity rewards token</em> designed to boost a community meme coin.  Users provide WELSH and STREET to a liquidity pool and earn STREET as rewards. The only way to get STREET is to provide liquidity. Of course more liquidity benefits the entire WELSH ecosystem, but STREET is designed to reward liquidity providers and liquidity providers only.
        </p>
        <p>
            Once users earn STREET, they can hold it, create pools on secondary markets, or better yet, swap it for more WELSH.  When you swap STREET for WELSH, this creates buying pressure on WELSH.  The more STREET is swapped for WELSH, the more buying pressure is created.  This creates a flywheel effect that benefits the WELSH economy. Welcome to meme rewards.
        </p>
    </Content>
    );
}