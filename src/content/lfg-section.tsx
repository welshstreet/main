import Content from '@/components/content-creator';

export default function LfgSection() {
    return (
    <Content
        id="lfg"
        className="section"
        title="Web2 had Wall Street"
        subtitle="Web3 has Welsh Street"
        imageSrc="/trading-floor.png"
        imageAlt="Welsh Corgi on the wall street trading floor"
        watermark='left'
        >
        <p>
        Welsh Street is a Bitcoin-native DeFi exchange built for WELSH — where meme culture meets structured liquidity participation. Whether you're here to engage with the community, explore the Meme Rewards protocol, or interact with the autonomous market mechanics, Welsh Street offers new experience in meme tokenomics.
        </p>

        <p>
        Read the documentation. Launch the app. Connect your wallet. Acquire WELSH. Swap for STREET. Provide liquidity and receive CREDIT. Participate in the Meme Rewards protocol and become part of the Welsh Street economy.
        </p>
        <p>
        <em>We Welsh</em>
        </p>
    </Content>
    );
}