import Content from '@/components/content-creator';

export default function PitchSection() {
    return (
    <Content
        id="pitch"
        className="section"
        title="Community Meme Coins deserve"
        subtitle="Dedicated Meme Rewards"
        imageSrc="/laptop.png"
        imageAlt="Welsh Corgi sitting at a laptop in a busy office"
        watermark='left'
        >
        <p>
        Most meme coins retain token reserves for liquidity mining and incentives. WELSH was built differently. Its entire supply is in circulation, with no treasury allocation, no ongoing emissions, and no centralized mint authority. The monetary policy is fixed and immutable.
        </p>

        <p>
        That structure preserves scarcity — but it also introduces a challenge. Without new token issuance, there is no native incentive mechanism to attract and sustain liquidity providers. This tension between fixed supply and market incentives is what we call the <em>Community Coin Paradox.</em>
        </p>

        <p>
        WELSH’s supply cannot change. Welsh Street builds the incentive layer around it.
        </p>

        <p>
        As the minting of more WELSH is impossible, the exchange introduces a separate rewards asset: STREET. STREET is emitted into a rewards contract and distributed exclusively to WELSH / STREET liquidity providers.
        </p>

        <p>
        When users provide liquidity to the WELSH / STREET pool, they receive CREDIT — a transferable liquidity token representing their proportional share of the market. Holding CREDIT enables users to claim STREET emissions.
        </p>

        <p>
        No lock-ups. No staking contracts. No liquidity withdrawal required to claim rewards. STREET emissions are allocated to CREDIT holders every Bitcoin block, creating a recurring incentive layer while preserving WELSH's fixed supply.
        </p>
    </Content>
    );
}




