import Content from '@/components/content-creator';

export default function ExchangeSection() {
    return (
    <Content
        id="exchange"
        className="section"
        title="The Welsh Street Exchange and"
        subtitle="The Meme Rewards System"
        imageSrc="/whiteboard.png"
        imageAlt="Welsh Corgi in front of a whiteboard presenting the Welsh Street Exchange concept"
        watermark='left'
        >
            <p>
            The Welsh Street rewards model introduces a new market dynamic built specifically for WELSH. Economic activity on the exchange follows a simple cycle:
            </p>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center my-2 gap-8">
            <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-end gap-4">
                <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-relaxed space-y-2">
                <li>
                    <strong>Swap:</strong> Trade between WELSH and STREET on the custom DEX
                </li>
                <li>
                    <strong>Provide:</strong> Add liquidity to receive CREDIT and participate in rewards
                </li>
                <li>
                    <strong>Claim:</strong> Claim WELSH and STREET rewards at any time — no lock-ups and no liquidity withdrawal required
                </li>
                <li>
                    <strong>Build:</strong> Reallocate STREET into WELSH or mint additional CREDIT
                </li>
                </ul>
                <p>
                STREET emissions introduce recurring participation. As liquidity providers claim and redeploy rewards, ongoing swaps generate trading volume and fee activity within the WELSH / STREET market.
                </p>
                <p>
                The interaction between fixed-supply WELSH and emission-based STREET creates a recurring liquidity cycle — the Meme Rewards protocol powering the WELSH ecosystem.
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <img
                src="/flowchart.png"
                alt="Welsh Street Exchange Flowchart"
                className="max-w-full h-auto rounded-lg shadow-md"
                style={{ maxWidth: '400px', width: '100%' }}
                loading="lazy"
                />
            </div>
            </div>
    </Content>
    );
}

