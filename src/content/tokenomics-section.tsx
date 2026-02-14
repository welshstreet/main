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
        >
        <p>
        Welsh Street tokenomics are designed with community participation as the priority. STREET distribution emphasizes liquidity, long-term alignment, and operational sustainability.
        </p>

        <p> 
        <span className="italic">Emission Rewards - 50%</span><br/>
        A significant portion of STREET supply is allocated to liquidity emissions. STREET is emitted every Bitcoin block and distributed exclusively to WELSH / STREET liquidity providers. Rewards accrue continuously and can be claimed at any time.
        </p>

        <p>
        <span className="italic">Burned Liquidity - 20%</span><br/>
        A portion of STREET is used to seed initial liquidity. The corresponding CREDIT tokens are gradually removed from circulation, reinforcing long-term alignment between liquidity and community participation.
        </p>

        <p>
        <span className="italic">Liquidity Generation Event - Genesis - 10%</span><br/>
        Genesis establishes the initial market structure of the exchange. Early participants provide WELSH to pair against newly minted STREET, forming the foundation of the WELSH / STREET liquidity pool.
        </p>

        <p>
        <span className="italic">Development Allocation - 10%</span><br/>
        A dedicated allocation supports infrastructure, security, hosting, upgrades, and continued development of the Welsh Street Exchange.
        </p>

        <p>
        <span className="italic">Treasury Reserve - 10%</span><br/>
        The treasury allocation is reserved for ecosystem growth initiatives, strategic opportunities, and community-driven expansion of the Welsh Street economy.
        </p>

        <TokenomicsChart />
    </Content>
    );
}