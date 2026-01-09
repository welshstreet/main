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
            You know the drill by now. NFA. DYOR. This isn't TradFi. $WELSH $STREET operates in the wild west of DeFi. You can lose everything. The crypto market can be unpredictable. Impermanent loss is real. Smart contracts and wallets can have bugs. Your keys; your responsibility.
        </p>
        <p>
            If you want to maximize your gains you'll need to be strategic about how much liquidity you provide, how long you provide it, and how often you change your position.  Even the best strategy can fail before market forces and human behavior take the wheel. Don't invest more than you can risk to lose and please always degen responsibly.
        </p>
        <p>
            We've done our best to layout many of the risks and develop $WELSH $STREET to be a fun, educational, learning experience but risk cannot be ignored.  You can read more about the risk disclaimers in the documentation and terms of service.
        </p>
    </Content>
    );
}