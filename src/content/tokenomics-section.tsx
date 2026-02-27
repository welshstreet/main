import Content from '@/components/content-creator';
import TokenomicsChart from '@/components/tokenomics-chart';

export default function TokenomicsSection() {
    return (
    <Content
        id="tokenomics"
        className="section"
        title="Not Just Tokenomics"
        subtitle="Street Smart Tokenomics"
        imageSrc="/money.png"
        imageAlt="A Welsh Corgi sitting in a bathtub throwing money in the air"
        watermark='left'
        >
        <p>
        Welsh Street tokenomics are designed with community participation as the number one and only priority. The initial STREET distribution emphasizes liquidity, and community distribution. The protocol operates with no treasury, no reserves, no insiders, no revenue extraction, and zero developer allocation. True decentralization, just like WELSH.
        </p>
        <p>    
        The initial STREET distribution is split between two key components:
        </p>

        <p>
        <span className="italic">Genesis NFT Event - 3,000,000,000 STREET</span><br/>
        Genesis establishes the initial market structure of the exchange. Early participants provide WELSH to pair against newly minted STREET, forming the foundation of the WELSH / STREET liquidity pool.
        </p>

        <p>
        <span className="italic">Initial Liquidity - 2,000,000,000</span><br/>
        A portion of STREET is paired with WELSH to seed initial liquidity. The liquidity pool activates at the same time as the Genesis NFT event, ensuring that early participants can immediately provide liquidity and receive rewards. 
        </p>

        <TokenomicsChart />
    </Content>
    );
}