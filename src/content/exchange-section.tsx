import Content from '@/components/content-creator';

export default function ExchangeSection() {
    return (
    <Content
        id="exchange"
        className="section"
        title="The Welsh Street Exchange and"
        subtitle="The Welsh Economic Flywheel"
        imageSrc="/whiteboard.png"
        imageAlt="Welsh Corgi in front of a whiteboard presenting the Welsh Street Exchange concept"
        >
        <p>
            The Welsh Street rewards system is such a unique concept it required a custom exchange to make it happen. Economic activity on the Welsh Street Exchange looks something like this:
        </p>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center my-2 gap-8">
            <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-end gap-4">
            <ul className="list-disc pl-6 text-base sm:text-lg md:text-xl leading-relaxed space-y-2">
                <li>
                <strong>Swap:</strong> Trade between WELSH and STREET with the custom DEX
                </li>
                <li>
                <strong>Provide:</strong> Add liquidity to get CREDIT and claim your fair share of rewards
                </li>
                <li>
                <strong>Claim:</strong> Withdraw WELSH and STREET rewards anytime. No lock-ups. No need to remove liquidity.
                </li>
                <li>
                <strong>Build:</strong> Swap STREET for more WELSH and grow CREDIT positions.
                </li>
            </ul>
                <p>
                Swap STREET rewards for WELSH, provide more liquidity to get more CREDIT, and earn more STREET rewards.  Every STREET swap puts buy pressure on WELSH. It's an economics flywheel that grows liquidity, boosts the value of WELSH, and rewards the community for participating.
                </p>
                <p>
                This economic engine is better know as Meme Rewards and it powers the new WELSH economy.
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

