import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendingUp, Users, DollarSign, Target, Zap, Activity, Home, Heart, Brain, Shield, Database, Cloud, Cpu, Lock, TrendingDown, Smartphone, Building2, LineChart as LineChartIcon, CheckCircle2, ArrowRight } from "lucide-react";

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

const evChipValueData = [
  { type: 'ICE Vehicle', value: 312 },
  { type: 'EV', value: 600 }
];

const COLORS = ['#991B1B', '#B91C1C', '#DC2626', '#EF4444', '#F87171', '#FCA5A5'];

export default function InvestmentReport() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background">
      {/* Hero Section */}
      <section className="relative bg-primary/5 border-b border-primary/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-block mb-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Investment Intelligence</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground" data-testid="text-report-title">
              India's Next Wave: 5 Sectors Poised for Growth
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Backing the winning horses that will build for India, and the world
            </p>
          </div>

          {/* Challenge & Opportunity Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-red-50/50 to-white dark:from-red-950/20 dark:to-background">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <TrendingDown className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">The Challenge</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground/80">Deglobalization reshaping supply chains</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground/80">Technological sovereignty becoming critical</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground/80">Tariffs and trade barriers increasing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground/80">Rapid pace of change in AI, semiconductors, healthcare</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-white dark:from-primary/10 dark:to-background">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">The Opportunity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">Build sovereign infrastructure for India</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">Create core IP for the technology stack</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">Power critical sectors with AI innovation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">Generate financial & nation-building value</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Stack Visual - Foundation to Application */}
          <div className="mb-12 max-w-5xl mx-auto">
            <Card className="border-primary/20 bg-white/50 dark:bg-background/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">A Strong Bias Towards AI</CardTitle>
                <CardDescription>Creating a virtuous cycle from foundation to application layer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Foundation Layer */}
                  <div>
                    <div className="p-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border-2 border-primary/30">
                      <div className="flex items-center gap-2 mb-4">
                        <Database className="h-6 w-6 text-primary" />
                        <h4 className="font-bold text-lg">Foundation Layer</h4>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-primary/70" />
                          <span className="text-sm">EDA & Semiconductors</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Cloud className="h-4 w-4 text-primary/70" />
                          <span className="text-sm">Data Centers</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Virtuous Cycle */}
                  <div className="flex items-center justify-center">
                    <div className="p-6 bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl border-2 border-primary/30 text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-bold mb-2">Virtuous Cycle</h4>
                      <p className="text-xs text-foreground/70">Value created at both layers</p>
                    </div>
                  </div>

                  {/* Application Layer */}
                  <div>
                    <div className="p-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border-2 border-primary/30">
                      <div className="flex items-center gap-2 mb-4">
                        <Brain className="h-6 w-6 text-primary" />
                        <h4 className="font-bold text-lg">Application Layer</h4>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary/70" />
                          <span className="text-sm">AI Lending</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="h-4 w-4 text-primary/70" />
                          <span className="text-sm">AI Diagnostics</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow between Foundation and Virtuous Cycle */}
                  <div className="hidden md:block absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>

                  {/* Arrow between Virtuous Cycle and Application */}
                  <div className="hidden md:block absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Demographic Range Visual */}
          <div className="mb-12 max-w-5xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Serving Diverse Demographics</CardTitle>
                <CardDescription>From senior citizens to Gen Z, across multiple sectors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-white dark:from-primary/15 dark:to-background rounded-xl">
                    <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Senior Citizens</h4>
                    <p className="text-xs text-foreground/60">Eldercare tech solutions</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-white dark:from-primary/15 dark:to-background rounded-xl">
                    <Building2 className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h4 className="font-bold mb-2">MSMEs</h4>
                    <p className="text-xs text-foreground/60">AI-powered lending access</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-white dark:from-primary/15 dark:to-background rounded-xl">
                    <Smartphone className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Gen Z</h4>
                    <p className="text-xs text-foreground/60">Consumer-tech UX expectations</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-foreground/70">
                    <span className="font-semibold">Sector diversity:</span> Fintech • Healthtech • Deep Tech • Consumer Tech
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Sectors Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: 'Eldercare Tech', icon: Users, subtitle: '$13B by 2030' },
              { title: 'Data Centers', icon: Activity, subtitle: '$21.8B by 2030' },
              { title: 'AI Lending', icon: DollarSign, subtitle: '$515B by 2030' },
              { title: 'AI Diagnostics', icon: Target, subtitle: '$1T to economy' },
              { title: 'EDA & IP', icon: Zap, subtitle: '$110B by 2030' }
            ].map((sector, idx) => (
              <Card key={idx} className="text-center border-primary/20 hover-elevate" data-testid={`sector-card-${idx}`}>
                <CardContent className="pt-6 pb-6">
                  <sector.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-foreground mb-1">{sector.title}</h3>
                  <p className="text-xs text-foreground/60">{sector.subtitle}</p>
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
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 1</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Technology Enabled Startups in Eldercare</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                This sector encompasses technology-first solutions to address the rising elderly population of the country through technologies like AI, IOT, digital health platforms and assistive technologies. We have decided to focus on pure tech plays to service this demographic rather than a broad thesis on elder care.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                This sector encompasses use cases like <strong>smart home technology for safety</strong>, fall detection, monitoring, communication software for elders to stay in touch with their children, software for healthcare management of elders and other technology-enabled solutions that create scalable, data-driven approaches to eldercare challenges.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                Remote health monitoring using sensors, wearables, and IoT devices which track vitals, activity, sleep, fall risk, and medication adherence is another implementation of the same market opportunity. The solution is a <strong>two-body problem</strong>—solving for both the elder and their children.
              </p>
            </div>
          </div>

          {/* Use Cases Infographic */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Key Technology Solutions</CardTitle>
              <CardDescription>Scalable, venture-backed opportunities in eldercare tech</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold">Smart Home Technology</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Voice assistant devices</li>
                    <li>• IoT-connected lights, speakers, security</li>
                    <li>• Fall detection systems</li>
                    <li>• Automated safety alerts</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold">Remote Health Monitoring</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Wearable vital tracking</li>
                    <li>• Activity & sleep monitoring</li>
                    <li>• Medication adherence</li>
                    <li>• Fall risk assessment</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold">Communication Software</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Family coordination platforms</li>
                    <li>• Telemedicine integration</li>
                    <li>• Healthcare management</li>
                    <li>• Emergency response systems</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Opportunity Section with Text */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Market Opportunity</h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-6">
              The market opportunity is defined by the demographic itself. The elderly population will grow by <strong>40% from 2021-31</strong> as compared to 8% for the general population, creating a huge market opportunity of <strong>$13 billion by 2030</strong> focused on health, consumer goods, services, and discretionary spending. Adding to this the fact that technology has permeated the lives of senior citizens with <strong>77% of urban seniors</strong> now having smartphones and using messaging apps like WhatsApp, with this percentage only likely to increase as the demographic widens.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-8">
              The market is further validated by the <strong>payer-user dynamic</strong> where 60-75% of eldercare company revenue comes from children purchasing technology solutions for their parents, representing a willing-to-pay customer base driven by guilt, worry, and trust concerns about parents' safety and wellbeing.
            </p>
          </div>

          {/* Market Growth Charts */}
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

          {/* Catalyst Section with Text */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Growth Catalysts</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              Multiple factors are coming together to accelerate this sector: accelerated technology adoption, NRI diaspora growth, and rise of nuclear families creating a need for technology-first solutions to solve for the elderly members of the family. The <strong>baby boomer generation entering senior years</strong>—those born in the 1950s-60s who became affluent during India's economic development starting in the 1980s—now represents the first generation of tech-savvy, financially capable seniors with significant capacity to spend. India's <strong>WOOPWHI segment</strong> (Well-off Older People Without Health Issues) represents the most lucrative early adopter base for technology solutions.
            </p>
          </div>

          {/* Catalyst Infographic */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Key Growth Catalysts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Technology Adoption</h4>
                  <p className="text-sm text-foreground/70">Baby boomers entering senior years with tech-savvy mindset and financial capacity (WOOPWHI segment)</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Nuclear Families</h4>
                  <p className="text-sm text-foreground/70">Rise of nuclear families creating need for remote monitoring and care coordination solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">NRI Diaspora</h4>
                  <p className="text-sm text-foreground/70">Growing NRI population seeking tech-enabled care for aging parents living in India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competitive Landscape */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Competitive Landscape</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  problem: 'Fall Detection & Emergency Response',
                  companies: ['Kubo Care (AI radar-based fall detection, vital tracking, privacy-first)', 'Yodda (24/7 emergency response, smartwatch integration)', 'CherishHealth (fall detection technology for seniors)']
                },
                {
                  problem: 'Contactless Remote Health Monitoring',
                  companies: ['Dozee (Contactless RPM via ballistocardiography, 280+ hospitals, AI vitals)', 'Ten3T Healthcare (IoT wearables & predictive analytics)']
                },
                {
                  problem: 'AI-Powered Health Analytics & Predictive Care',
                  companies: ['Kardi AI (AI-powered ECG monitoring with arrhythmia detection)']
                },
                {
                  problem: 'Telemedicine & Digital Health Platforms',
                  companies: ['Khyaal (Telemedicine, community platform, 1M+ users)', 'Emoha (Tech-enabled care coordination + IoT, 100K+ seniors)']
                },
                {
                  problem: 'Family Coordination & Full-Stack Care Management',
                  companies: ['Emoha (Full-stack: healthcare + family coordination)', 'Samarth Care (AI-powered care coordination platform)', 'HCAH (Full-stack tech coordination across healthcare + lifestyle)']
                }
              ].map((segment, idx) => (
                <Card key={idx} className="border-primary/10">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{segment.problem}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {segment.companies.map((company, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground/70">{company}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sector 2: Data Center Technologies */}
      <section className="py-16 bg-gray-50/50 dark:bg-background/50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 2</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Data Center Technologies</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                Data centers are the <strong>digital backbone</strong> powering cloud services, AI workloads, edge applications, and regulated data hosting. While large incumbents are expected to focus on large-scale facility construction and ride the waves of high demand brought upon by AI and modern computing, there are significant whitespaces for startups in technologies that enhance efficiency, sustainability and sovereign control.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                This could look like <strong>advanced cooling and thermal management solutions</strong> such as direct-to-chip liquid cooling, two-phase immersion systems which aim to reduce Power Usage Effectiveness (PUE) by 10-25% and enable GPU-dense racks for essential AI workflows that generate 20x more heat. <strong>AI-driven operations platforms</strong> deliver predictive maintenance and real-time resource optimization which unlock 25-40% improvements in uptime and 15-20% energy savings.
              </p>
            </div>
          </div>

          {/* Technology Areas Infographic */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Startup Opportunity Areas</CardTitle>
              <CardDescription>High-value whitespaces for innovative ventures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <Database className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Advanced Cooling</h4>
                  <p className="text-xs text-foreground/60">Liquid cooling, immersion systems, 10-25% PUE reduction</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <Cloud className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-2">AI Operations</h4>
                  <p className="text-xs text-foreground/60">Predictive maintenance, 25-40% uptime improvement</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <Zap className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Green Energy</h4>
                  <p className="text-xs text-foreground/60">Solar-wind aggregation, smart microgrids, PPAs</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <Lock className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Sovereign Control</h4>
                  <p className="text-xs text-foreground/60">Compliance platforms, quantum encryption, security</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Opportunity Text */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Market Opportunity</h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              India's data-center market is poised for a <strong>massive expansion</strong>, from <strong>1.35 GW</strong> of installed capacity in 2025 to nearly <strong>5 GW by 2030</strong> which will require <strong>$20 billion</strong> in new data-hall capex and an additional <strong>$10 billion</strong> in equity financing to bridge the infrastructure gap.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              The core data-center services market is forecast to grow from <strong>$10.1 billion in 2025</strong> to <strong>$21.8 billion by 2030</strong> at a <strong>16.6% CAGR</strong>, driven by enterprise cloud adoption and digital-sovereignty mandates. Within this ecosystem, the <strong>cooling-technology segment</strong> is a <strong>$2.4 billion</strong> market in 2025 projected to reach <strong>$7.7 billion</strong> by 2030 at <strong>26.4% CAGR</strong>.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Each 1% PUE improvement saves roughly <strong>$50 million</strong> per 100 MW facility annually. This demonstrates that while data centers will primarily be a high capex sector, the savings provided by technological improvements are invaluable and should be of focus to startups in this space.
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
                <CardTitle className="text-xl">Infrastructure Growth Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dataCenterPowerData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis type="number" stroke="#6B7280" />
                    <YAxis dataKey="metric" type="category" width={180} stroke="#6B7280" />
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

          {/* Catalysts Text */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Growth Catalysts</h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Two strong catalysts will speed this transition. Firstly, the phenomenal growth of AI applications, supported by the <strong>IndiaAI mission's ₹10,372 crore investment in 18,000 GPUs</strong>, is creating pressing needs for AI-compatible cooling, power supplies, and AIOps platforms that can handle compute loads that draw up to <strong>20× more power per rack</strong>.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Secondly, mandates for data sovereignty under the <strong>Digital Personal Data Protection Act</strong>, the RBI regulations, and the introduction of a National Data Centre for sensitive government data sets require organizations to host data and AI models domestically, creating a whitespace for compliance-ready and sovereign-cloud infrastructure solutions.
            </p>
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
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 3</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">AI-Powered Lending</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                AI-powered Lending represents the integration of AI and ML into the entire credit lifecycle, from origination and underwriting to disbursal, monitoring and collections. While traditional credit relied on static credit histories, AI-driven models are able to leverage <strong>alternate data sources</strong> including UPI transactions, GST returns, digital wallet activity among others.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                This creates access to credit for multiple unaccounted segments: new-to-credit Gen Z consumers, MSMEs without collateral, gig workers and populations in tier 2 and tier 3 cities. This has also led to speeding up of credit disbursal from weeks to minutes ensuring greater customer satisfaction.
              </p>
            </div>
          </div>

          {/* Credit Access Infographic */}
          <Card className="mb-12 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl">Underserved Segments Getting Credit Access</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-white/50 dark:bg-background/50 rounded-xl">
                  <DollarSign className="h-10 w-10 text-primary mx-auto mb-2" />
                  <h4 className="font-bold mb-1">Gen Z Consumers</h4>
                  <p className="text-xs text-foreground/60">New to credit, app-first expectations</p>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-background/50 rounded-xl">
                  <Building2 className="h-10 w-10 text-primary mx-auto mb-2" />
                  <h4 className="font-bold mb-1">MSMEs</h4>
                  <p className="text-xs text-foreground/60">₹25-30L Cr credit gap, no collateral</p>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-background/50 rounded-xl">
                  <Users className="h-10 w-10 text-primary mx-auto mb-2" />
                  <h4 className="font-bold mb-1">Gig Workers</h4>
                  <p className="text-xs text-foreground/60">Irregular income, UPI transaction history</p>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-background/50 rounded-xl">
                  <Target className="h-10 w-10 text-primary mx-auto mb-2" />
                  <h4 className="font-bold mb-1">Tier 2/3 Cities</h4>
                  <p className="text-xs text-foreground/60">Under-penetrated formal credit access</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Opportunity Text */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Market Opportunity</h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              India's digital lending market is experiencing explosive growth projected to reach <strong>$515 billion by 2030</strong> from $38 billion in 2021, representing a CAGR of over 33%. The lending segment now commands the largest share of fintech funding in India, with <strong>$135 million invested in Q1 2025 alone</strong>, surpassing payments and other categories.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              There also exists a vast credit demand of MSMEs who face a credit gap of <strong>₹25-30 lakh crore ($320-400 billion)</strong>, with only 14% accessing formal finance. Over <strong>70% of India's digitally-native Gen Z and millennial population</strong> prefer seamless, app-based banking experiences over traditional channels and are fueling adoption of instant personal loans, BNPL products, and embedded credit offerings.
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

          {/* MSME Opportunity */}
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

          {/* Catalysts Text */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Growth Catalysts</h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Multiple interconnected forces make up the catalyst that will drive up the growth in AI-powered lending. Firstly, it has emerged as the dominant vertical in fintech commanding the major proportion in funding reflecting investor conviction.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Secondly, the explosion of <strong>alternative data sources</strong>, particularly UPI, has created an unparalleled credit assessment infrastructure. UPI processed <strong>over 20 billion transactions in August 2025</strong> with a monthly value exceeding <strong>₹24.85 lakh crore</strong>, providing granular, real-time payment flows from platforms like PhonePe, Google Pay, and Paytm.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              The Account Aggregator framework, which crossed <strong>100 million consents</strong> and links <strong>2.2 billion financial accounts</strong>, alongside the newly launched Unified Lending Interface (ULI), now allows lenders to access consent-based income, expense, GST, and property data instantly which eliminates documentation friction and enables ML models to assess borrowers with little or no credit history with unprecedented accuracy.
            </p>
          </div>

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
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 4</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">AI-Powered Diagnostics</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                AI-Powered Diagnostics represents the application of artificial intelligence, machine learning, and computer vision technologies to enhance the accuracy, speed, and accessibility of medical diagnosis in India. AI-Powered Diagnostics encompasses two strategic layers where startups can build competitive advantage.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                The <strong>Data Layer</strong> addresses healthcare's foundational challenge of fragmented data by integrating lab reports, medical images, electronic health records, wearable device streams, and historical patient information into secure, interoperable, AI-ready datasets that comply with India's Digital Personal Data Protection Act (2023).
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                The <strong>Application Layer</strong> leverages these datasets to train and deploy diagnostic models that autonomously analyze images, lab values, and clinical histories to detect disease signatures, flag abnormalities, and generate evidence-based insights. These AI models act as a "second eye" for physicians, augmenting rather than replacing clinical expertise.
              </p>
            </div>
          </div>

          {/* Two-Layer Strategy Infographic */}
          <Card className="border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Two-Layer Investment Thesis</CardTitle>
              <CardDescription>Building competitive advantage across data and application layers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Data Layer */}
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border-2 border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Data Layer</h3>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4 font-semibold">Foundational infrastructure for AI diagnostics</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Integrating lab reports, medical images, EHRs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Wearable device streams & patient histories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">ABHA: 560M health IDs issued</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Compliance with Data Protection Act</span>
                    </li>
                  </ul>
                </div>

                {/* Application Layer */}
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border-2 border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Application Layer</h3>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4 font-semibold">AI models delivering diagnostic insights</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Autonomous image & lab analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Disease signature detection & flagging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">"Second eye" for physicians</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Extending specialist-level diagnostics to rural areas</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Arrow connecting layers */}
              <div className="flex justify-center my-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-foreground/70">Scaling AI-enabled infrastructure delivers far greater reach than training additional specialists</span>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Opportunity Text */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Market Opportunity</h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              AI expenditure in India's healthcare sector reached <strong>USD 665 million in 2018</strong> and is expected to reach <strong>USD 11.78 billion by 2025</strong>, with AI contributing an estimated <strong>USD 1 trillion</strong> to India's economy by 2035. The global AI in healthcare market was valued at USD 11 billion in 2021 and is forecasted to reach <strong>USD 188 billion by 2030</strong>.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              This growth is underpinned by severe structural deficits: approximately <strong>70% of healthcare facilities are situated in urban areas</strong> where only 30% of the population resides, while only <strong>33% of doctors serve two-thirds of the population in rural areas</strong>. This emphasizes the demand-supply mismatch faced and thus serves as a whitespace for startups to build in.
            </p>
          </div>

          {/* Market Growth Chart */}
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

          {/* Catalysts Text */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Growth Catalysts</h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Key catalysts are coming together to accelerate AI-powered diagnostics in India. Government initiatives such as the <strong>Ayushman Bharat Digital Mission</strong>, which has issued <strong>560 million ABHA health IDs</strong>, are establishing digital health records as a foundation for AI applications. This acts as a foundation for the data layer as stated above.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Rapid technology maturation is already showing results to stakeholders: Qure.ai reducing TB diagnosis time from 3 weeks to 2 hours while increasing detection rates by 29%, Niramai achieving 27% higher accuracy in breast cancer detection at one-third the cost of traditional mammography—all boosting investor confidence and funding, evidenced by more than <strong>109% growth in AI healthcare investment since 2018</strong> and dedicated AI funding initiatives under the IndiaAI Mission.
            </p>
          </div>

          {/* Catalyst Metrics */}
          <Card className="bg-white dark:bg-background border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Virtuous Cycle: Catalysts Creating Momentum</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">560M</div>
                  <div className="text-sm text-foreground/70 font-semibold mb-1">ABHA Health IDs</div>
                  <div className="text-xs text-foreground/60">Building data foundation layer</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">109%</div>
                  <div className="text-sm text-foreground/70 font-semibold mb-1">Investment Growth</div>
                  <div className="text-xs text-foreground/60">Since 2018, accelerating momentum</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">29%</div>
                  <div className="text-sm text-foreground/70 font-semibold mb-1">TB Detection Increase</div>
                  <div className="text-xs text-foreground/60">Proven technology impact (Qure.ai)</div>
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
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 5</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">EDA and IP in Semiconductors</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                <strong>Electronic Design Automation (EDA) and Intellectual Property (IP)</strong> represent the critical upstream segment of the semiconductor value chain, forming the foundation for all chip design activities. EDA tools are sophisticated software platforms that enable engineers to design, simulate, verify, and validate semiconductor circuits before fabrication.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                IP cores are pre-designed, reusable functional blocks such as processor cores, memory controllers, interface protocols, and analog circuits that can be integrated into System-on-Chip (SoC) designs to accelerate development and reduce costs. India is at an inflection point driven by policy support, global realignment, and investor confidence.
              </p>
            </div>
          </div>

          {/* EDA/IP Stack Infographic */}
          <Card className="mb-12 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl">Semiconductor Value Chain Position</CardTitle>
              <CardDescription>EDA & IP as foundational infrastructure for chip design</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white/50 dark:bg-background/50 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="h-8 w-8 text-primary" />
                    <h4 className="font-bold text-lg">EDA Tools</h4>
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">Sophisticated software platforms enabling chip design</p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Design & simulation</li>
                    <li>• Verification & validation</li>
                    <li>• Layout generation</li>
                    <li>• Timing analysis</li>
                  </ul>
                </div>
                <div className="p-6 bg-white/50 dark:bg-background/50 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="h-8 w-8 text-primary" />
                    <h4 className="font-bold text-lg">IP Cores</h4>
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">Pre-designed, reusable functional blocks</p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Processor cores (RISC-V)</li>
                    <li>• Memory controllers</li>
                    <li>• Interface protocols</li>
                    <li>• Analog circuits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Opportunity Text */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Market Opportunity</h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              India's semiconductor market is projected to grow from <strong>$52 billion (2024)</strong> to <strong>$100-110 billion by 2030 (18% CAGR)</strong>, with the global EDA IP market expanding from $12.25 billion (2024) to $22.34 billion by 2033.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Application-specific drivers include: automotive semiconductors rising from <strong>$312 per ICE vehicle to $600 per EV</strong> as India targets 30% EV penetration by 2030. India now hosts <strong>100+ semiconductor startups</strong> with VC investment surging <strong>5.6x from $5 million (2023) to $28 million (2024)</strong>, though only 34% work on proprietary IP versus 65.5% in services, indicating substantial whitespace for IP-focused ventures.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Even indigenizing chips for just <strong>10% of India's 150 million annual smartphone market</strong> (15-18 million units) creates compelling commercial rationale for domestic IP.
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

          {/* VC Investment & EV Opportunity */}
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

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">EV Semiconductor Value per Vehicle</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={evChipValueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="type" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" label={{ value: 'USD', angle: -90, position: 'insideLeft' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB' }}
                      formatter={(value: number) => `$${value}`}
                    />
                    <Bar dataKey="value" fill="#991B1B" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">92% increase in chip value as India targets 30% EV penetration by 2030</p>
              </CardContent>
            </Card>
          </div>

          {/* Startup Ecosystem */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 mb-12">
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
                  <span className="text-sm font-semibold">Focus Areas Distribution</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Services (Design, Consulting)</span>
                      <span className="font-bold">65.5%</span>
                    </div>
                    <div className="w-full bg-white/50 rounded-full h-3">
                      <div className="bg-gray-400 h-3 rounded-full" style={{ width: '65.5%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-primary font-semibold">Proprietary IP (Major Whitespace)</span>
                      <span className="font-bold text-primary">34%</span>
                    </div>
                    <div className="w-full bg-white/50 rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: '34%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-foreground/60 mt-3">Substantial whitespace for IP-focused ventures vs services</p>
              </div>
            </CardContent>
          </Card>

          {/* DLI Scheme */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Design Linked Incentive (DLI) Scheme Impact</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              India's semiconductor design ecosystem is at an inflection point, driven by the convergence of policy support, global realignment, and investor confidence. The DLI Scheme, covering up to <strong>50% of design costs (₹15 crore cap)</strong> and offering <strong>4-6% of sales support over five years (₹30 crore cap)</strong>, has enabled 278 institutions and 72 startups to access industry-grade EDA tools and IP cores, while government validation through DLI approval has already helped <strong>10 of 23 projects secure Series A funding</strong>.
            </p>
          </div>

          <Card className="border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">DLI Scheme Benefits</CardTitle>
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
                <p className="text-xs text-foreground/60 mt-2">Government validation driving investor confidence (43% success rate)</p>
              </div>
            </CardContent>
          </Card>

          {/* Geopolitical Tailwinds */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Converging Catalysts</h3>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Geopolitical tailwinds from <strong>China+1 diversification</strong> are accelerating: AMD, NXP, and Qualcomm are expanding to 3,000, 6,000, and 14,000 engineers respectively, prompting experienced professionals to launch IP startups, while MNCs increasingly acqui-hire local design firms for talent and technology.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Simultaneously, Western fabless companies, incentivized by the US and EU Chips Acts, are turning to India for trusted design partnerships in automotive, defense, and industrial segments. The deep-tech capital landscape has also transformed, with the <strong>India Deep Tech Investment Alliance committing $1 billion over the next decade</strong> and 92% of investors expressing optimism, with 63% willing to fund long-gestation, IP-led ventures.
            </p>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Three Converging Catalysts</CardTitle>
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
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-6">
              From application layer to foundation layer, these five sectors represent India's next wave of venture-scale opportunities, creating value that will help build the nation.
            </p>
            <p className="text-base text-foreground/70 max-w-3xl mx-auto">
              These sectors cover a wide range of use cases and target demographics while also maintaining a strong bet on AI and its applications. They will not just build for India, but build for the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {[
              { name: 'Eldercare Tech', market: '$13B by 2030', growth: '40% pop growth', icon: Users },
              { name: 'Data Centers', market: '$21.8B by 2030', growth: '16.6% CAGR', icon: Activity },
              { name: 'AI Lending', market: '$515B by 2030', growth: '33%+ CAGR', icon: DollarSign },
              { name: 'AI Diagnostics', market: '$1T to economy', growth: '109% inv growth', icon: Target },
              { name: 'EDA & IP', market: '$110B by 2030', growth: '18% CAGR', icon: Zap }
            ].map((sector, idx) => (
              <Card key={idx} className="text-center border-primary/20 hover-elevate">
                <CardHeader className="pb-3">
                  <sector.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-base">{sector.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-lg font-bold text-primary mb-1">{sector.market}</div>
                  <div className="text-xs text-foreground/60">{sector.growth}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto bg-white/80 dark:bg-background/80 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-4 text-center text-primary">Key Takeaway</h3>
              <p className="text-base text-foreground/80 leading-relaxed text-center">
                These sectors represent a strong bet on AI and its applications, creating value across demographics from senior citizens to Gen Z, while solving for sovereign infrastructure and building India's core intellectual property. The winning startups will not just provide financial returns but also generate value that will help further build the nation—building the AI that powers critical sectors and creating the IP that underpins the entire technology stack, from data centers to semiconductor design.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
