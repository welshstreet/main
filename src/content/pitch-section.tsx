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
        >
        <p>
            Traditional meme coins have teams that reserve tokens for liquidity mining and rewards, but WELSH was built differently. WELSH is a community-owned meme coin with 100% of tokens in circulation. There are no teams, no VCs, no DAOs, no more emissions, and no reserve fund for liquidity rewards. This makes WELSH unruggable and truly community-driven. 
        </p>
        <p>
            Being community-driven has its drawbacks — it's difficult to incentivize liquidity providers. Without more WELSH being minted and entering circulation and no way to change the supply, it's difficult for community coins to grow their own markets. This is what we call the <em>Community Coin Paradox.</em>
        </p>
        <p>  
            To grow community coins, it's time to get innovative. This is where Welsh Street comes in.
        </p>
        <p>
            The solution is to take it to the street. The Welsh Street Exchange introduces a rewards system that helps solve the community coin paradox. The rewards token STREET is emitted directly to a rewards contract. The only users who can claim STREET rewards are WELSH / STREET liquidity providers. 
        </p>
        <p>
            The WELSH / STREET liquidity token is called CREDIT. When users provide liquidity to the WELSH / STREET pool they receive CREDIT. CREDIT entitles users to claim STREET rewards. On Welsh Street liquidity providers are referred to as CREDIT holders. 
        </p>
        <p>
            CREDIT holders and CREDIT holders only can claim the STREET rewards. No lock-ups, no complicated staking mechanisms, no withdrawing liquidity to claim — just pure emission rewards emitted into the rewards pool every bitcoin block.
        </p>
    </Content>
    );
}