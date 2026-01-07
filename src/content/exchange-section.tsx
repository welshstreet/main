import Content from '@/components/content-creator';

export default function ExchangeSection() {
    return (
    <Content
        id="exchange"
        className="section"
        title="The Welsh Street Exchange and"
        subtitle="The $WELSH Economic Flywheel"
        imageSrc="/whiteboard.png"
        imageAlt="Welsh Corgi in front of a whiteboard presenting the Welsh Street Exchange concept"
        >
        <p>
            $STREET emissions pumped directly into the rewards pool is such a unique concept we needed to build a custom exchange to make it happen.
        </p>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center my-2 gap-8">
            <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-end gap-4">
            <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-relaxed space-y-2">
                <li>
                <strong>Swap:</strong> Trade between $WELSH and $STREET with the custom AMM
                </li>
                <li>
                <strong>Provide:</strong> Add liquidity to get $CREDIT tokens and claim your fair share of rewards
                </li>
                <li>
                <strong>Claim:</strong> $WELSH and $STREET rewards anytime you want. No lock-ups.  No need to withdrawal liquidity.  Just claim.
                </li>
                <li>
                <strong>Build:</strong> Swap your $STREET for more $CREDIT and continue to grow your position.
                </li>
            </ul>
                <p>
                Swap these $STREET rewards for $WELSH, provide more liquidity to get more $CREDIT and earn more $STREET rewards.  It's a flywheel that boosts liquidity and rewards the community for participating.
                </p>
                <p>
                Every swap charges a small fee that feeds back into the system — half goes to growing a community treasury and half goes to the rewards pool. It's a self-sustaining cycle that rewards participation and grows the project over time.
                </p>
                <p>
                Welcome to the $WELSH Economy.
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