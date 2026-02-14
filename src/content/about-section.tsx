import Content from '@/components/content-creator';

export default function AboutSection() {
    return (
    <Content
        id="about"
        className="section"
        title="Welsh Street"
        subtitle="Decentralized Exchange"
        imageSrc="/wall-street.png"
        imageAlt="Welsh Corgi walking down wall street in a suit and tie"
        >
        <p>
            Welcome to Welsh Street — a mnemonic twist on <em>Wall Street</em> built for WELSH, the beloved
            community meme and the first dog coin built on Bitcoin.
        </p>
        <p>
            Welsh Street represents a new tokenomic model in the crypto space. It's the first dedicated meme rewards system designed to boost a community meme coin WELSH. Users provide WELSH and STREET to a liquidity pool and receive CREDIT, a tradable and transferrable liquidity token. Holding CREDIT entitles users to earn STREET rewards. More liquidity benefits the entire WELSH ecosystem, but STREET rewards are designed specifically for user with <em>Street Credit</em>.
        </p>
        <p>
            Once users earn STREET, they can hold it, create pools on secondary markets, or swap it for more WELSH.  When a user swaps STREET for WELSH, buy pressure increases on WELSH.  The more STREET swapped, the more buy pressure on WELSH.  This market dynamic creates a flywheel effect to power the WELSH economy, all made possible by meme rewards.
        </p>
    </Content>
    );
}