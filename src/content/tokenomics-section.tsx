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
        Welsh Street tokenomics are designed to favor the community.  Unlike projects that withhold large portions of tokens for teams, VCs, and advisors, STREET allocates a whopping 80% of its total supply directly to the community. This ensures the users and supporters of the Welsh Street Exchange are the ones who benefit the most.
        </p>
        <p> 
        <span className="italic">Emission Rewards - 50%</span><br/>
        50% of the total STREET supply is set aside to reward liquidity providers through emissions. 50%. Unbelievable. STREET tokens are emitted every bitcoin block and users can claim anytime they want.
        </p>
        <p>
        <span className="italic">Burned Liquidity - 20%</span><br/>
        20% of the STREET supply is minted to seed the initial liquidity pool. The CREDIT tokens are slowly burned over time to ensure an even fairer distribution of CREDIT. All together that's 70% of the total supply earmarked for liquidity and rewards. This type of community distribution is unheard of in crypto.  A true community token like WELSH deserves a true community distribution.
        </p>
        <p>
        <span className="italic">Liquidity Generation Event "Genesis" - 10%</span><br/>
        10% is allocated to genesis, the liquidity generation event to kickstart the Welsh Street Exchange. The LGE gives early adopters, long time community members, and Welsh holders a chance to gain early access to STREET and help make Welsh Street happen. The WELSH raised during genesis goes towards matching the STREET minted to provide the initial liquidity.
        </p>
        <p>
        <span className="italic">Development Allocation - 10%</span><br/>
        10% is set side for the development team. These funds are designed to keep the lights on, pay for hosting, upgrades, security, future developments on the roadmap, and other expenses associated with running a decentralized exchange. The devs also have some interesting ideas for Welsh Street in the future...
        </p>
        <p>
        <span className="italic">Treasury Reserve - 10%</span><br/>
        10% is set side a bootstrap the Welsh Street treasury. These funds are for community growth initiatives such as potential listings, more rewards, meme contests, an NFT collection, marketing, IRl events and anything else the community dreams up. The possibilities are endless when the Welsh community is involved.
        </p>
        <TokenomicsChart />
    </Content>
    );
}