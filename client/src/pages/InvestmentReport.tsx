import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendingUp, Users, DollarSign, Target, Zap, Activity } from "lucide-react";

// Data for charts
const eldercareMarketData = [
  { year: '2021', value: 9.3 },
  { year: '2025', value: 11.5 },
  { year: '2030', value: 13 }
];

const dataCenterCapacityData = [
  { year: '2025', capacity: 1.35, services: 10.1 },
  { year: '2027', capacity: 3, services: 15.5 },
  { year: '2030', capacity: 5, services: 21.8 }
];

const aiLendingMarketData = [
  { year: '2021', value: 38 },
  { year: '2023', value: 150 },
  { year: '2025', value: 280 },
  { year: '2030', value: 515 }
];

const aiHealthcareMarketData = [
  { year: '2018', value: 0.665 },
  { year: '2021', value: 2.5 },
  { year: '2025', value: 11.78 },
  { year: '2030', value: 28 },
  { year: '2035', value: 65 }
];

const semiconductorMarketData = [
  { year: '2024', india: 52, global: 12.25 },
  { year: '2026', india: 70, global: 15.5 },
  { year: '2028', india: 85, global: 18.8 },
  { year: '2030', india: 105, global: 22.34 }
];

const dataCenterPowerData = [
  { metric: 'DC Capacity', current: 1.45, projected: 8.5 },
  { metric: 'Power Consumption (TWh)', current: 13, projected: 57 },
  { metric: 'Total Grid (GW)', current: 500, projected: 850 },
];

const upiTransactionData = [
  { month: 'Jan', transactions: 15 },
  { month: 'Mar', transactions: 17 },
  { month: 'May', transactions: 18.5 },
  { month: 'Aug', transactions: 20 }
];

const fintechFundingData = [
  { category: 'Lending', value: 135, color: '#991B1B' },
  { category: 'Payments', value: 85, color: '#B91C1C' },
  { category: 'Neobanking', value: 65, color: '#DC2626' },
  { category: 'WealthTech', value: 45, color: '#EF4444' },
  { category: 'InsurTech', value: 30, color: '#F87171' }
];

const healthcareFacilityData = [
  { name: 'Urban Areas (30% pop)', value: 70, color: '#991B1B' },
  { name: 'Rural Areas (70% pop)', value: 30, color: '#EF4444' }
];

const semiconductorInvestmentData = [
  { year: '2023', investment: 5 },
  { year: '2024', investment: 28 },
  { year: '2025E', investment: 65 }
];

const elderDemographicData = [
  { segment: 'Elderly Pop Growth (2021-31)', value: 40, color: '#991B1B' },
  { segment: 'General Pop Growth', value: 8, color: '#EF4444' }
];

const COLORS = ['#991B1B', '#B91C1C', '#DC2626', '#EF4444', '#F87171', '#FCA5A5'];

export default function InvestmentReport() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background">
      {/* Hero Section */}
      <section className="relative bg-primary/5 border-b border-primary/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Investment Intelligence</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground" data-testid="text-report-title">
              India's Next Wave: 5 Sectors Poised for Growth
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              The world is moving at an unprecedented pace and the India growth story train chugs along as it navigates new challenges in AI, semiconductors, consumer, healthcare among others. In this comprehensive report, we provide you with 5 sectors ripe for startups to build in and investments to follow.
            </p>
          </div>

          {/* Key Sectors Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
            {[
              { title: 'Eldercare Tech', icon: Users, color: 'text-primary' },
              { title: 'Data Centers', icon: Activity, color: 'text-primary' },
              { title: 'AI Lending', icon: DollarSign, color: 'text-primary' },
              { title: 'AI Diagnostics', icon: Target, color: 'text-primary' },
              { title: 'EDA & IP', icon: Zap, color: 'text-primary' }
            ].map((sector, idx) => (
              <Card key={idx} className="text-center border-primary/20" data-testid={`sector-card-${idx}`}>
                <CardContent className="pt-6">
                  <sector.icon className={`h-8 w-8 ${sector.color} mx-auto mb-3`} />
                  <h3 className="text-sm font-bold text-foreground">{sector.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sector 1: Technology Enabled Startups in Eldercare */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Technology Enabled Startups in Eldercare</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl">
              Technology-first solutions to address India's rising elderly population through AI, IOT, digital health platforms and assistive technologies. Smart home technology, communication software, and healthcare management platforms represent the highest-value opportunities.
            </p>
          </div>

          {/* Market Opportunity Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Eldercare Market Growth ($B)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={eldercareMarketData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="year" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB' }}
                      formatter={(value: number) => `$${value}B`}
                    />
                    <Bar dataKey="value" fill="#991B1B" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">Market projected to reach $13B by 2030</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Population Growth Comparison (2021-31)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={elderDemographicData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ segment, value }) => `${segment.split('(')[0]}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {elderDemographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">Elderly population growing 5x faster than general population</p>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">77%</div>
                <div className="text-sm text-foreground/70">Urban seniors with smartphones</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">60-75%</div>
                <div className="text-sm text-foreground/70">Revenue from children purchasing for parents</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-foreground/70">Growth in elderly population (2021-31)</div>
              </CardContent>
            </Card>
          </div>

          {/* Catalyst Infographic */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Growth Catalysts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Technology Adoption</h4>
                  <p className="text-sm text-foreground/70">Baby boomers entering senior years with tech-savvy mindset and financial capacity</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Nuclear Families</h4>
                  <p className="text-sm text-foreground/70">Rise of nuclear families creating need for remote monitoring solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">NRI Diaspora</h4>
                  <p className="text-sm text-foreground/70">Growing NRI population seeking tech-enabled care for parents in India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sector 2: Data Center Technologies */}
      <section className="py-16 bg-gray-50/50 dark:bg-background/50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">Data Center Technologies</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl">
              India's digital backbone powering cloud services, AI workloads, and sovereign data hosting. Whitespaces for startups in efficiency technologies, sustainability solutions, and sovereign control platforms.
            </p>
          </div>

          {/* Dual Axis Growth Chart */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Data Center Market Expansion (2025-2030)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={dataCenterCapacityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="year" stroke="#6B7280" />
                    <YAxis yAxisId="left" stroke="#6B7280" label={{ value: 'Capacity (GW)', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#6B7280" label={{ value: 'Services ($B)', angle: 90, position: 'insideRight' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB' }} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="capacity" fill="#991B1B" name="Capacity (GW)" radius={[8, 8, 0, 0]} />
                    <Bar yAxisId="right" dataKey="services" fill="#DC2626" name="Services Market ($B)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">Capacity expanding from 1.35 GW to 5 GW | Services market growing from $10.1B to $21.8B at 16.6% CAGR</p>
              </CardContent>
            </Card>
          </div>

          {/* Power vs Capacity Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Data Center Growth Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dataCenterPowerData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis type="number" stroke="#6B7280" />
                    <YAxis dataKey="metric" type="category" width={150} stroke="#6B7280" />
                    <Tooltip contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB' }} />
                    <Legend />
                    <Bar dataKey="current" fill="#EF4444" name="Current (2025)" radius={[0, 8, 8, 0]} />
                    <Bar dataKey="projected" fill="#991B1B" name="Projected (2030)" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Investment Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold">Data Hall Capex</span>
                      <span className="text-2xl font-bold text-primary">$20B</span>
                    </div>
                    <div className="w-full bg-white/50 rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold">Equity Financing</span>
                      <span className="text-2xl font-bold text-primary">$10B</span>
                    </div>
                    <div className="w-full bg-white/50 rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: '33%' }}></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-primary/20">
                    <div className="flex justify-between">
                      <span className="font-bold">Total Investment Need</span>
                      <span className="text-3xl font-bold text-primary">$30B</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Catalyst Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  AI Application Growth
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">IndiaAI Mission Investment</span>
                  <span className="font-bold text-primary">₹10,372 Cr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">GPUs Deployed</span>
                  <span className="font-bold text-primary">18,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Power Draw Increase</span>
                  <span className="font-bold text-primary">20x per rack</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Data Sovereignty Mandates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">Digital Personal Data Protection Act compliance</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">RBI regulations for data localization</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm">National Data Centre for government data</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sector 3: AI in Lending */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">AI-Powered Lending</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl">
              Integration of AI and ML into the entire credit lifecycle. Leveraging alternative data sources like UPI transactions, GST returns, and digital wallet activity to provide credit access to previously underserved segments.
            </p>
          </div>

          {/* Market Growth Chart */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Digital Lending Market Growth ($B)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={aiLendingMarketData}>
                    <defs>
                      <linearGradient id="lendingGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#991B1B" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#991B1B" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="year" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB' }}
                      formatter={(value: number) => `$${value}B`}
                    />
                    <Area type="monotone" dataKey="value" stroke="#991B1B" fillOpacity={1} fill="url(#lendingGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">Explosive growth from $38B (2021) to $515B (2030) | CAGR: 33%+</p>
              </CardContent>
            </Card>
          </div>

          {/* Fintech Funding Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Fintech Funding Distribution (Q1 2025)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={fintechFundingData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ category, value }) => `${category}: $${value}M`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {fintechFundingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `$${value}M`} />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">Lending commands largest share at $135M, surpassing all other categories</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">UPI Transaction Volume (2025)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={upiTransactionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="month" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" label={{ value: 'Billions', angle: -90, position: 'insideLeft' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB' }}
                      formatter={(value: number) => `${value}B transactions`}
                    />
                    <Line type="monotone" dataKey="transactions" stroke="#991B1B" strokeWidth={3} dot={{ r: 6, fill: '#991B1B' }} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">20B+ transactions/month | ₹24.85 lakh crore value</p>
              </CardContent>
            </Card>
          </div>

          {/* MSME Credit Gap Infographic */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Massive MSME Opportunity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">₹25-30L Cr</div>
                  <div className="text-sm text-foreground/70">MSME Credit Gap</div>
                  <div className="text-xs text-foreground/60 mt-1">($320-400 billion)</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">14%</div>
                  <div className="text-sm text-foreground/70">MSMEs with Formal Finance Access</div>
                  <div className="text-xs text-foreground/60 mt-1">Huge underserved market</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">70%+</div>
                  <div className="text-sm text-foreground/70">Gen Z Prefer App-Based Banking</div>
                  <div className="text-xs text-foreground/60 mt-1">Driving instant loan adoption</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Catalyst Infographic */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Key Growth Catalysts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-primary/5 rounded-xl">
                  <h4 className="font-bold text-lg mb-3 text-primary">Alternative Data Explosion</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• UPI: 20B+ transactions/month</li>
                    <li>• Account Aggregator: 100M consents</li>
                    <li>• ULI: Instant data access</li>
                    <li>• 2.2B financial accounts linked</li>
                  </ul>
                </div>
                <div className="p-6 bg-primary/5 rounded-xl">
                  <h4 className="font-bold text-lg mb-3 text-primary">Investor Confidence</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Largest fintech funding share</li>
                    <li>• $135M in Q1 2025 alone</li>
                    <li>• Surpasses payments sector</li>
                    <li>• Strong VC conviction</li>
                  </ul>
                </div>
                <div className="p-6 bg-primary/5 rounded-xl">
                  <h4 className="font-bold text-lg mb-3 text-primary">Gen Z Expectations</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Instant validation demand</li>
                    <li>• E-commerce-like UX</li>
                    <li>• AI-native interfaces</li>
                    <li>• Minutes vs weeks approval</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sector 4: AI-Powered Diagnostics */}
      <section className="py-16 bg-gray-50/50 dark:bg-background/50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">AI-Powered Diagnostics</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl">
              Application of AI, machine learning, and computer vision to enhance diagnostic accuracy, speed, and accessibility. Addressing India's chronic doctor shortage through scalable AI-enabled testing infrastructure.
            </p>
          </div>

          {/* Market Growth Projection */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">AI Healthcare Market Growth ($B)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={aiHealthcareMarketData}>
                    <defs>
                      <linearGradient id="healthcareGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#991B1B" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#991B1B" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="year" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB' }}
                      formatter={(value: number) => `$${value}B`}
                    />
                    <Area type="monotone" dataKey="value" stroke="#991B1B" fillOpacity={1} fill="url(#healthcareGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">AI contributing $1 trillion to India's economy by 2035</p>
              </CardContent>
            </Card>
          </div>

          {/* Healthcare Mismatch */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Healthcare Infrastructure Mismatch</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={healthcareFacilityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${value}% Facilities`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {healthcareFacilityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value}% of facilities`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">70% facilities in urban areas serving only 30% population</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Proven Impact Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">Qure.ai TB Diagnosis Time</span>
                    <span className="text-lg font-bold text-primary">3 weeks → 2 hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <TrendingUp className="h-3 w-3 text-primary" />
                    <span>29% increase in detection rates</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">Niramai Breast Cancer Accuracy</span>
                    <span className="text-lg font-bold text-primary">+27%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <DollarSign className="h-3 w-3 text-primary" />
                    <span>At 1/3rd the cost of mammography</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">AI Healthcare Investment Growth</span>
                    <span className="text-lg font-bold text-primary">+109%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <Target className="h-3 w-3 text-primary" />
                    <span>Since 2018, showing strong investor confidence</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Thesis Infographic */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Investment Thesis: Two-Layer Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Data Layer */}
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border-2 border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Data Layer</h3>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">Foundational infrastructure for AI diagnostics</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Integrating lab reports, medical images, EHRs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Wearable device streams & patient histories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">ABHA: 560M health IDs issued</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Compliance with Data Protection Act</span>
                    </li>
                  </ul>
                </div>

                {/* Application Layer */}
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border-2 border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Application Layer</h3>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">AI models delivering diagnostic insights</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Autonomous image & lab analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Disease signature detection & flagging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">"Second eye" for physicians</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm">Extending specialist-level diagnostics to rural areas</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Catalyst Section */}
              <div className="mt-8 p-6 bg-white dark:bg-background/50 rounded-xl">
                <h4 className="text-lg font-bold mb-4">Key Catalysts Creating Virtuous Cycle</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">560M</div>
                    <div className="text-xs text-foreground/70">ABHA Health IDs</div>
                    <div className="text-xs text-foreground/60">Building data foundation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">109%</div>
                    <div className="text-xs text-foreground/70">Investment Growth</div>
                    <div className="text-xs text-foreground/60">Since 2018</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">29%</div>
                    <div className="text-xs text-foreground/70">TB Detection Increase</div>
                    <div className="text-xs text-foreground/60">Proven technology impact</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sector 5: EDA and IP in Semiconductors */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-foreground">EDA and IP in Semiconductors</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-4xl">
              Critical upstream segment of the semiconductor value chain. EDA tools and IP cores forming the foundation for all chip design activities. India at an inflection point driven by policy support and global realignment.
            </p>
          </div>

          {/* Market Growth Charts */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Semiconductor Market Projections ($B)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={semiconductorMarketData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="year" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB' }} />
                    <Legend />
                    <Line type="monotone" dataKey="india" stroke="#991B1B" strokeWidth={3} name="India Market" dot={{ r: 6, fill: '#991B1B' }} />
                    <Line type="monotone" dataKey="global" stroke="#DC2626" strokeWidth={3} name="Global EDA/IP Market" dot={{ r: 6, fill: '#DC2626' }} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">India: $52B → $110B (18% CAGR) | Global EDA/IP: $12.25B → $22.34B</p>
              </CardContent>
            </Card>
          </div>

          {/* VC Investment Surge */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">VC Investment Surge ($M)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={semiconductorInvestmentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="year" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB' }}
                      formatter={(value: number) => `$${value}M`}
                    />
                    <Bar dataKey="investment" fill="#991B1B" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">5.6x growth from 2023 to 2024 | Strong momentum continuing</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Startup Ecosystem Snapshot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">Total Semiconductor Startups</span>
                    <span className="text-3xl font-bold text-primary">100+</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-semibold">Focus Areas</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Services</span>
                        <span className="font-bold">65.5%</span>
                      </div>
                      <div className="w-full bg-white/50 rounded-full h-2">
                        <div className="bg-gray-400 h-2 rounded-full" style={{ width: '65.5%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Proprietary IP</span>
                        <span className="font-bold text-primary">34%</span>
                      </div>
                      <div className="w-full bg-white/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '34%' }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/60 mt-3">Substantial whitespace for IP-focused ventures</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* DLI Scheme Benefits */}
          <Card className="border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Design Linked Incentive (DLI) Scheme Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm text-foreground/70">Design Cost Coverage</div>
                  <div className="text-xs text-foreground/60">Up to ₹15 crore cap</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">4-6%</div>
                  <div className="text-sm text-foreground/70">Sales Support</div>
                  <div className="text-xs text-foreground/60">Over 5 years (₹30 crore cap)</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">278</div>
                  <div className="text-sm text-foreground/70">Institutions Enabled</div>
                  <div className="text-xs text-foreground/60">+ 72 startups with EDA/IP access</div>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-background/50 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">DLI Approval Success Rate to Series A</span>
                  <span className="text-2xl font-bold text-primary">10/23 projects</span>
                </div>
                <p className="text-xs text-foreground/60 mt-2">Government validation driving investor confidence</p>
              </div>
            </CardContent>
          </Card>

          {/* Geopolitical Tailwinds */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Converging Catalysts for Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                  <h4 className="font-bold text-lg mb-3 text-primary">Policy Support</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• DLI Scheme: 50% cost coverage</li>
                    <li>• Exploring 80% mask-set subsidy</li>
                    <li>• IndiaAI Mission backing</li>
                    <li>• Government validation mechanism</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                  <h4 className="font-bold text-lg mb-3 text-primary">China+1 Diversification</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• AMD expanding to 3,000 engineers</li>
                    <li>• Qualcomm: 14,000 engineers</li>
                    <li>• NXP: 6,000 engineers</li>
                    <li>• MNC acqui-hire opportunities</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                  <h4 className="font-bold text-lg mb-3 text-primary">Deep-Tech Capital</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• $1B commitment over decade</li>
                    <li>• 92% investor optimism</li>
                    <li>• 63% willing to fund long-gestation IP</li>
                    <li>• Major rounds: Netrasemi (₹107Cr), Mindgrove (₹85Cr)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Summary / Conclusion */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Investment Opportunities Across the Stack</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              From application layer to foundation layer, these five sectors represent India's next wave of venture-scale opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { name: 'Eldercare Tech', market: '$13B by 2030', growth: '40%' },
              { name: 'Data Centers', market: '$21.8B by 2030', growth: '16.6%' },
              { name: 'AI Lending', market: '$515B by 2030', growth: '33%+' },
              { name: 'AI Diagnostics', market: '$1T to economy', growth: '109%' },
              { name: 'EDA & IP', market: '$110B by 2030', growth: '18%' }
            ].map((sector, idx) => (
              <Card key={idx} className="text-center border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">{sector.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-1">{sector.market}</div>
                  <div className="text-sm text-foreground/60">CAGR: {sector.growth}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-3xl mx-auto bg-white/50 dark:bg-background/50 border-primary/20">
              <CardContent className="pt-8 pb-8">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  These sectors represent a strong bet on AI and its applications, creating value across demographics from senior citizens to Gen Z, while solving for sovereign infrastructure and building India's core intellectual property.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
