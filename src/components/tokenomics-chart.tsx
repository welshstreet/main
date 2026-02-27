interface TokenomicsItem {
  label: string;
  amount: number;
  color: string;
}

const tokenomicsData: TokenomicsItem[] = [
  {
    label: "Genesis NFT Event",
    amount: 3000000000,
    color: "bg-green-400"
  },
  {
    label: "Initial Liquidity",
    amount: 2000000000,
    color: "bg-blue-400"
  },
];

interface TokenomicsProps {
  title?: string;
  className?: string;
}

export default function TokenomicsChart({
  title = "Street Smart Tokenomics",
  className = ""
}: TokenomicsProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-6 ${className}`}>
      {/* Tokenomics Breakdown */}
      <div className="w-full max-w-md bg-black/10 rounded-xl p-6 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-white mb-4 text-center">{title}</h3>
        <div className="space-y-3">
          {tokenomicsData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`inline-block w-4 h-4 rounded-full ${item.color}`} />
                <span className="text-white/90">{item.label}</span>
              </div>
                <span className="text-white font-semibold">{item.amount.toLocaleString('en-US', { maximumFractionDigits: 0 })} STREET</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}