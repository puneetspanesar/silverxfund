const whatSetsUsApart = [
  { text: "Operator VC Model", bold: true },
  { text: "Founders and partners with real-world scaling experience", bold: false },
  { text: "Deep Research Orientation", bold: true },
  { text: "Constant monitoring of M&A patterns, founder behavior, and category evolution", bold: false },
  { text: "Active mentoring and guidance to startups across GTM, hiring, compliances, and fund raise", bold: false },
  { 
    text: "Exit Strategy (4–6 Years)", 
    bold: true,
    subitems: [
      "Targeting high-growth sectors",
      "Understanding M&A appetite in those categories",
      "Backed by a strong research and transaction team"
    ]
  }
];

const fundLegacy = [
  "16 investments across high-potential segments",
  "MOICs reported up to 75x",
  "$5 Bn+ in cumulative portfolio value created",
  "Successful exits: Byju's, Muthoot Finance, Netcore, Unacademy and others",
  "Investor Base: India, Dubai, USA, Singapore, Europe",
  "LP Profile: Family Offices, HNIs, Government Institutions",
  "Gender Ratio: 40% Female, 60% Male"
];

export default function FundDetails() {
  return (
    <section className="py-40 bg-primary text-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* What Sets Us Apart */}
          <div>
            <div className="bg-white inline-block mb-12 rounded-md">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary px-8 py-4" data-testid="text-sets-apart-title">
                What Sets Us Apart
              </h2>
            </div>
            <ul className="space-y-4">
              {whatSetsUsApart.map((item, index) => (
                <li 
                  key={index} 
                  className={`leading-relaxed text-lg ${item.bold ? 'font-bold' : ''} [&>ul]:list-none [&>ul]:ml-6 [&>ul]:mt-2 [&>ul]:space-y-2 [&>ul>li]:font-normal [&>ul>li]:text-white/95 [&>ul>li]:before:content-['○'] [&>ul>li]:before:mr-3`}
                  data-testid={`apart-item-${index}`}
                >
                  {item.text}
                  {item.subitems && (
                    <ul>
                      {item.subitems.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Fund I Legacy */}
          <div>
            <div className="bg-white inline-block mb-12 rounded-md">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary px-8 py-4" data-testid="text-legacy-title">
                Fund I Legacy
              </h2>
            </div>
            <ul className="space-y-4 [&>li]:before:content-['•'] [&>li]:before:mr-3">
              {fundLegacy.map((item, index) => (
                <li key={index} className="leading-relaxed text-lg" data-testid={`legacy-item-${index}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
