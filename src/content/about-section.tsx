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
        watermark='right'
        >
        <p>
        Welcome to Welsh Street — a nod to <em>Wall Street</em>, rebuilt for WELSH, the first dog coin deployed on Bitcoin through Stacks.
        </p>

        <p>
        Welsh Street introduces a purpose-built meme rewards system. Users provide WELSH and STREET to a liquidity pool and receive CREDIT, a tradable liquidity token representing their share of the market. Holding CREDIT receives STREET rewards and trading fees, activating WELSH within a Bitcoin-native DeFi exchange.
        </p>

        <p>
        STREET emissions create continuous market participation. Holders can retain STREET, deploy it in new pools, or exchange it for WELSH within the market. This recurring interaction between fixed-supply WELSH and emission-based STREET forms the economic mechanics of the Welsh ecosystem — powered by meme rewards.
        </p>
    </Content>
    );
}