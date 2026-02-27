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
        watermark='left'
        >
            <p>
            A quick reminder: Welsh Street is not traditional finance. WELSH and STREET operate within Bitcoin-native DeFi, where markets are volatile and risks are real. Smart contracts can fail. Wallets can be compromised. Impermanent loss exists. Participation always carries the possibility of significant loss.
            </p>

            <p>
            Providing liquidity requires thoughtful risk management. Market conditions change quickly, and no strategy guarantees returns. Allocation size, time horizon, and market behavior all influence outcomes. Only participate with capital you are prepared to lose.
            </p>

            <p>
            Welsh Street is designed to be an innovative and engaging meme rewards experience, but risk should never be overlooked. Please review the full Risk Disclaimer and Terms of Service before using the Welsh Street Exchange or interacting with any associated tokens.
            </p>
    </Content>
    );
}