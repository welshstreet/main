export function Buttons() {
    return (
        <div className="btn-container">
            <div className="flex gap-3 sm:gap-4 md:gap-6 flex-col sm:flex-row justify-center items-center max-w-sm sm:max-w-lg mx-auto">
                <a
                    id="btn-buy"
                    className="btn-main whitespace-nowrap"
                    href="https://docs.welshstreet.com/docs/welshcorgicoin#buy-welsh"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    BUY $WELSH
                </a>
                <a
                    id="btn-app"
                    className="btn-main whitespace-nowrap"
                    href="https://app.welshtest.net"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LAUNCH APP
                </a>
                <a
                    id="btn-docs"
                    className="btn-main whitespace-nowrap"
                    href="https://docs.welshstreet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    READ DOCS
                </a>
            </div>
        </div>

    )
}




