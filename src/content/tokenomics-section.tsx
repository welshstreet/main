import Content from '@/components/content-creator';
import TokenomicsChart from '@/components/tokenomics-chart';

export default function TokenomicsSection() {
    return (
    <Content
        id="tokenomics"
        className="section"
        title="Not Just Better Meme Tokenomics"
        subtitle="STREET Smart Tokenomics"
        imageSrc="/money.png"
        imageAlt="A Welsh Corgi sitting in a bathtub throwing money in the air"
        >
        <p>
        STREET tokenomics are designed to favor the community.  Unlike projects that withhold large portions of tokens for teams, VCs, and advisors, STREET allocates a whopping 80% of its total supply directly to the community through liquidity rewards and the liquidity generation event (LGE). This ensures that the people who use and support the Welsh Street Exchange are the ones who benefit the most.
        </p>
        <p> 
        <span className="italic">Emission Rewards - 50%</span><br/>
        50% of the STREET total supply is set aside to reward liquidity providers through emissions. 50%. Unbelievable. STREET tokens are emitted every bitcoin block and users can claim anytime they want.
        </p>
        <p>
        <span className="italic">Initial Burned Liquidity - 20%</span><br/>
        20% of the STREET supply is minted to seed the initial liquidity pool. The CREDIT tokens are burned and the 20% remains in the liquidity pool, forever. All together that's 70% of the total supply earmarked for liquidity and rewards. This type of community distribution is unheard of in crypto.  A true community token like WELSH deserves a true community DEX.
        </p>
        <p>
        <span className="italic">Liquidity Generation Event "Genesis" - 10%</span><br/>
        10% is allocated to genesis, the liquidity generation event to kickstart the exchange liquidity pool. The LGE gives early adopters, long time community members, and Welsh holders a chance to be early and help make Welsh Street happen.
        </p>
        <p>
        <span className="italic">Dev Allocation - 10%</span><br/>
        10% is set side for the development team. These funds are designed to keep the lights on, pay for hosting, upgrades, security, future development, and other expenses associated with running a decentralized exchange. The devs also have some interesting ideas for Welsh Street in the future...
        </p>
        <p>
        <span className="italic">Treasury Reserve - 10%</span><br/>
        10% is set side for the Welsh Street treasury. This could mean community growth initiatives, listings, airdrops, more rewards, meme contests, an NFT collection, marketing, and anything else the community dreams up. The possibilities are endless when the WELSH community is involved.
        </p>
        <TokenomicsChart />
    </Content>
    );
}