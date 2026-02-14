import Content from '@/components/content-creator';

export default function DyorSection() {
    return (
    <Content
        id="dyor"
        className="section"
        title="Not Financial Advice"
        subtitle="Do Your Own Research"
        imageSrc="/boat.png"
        imageAlt="Welsh Corgi driving a yacht and wearing sunglasses"
        >
        <p>
            It is important for a quick reminder: Welsh Street is not a TradFi application. WELSH and STREET operate in the wild west of Bitcoin DeFi. Users can lose everything. The crypto market can be unpredictable. Impermanent loss is real. Smart contracts and wallets can have bugs. Your keys; your responsibility.
        </p>
        <p>
            If users want to maximize gains they will need to be strategic about how much liquidity they provide, how long they provide it, and how often they change liquidity positions and by how much.  Even the best strategy can fail before market forces and human behavior take the wheel. No one should invest more than they are willing to lose.
        </p>
        <p>
            Welsh Street is a novel meme rewards system that is designed to be a fun and educational cryptocurrency experience but risk cannot be ignored.  Please read more about the Risk Disclaimers and review the Terms of Service before using the Welsh Street applications or investing in any of its tokens.
        </p>
    </Content>
    );
}