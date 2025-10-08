import { Card, CardContent } from "@/components/ui/card";

const details = [
  { label: "Fund Size", value: "$100M (+$20M green shoe)" },
  { label: "Target IRR", value: "~30%" },
  { label: "Portfolio Construct", value: "~20 companies" },
  { label: "Avg. Cheque Size", value: "$1-3M" },
  { label: "Follow-on Reserve", value: "~60% of fund" },
  { label: "Stake Range", value: "8-15% equity" },
  { label: "Investment Period", value: "4 years" },
  { label: "Fund Tenure", value: "8+1+1 years" }
];

const preferences = [
  "Preference for repeat and experienced entrepreneurs",
  "Clear pathway towards profitability as a key filter",
  "Concentrated, high-conviction bets with depth of capital",
  "Long-term partnership: backing companies from early stages through growth"
];

export default function FundDetails() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-details-title">
            Fund Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-details-subtitle">
            Structured for optimal returns with a disciplined investment approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="text-key-terms">Key Terms</h3>
            <Card>
              <CardContent className="p-6">
                <dl className="space-y-4">
                  {details.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b last:border-0" data-testid={`detail-${index}`}>
                      <dt className="text-muted-foreground">{detail.label}</dt>
                      <dd className="font-semibold text-right">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="text-investment-guidelines">Investment Guidelines</h3>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {preferences.map((pref, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`guideline-${index}`}>
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{pref}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
