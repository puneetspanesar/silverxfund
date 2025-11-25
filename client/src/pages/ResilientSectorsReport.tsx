import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from "recharts";
import { TrendingUp, Users, DollarSign, Target, Zap, Heart, Brain, Shield, Database, Lock, Hammer, Palette, Pickaxe, Stethoscope, Wheat, HandHeart, HardHat, Smile, IdCard, Gavel, MapPin, Fence, Building2 } from "lucide-react";

const aiPenetrationBySector = [
  { sector: 'Agriculture', penetration: 2, display: '1-3%', icon: 'wheat' },
  { sector: 'Construction', penetration: 1.4, display: '1.4%', icon: 'hammer' },
  { sector: 'Arts & Entertainment', penetration: 26, display: '26%', icon: 'palette' },
  { sector: 'Social Work & HR', penetration: 8.5, display: '7-10%', icon: 'handheart' },
  { sector: 'Mining', penetration: 4, display: '2-6%', icon: 'pickaxe' },
  { sector: 'Healthcare', penetration: 20, display: '20%', icon: 'stethoscope' }
];

const agricultureMarketGrowth = [
  { year: '2025', value: 100 },
  { year: '2026', value: 111 },
  { year: '2027', value: 124 },
  { year: '2028', value: 138 },
  { year: '2029', value: 154 },
  { year: '2030', value: 171 },
  { year: '2031', value: 191 },
  { year: '2032', value: 212 },
  { year: '2033', value: 236 }
];

const agricultureTechAdoption = [
  { tech: 'AI-Driven Drones & Satellite Imagery Analysis', adoption: 55 },
  { tech: 'Precision Sensors (Soil, Moisture, Climate)', adoption: 50 },
  { tech: 'Predictive Analytics & Decision Support (AI Models)', adoption: 45 },
  { tech: 'Autonomous Tractors, Harvesters & Robotics', adoption: 12.5 },
  { tech: 'Blockchain-Enabled Traceability Platforms', adoption: 17.5 },
  { tech: 'AI-Based Satellite Remote Sensing for Carbon Footprinting', adoption: 17.5 }
];

const constructionMarketPie = [
  { name: 'Global Construction Market', value: 12000, color: '#6B7280' },
  { name: 'AI in Construction', value: 4.7, color: '#991B1B' }
];

const creativeAIAdoptionPie = [
  { name: 'Film & Animation', value: 30, color: '#991B1B' },
  { name: 'Publishing & Design', value: 27.5, color: '#B91C1C' },
  { name: 'Music Production', value: 20, color: '#FCA5A5' },
  { name: 'Live Performance, Fine Arts, Events', value: 1, color: '#E5E7EB' }
];

const creativeMarketGrowth = [
  { year: '2025', marketSize: 3.0, ai: 0.8 },
  { year: '2026', marketSize: 3.1, ai: 0.8 },
  { year: '2027', marketSize: 3.3, ai: 0.8 },
  { year: '2028', marketSize: 3.4, ai: 0.9 },
  { year: '2029', marketSize: 3.5, ai: 0.9 }
];

const hrSocialPie = [
  { name: 'HR Gen AI Adoption', value: 61, color: '#6B7280' },
  { name: 'Personal Services Gen AI', value: 46, color: '#FCA5A5' },
  { name: 'Social Care & Counselling', value: 8, color: '#991B1B' }
];

const miningAIPenetrationData = [
  { category: 'Exploration/Mapping', value: 15 },
  { category: 'Equipment Maintenance', value: 52 },
  { category: 'Safety Monitoring', value: 18 },
  { category: 'Processing & Extraction', value: 4 }
];

const healthcareAIData = [
  { subsector: 'Clinical Care', penetration: 25 },
  { subsector: 'Pharmacy Services', penetration: 20 },
  { subsector: 'Life Sciences', penetration: 14 },
  { subsector: 'Supply Chain', penetration: 23 },
  { subsector: 'Outpatient Care', penetration: 10 }
];

const COLORS = ['#991B1B', '#B91C1C', '#DC2626', '#EF4444', '#F87171', '#FCA5A5'];

export default function ResilientSectorsReport() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background">
      {/* Hero Section */}
      <section className="relative bg-primary/5 border-b border-primary/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-block mb-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Industry Outlook</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground" data-testid="text-report-title">
              Sectors Minimally Disrupted by Generative AI
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Understanding the industries that remain resilient to AI transformation through 2035
            </p>
          </div>
        </div>
      </section>

      {/* AI Penetration Overview - Main Chart */}
      <section className="py-16 bg-[#1a1f3c] text-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-center text-[#c9a962] italic">
            AI PENETRATION IN WORKFORCE ACROSS SECTORS (ESTIMATION)
          </h2>
          
          <div className="mt-12">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={aiPenetrationBySector} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                <XAxis 
                  dataKey="sector" 
                  stroke="#FFF" 
                  tick={{ fill: '#FFF', fontSize: 12 }}
                  axisLine={{ stroke: '#c9a962' }}
                  tickLine={false}
                  interval={0}
                  angle={0}
                  textAnchor="middle"
                  height={80}
                />
                <YAxis stroke="#FFF" tick={{ fill: '#FFF' }} domain={[0, 30]} tickFormatter={(v) => `${v}%`} />
                <Tooltip 
                  formatter={(value: number) => [`${value}%`, 'AI Penetration']}
                  contentStyle={{ backgroundColor: '#1a1f3c', border: '1px solid #c9a962', color: '#FFF' }}
                />
                <Bar dataKey="penetration" fill="#F5E6C8" radius={[4, 4, 0, 0]}>
                  {aiPenetrationBySector.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#F5E6C8" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Sector Icons Row */}
          <div className="grid grid-cols-6 gap-4 mt-8">
            {[
              { icon: Wheat, label: 'Agriculture' },
              { icon: Building2, label: 'Construction' },
              { icon: Palette, label: 'Arts & Entertainment' },
              { icon: HandHeart, label: 'Social work & HR' },
              { icon: Pickaxe, label: 'Mining' },
              { icon: Stethoscope, label: 'Healthcare' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-xs text-center text-white/80">{item.label}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-white/60 mt-8 text-center italic">
            *In Arts and Healthcare, the use of AI is mostly for assistance. It would not replace workforce.
          </p>
        </div>
      </section>

      {/* Sector 1: Agriculture */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 1</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Agricultural Sector Overview</h2>
          </div>

          {/* Market Overview + AI Adoption Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Market Overview */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-center">MARKET OVERVIEW</CardTitle>
                <CardDescription className="text-center">India Agricultural Market (Amount in Trillion INR)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={agricultureMarketGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="year" stroke="#6B7280" tick={{ fontSize: 11 }} />
                    <YAxis stroke="#6B7280" domain={[0, 250]} />
                    <Tooltip formatter={(value: number) => [`${value}T INR`, 'Market Size']} />
                    <Bar dataKey="value" fill="#991B1B" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-2">
                  <span className="inline-flex items-center gap-2 text-primary font-semibold">
                    <TrendingUp className="w-4 h-4" /> CAGR: 10.08%
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Projected AI Adoption */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-center">PROJECTED ADOPTION OF AI</CardTitle>
                <CardDescription className="text-center">Technology adoption rates by 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={agricultureTechAdoption} layout="vertical" margin={{ left: 20, right: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis type="number" domain={[0, 60]} stroke="#6B7280" tickFormatter={(v) => `${v}%`} />
                    <YAxis 
                      dataKey="tech" 
                      type="category" 
                      width={220} 
                      stroke="#6B7280" 
                      tick={{ fontSize: 10 }}
                    />
                    <Tooltip formatter={(value: number) => `${value}%`} />
                    <Bar dataKey="adoption" fill="#991B1B" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Resilient Factors */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">RESILIENT FACTORS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-background/50 rounded-lg">
                  <div className="text-primary font-bold text-lg">›</div>
                  <p className="text-sm text-foreground/80">Requires manual labor, contextual decisions, and real-time adaptation.</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-background/50 rounded-lg">
                  <div className="text-primary font-bold text-lg">›</div>
                  <p className="text-sm text-foreground/80">Cost and the digital divide impede AI adoption.</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-background/50 rounded-lg">
                  <div className="text-primary font-bold text-lg">›</div>
                  <p className="text-sm text-foreground/80">Local knowledge and skills are irreplaceable, despite AI.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Text Content */}
          <div className="mt-12 prose prose-lg max-w-none">
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              The global agriculture sector will grow from <strong>$12.12 trillion in 2024</strong> to <strong>$12.97 trillion in 2025</strong>, at a CAGR of 7%. In India, agriculture is projected to reach <strong>INR 236.6 trillion ($2.8 trillion) by 2033</strong>, at a CAGR of over 10%. Barriers to end-to-end automation are pronounced, driven by fragmented farm sizes, local climate, and physical unpredictability.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              AI applications are growing rapidly with the market expected to reach <strong>$5 billion globally in 2025</strong>. However, this remains less than <strong>0.1%</strong> of total global agriculture revenue, especially in smallholder-dominated regions. Overall AI-driven activities account for only <strong>1-3% of daily workflows</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Sector 2: Construction */}
      <section className="py-16 bg-gray-50/50 dark:bg-background/50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 2</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Construction</h2>
          </div>

          {/* Market Overview Pie Chart */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">MARKET OVERVIEW</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="relative">
                  <ResponsiveContainer width={350} height={350}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Global Construction Market', value: 96 },
                          { name: 'AI in Construction', value: 4 }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={0}
                        outerRadius={140}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        <Cell fill="#6B7280" />
                        <Cell fill="#991B1B" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-[#6B7280] rounded mt-1"></div>
                    <div>
                      <p className="text-lg font-semibold">Global Construction Market Size (2025):</p>
                      <p className="text-3xl font-bold text-primary">$12 Trillion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-[#991B1B] rounded mt-1"></div>
                    <div>
                      <p className="text-lg font-semibold">AI in Construction Market Projected (2025):</p>
                      <p className="text-3xl font-bold text-primary">$4.7 Billion</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-primary mt-8 text-center italic">
                *AI in construction Market is projected to grow at 26-30% CAGR and reach approximately $17 Billion by 2029
              </p>
            </CardContent>
          </Card>

          {/* AI Adoption by Subsector */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">AI Adoption by Subsector</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20-28%</div>
                  <h4 className="font-bold mb-2">Design & Planning</h4>
                  <p className="text-xs text-foreground/60">Large engineering firms; SMEs below 8%</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">~25%</div>
                  <h4 className="font-bold mb-2">On-site Robotics</h4>
                  <p className="text-xs text-foreground/60">Error reduction in flagship projects</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">~8%</div>
                  <h4 className="font-bold mb-2">Safety Systems</h4>
                  <p className="text-xs text-foreground/60">AI-powered compliance monitoring</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">~1.4%</div>
                  <h4 className="font-bold mb-2">Overall Workflow</h4>
                  <p className="text-xs text-foreground/60">Among lowest of all sectors</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resilience Factors */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Resilience Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hammer className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Skilled Manual Labor</h4>
                    <p className="text-sm text-foreground/70">Masonry, carpentry, on-site adaptation require human expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Project Heterogeneity</h4>
                    <p className="text-sm text-foreground/70">Not easily standardized for AI or robotic takeover</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Safety & Regulations</h4>
                    <p className="text-sm text-foreground/70">Physical safety, inspection, and environmental assessments require human oversight</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sector 3: Arts, Entertainment & Creative Industries */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 3</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Arts, Entertainment & Creative Industries</h2>
          </div>

          {/* Two Charts Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* AI Adoption Pie Chart */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-center">AI ADOPTION RATE ACROSS DIFFERENT SECTORS</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={creativeAIAdoptionPie}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${value}%`}
                      labelLine={true}
                    >
                      {creativeAIAdoptionPie.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value}%`} />
                    <Legend 
                      layout="vertical" 
                      align="right" 
                      verticalAlign="middle"
                      formatter={(value, entry: any) => `${value}: ${entry.payload.value}%`}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Market Size Stacked Bar */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-center">EXPECTED MARKET SIZE OF CREATIVE SECTOR</CardTitle>
                <CardDescription className="text-center">Market size in Trillion $</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={creativeMarketGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="year" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" domain={[0, 5]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="marketSize" name="Market Size" stackId="a" fill="#991B1B" />
                    <Bar dataKey="ai" name="AI" stackId="a" fill="#6B7280" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-xs text-foreground/60 mt-4 text-center italic">
                  *AI is expected to automate only 26% of the total market by 2029.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">30%</div>
                <div className="text-sm text-foreground/70">Film & Animation AI usage</div>
                <div className="text-xs text-foreground/50 mt-1">7% creative direction automated</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">20%</div>
                <div className="text-sm text-foreground/70">Music Production AI</div>
                <div className="text-xs text-foreground/50 mt-1">Live performance nearly 0%</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">27.5%</div>
                <div className="text-sm text-foreground/70">Publishing & Design</div>
                <div className="text-xs text-foreground/50 mt-1">Final judgment remains human</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">1%</div>
                <div className="text-sm text-foreground/70">Live Performance & Fine Arts</div>
                <div className="text-xs text-foreground/50 mt-1">Human skill valued</div>
              </CardContent>
            </Card>
          </div>

          {/* Resilience Factors */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Resilience Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Taste-Driven Output</h4>
                    <p className="text-sm text-foreground/70">Unstructured creativity, cultural context, and emotional nuance provide competitive defense</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">IP & Authorship</h4>
                    <p className="text-sm text-foreground/70">Intellectual property debates and consumer preference for "human touch" slow AI transformation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Experiential Value</h4>
                    <p className="text-sm text-foreground/70">Talent-driven branding and live experiences resist platformization</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sector 4: Social Work, Personal Services & HR */}
      <section className="py-16 bg-gray-50/50 dark:bg-background/50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 4</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Social Work, Personal Services & Human Resources</h2>
          </div>

          {/* AI Penetration Pie Chart */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">AI PENETRATION RATE ACROSS DIFFERENT SECTORS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                <ResponsiveContainer width={350} height={350}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'HR Gen AI Adoption', value: 61, color: '#6B7280' },
                        { name: 'Personal Services', value: 46, color: '#FCA5A5' },
                        { name: 'Social Care & Counselling', value: 8, color: '#991B1B' }
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={130}
                      dataKey="value"
                    >
                      <Cell fill="#6B7280" />
                      <Cell fill="#FCA5A5" />
                      <Cell fill="#991B1B" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-[#6B7280] rounded mt-1"></div>
                    <div>
                      <p className="text-sm font-semibold">HR Gen AI Adoption Growth projected (2025):</p>
                      <p className="text-2xl font-bold text-primary">61% of workflow Automation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-[#FCA5A5] rounded mt-1"></div>
                    <div>
                      <p className="text-sm font-semibold">Personal Services Gen AI Adoption Growth projected (2025):</p>
                      <p className="text-2xl font-bold text-primary">46% of workflow Automation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-[#991B1B] rounded mt-1"></div>
                    <div>
                      <p className="text-sm font-semibold">Social Care and Counselling Gen AI Adoption Growth projected (2025):</p>
                      <p className="text-2xl font-bold text-primary">8% of workflow Automation</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Text Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-base text-foreground/80 leading-relaxed">
              Personal care, social work, and HR occupy a significant share of employment. Adoption of automation remains under <strong>10% of tasks</strong> due to the high-touch nature of services. While HR administration sees rapid GenAI adoption (from 19% in 2023 to projected 61% in 2025), most is workflow automation—recruitment, screening, analytics—rather than empathy, negotiation, or final selection. Core services remain labor-intensive; AI may augment but not replace human-driven functions.
            </p>
          </div>

          {/* Resilience Factors */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Resilience Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Empathy & Intuition</h4>
                    <p className="text-sm text-foreground/70">Inherently dependent on trust-building, which is difficult for AI to replicate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Regulation & Accreditation</h4>
                    <p className="text-sm text-foreground/70">Safety standards bind key functions to human judgment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Consumer Skepticism</h4>
                    <p className="text-sm text-foreground/70">Regulatory skepticism towards fully automated care and counseling</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sector 5: Mining */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 5</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Mining, Basic Commodities & Raw Materials Extraction</h2>
          </div>

          {/* AI Penetration Chart */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">AI Penetration by Mining Subsector</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={miningAIPenetrationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="category" stroke="#6B7280" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#6B7280" domain={[0, 60]} tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value: number) => `${value}%`} />
                  <Bar dataKey="value" fill="#991B1B" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-foreground/60 mt-4 text-center">Equipment maintenance leads at 50-55% in Tier 1 operators; field operations &lt;12%</p>
            </CardContent>
          </Card>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">$1.96T</div>
                <div className="text-sm text-foreground/70">Global Mining Revenue (2024)</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.6%</div>
                <div className="text-sm text-foreground/70">Sector CAGR</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2-6%</div>
                <div className="text-sm text-foreground/70">Overall AI Penetration</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">&lt;4%</div>
                <div className="text-sm text-foreground/70">Direct AI Extraction</div>
              </CardContent>
            </Card>
          </div>

          {/* Resilience Factors */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Resilience Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Pickaxe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Harsh Environments</h4>
                    <p className="text-sm text-foreground/70">Physical environments, labor regulations, and capital investment create high barriers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Site Variability</h4>
                    <p className="text-sm text-foreground/70">Site-to-site variability limits plug-and-play automation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Regulatory Compliance</h4>
                    <p className="text-sm text-foreground/70">Safety and real-time adaptation depend on skilled human labor</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sector 6: Healthcare */}
      <section className="py-16 bg-gray-50/50 dark:bg-background/50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 6</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Healthcare</h2>
          </div>

          {/* Healthcare AI Penetration */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">AI Penetration by Healthcare Subsector</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={healthcareAIData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="subsector" stroke="#6B7280" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#6B7280" domain={[0, 30]} tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value: number) => `${value}%`} />
                  <Bar dataKey="penetration" fill="#991B1B" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-foreground/60 mt-4 text-center">Clinical Care leads at ~25% but mostly documentation; direct patient interventions remain human-led</p>
            </CardContent>
          </Card>

          {/* Subsector Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Clinical Care</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">&lt;25%</div>
                <p className="text-sm text-foreground/70">Documentation, radiology pre-reading, triage. Most diagnostic decisions remain human-led.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Pharmacy Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">18-21%</div>
                <p className="text-sm text-foreground/70">Inventory management, predictive analytics in large hospital networks.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Life Sciences & Research</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">13-15%</div>
                <p className="text-sm text-foreground/70">Literature review, drug discovery. Regulatory and accuracy concerns are barriers.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Supply Chain & Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">20-25%</div>
                <p className="text-sm text-foreground/70">Inventory and procurement automation among large health systems.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Outpatient & Ambulatory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">8-12%</div>
                <p className="text-sm text-foreground/70">Scheduling, claims, chatbots. Real care delivery anchored to human providers.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Overall Patient-Facing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">&lt;20%</div>
                <p className="text-sm text-foreground/70">Clinical judgment, empathy, and compliance bind sector to human expertise.</p>
              </CardContent>
            </Card>
          </div>

          {/* Resilience Factors */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Resilience Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Certified Clinicians</h4>
                    <p className="text-sm text-foreground/70">Reliance on certified human clinicians for diagnosis, decision-making, and direct care</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Regulatory Compliance</h4>
                    <p className="text-sm text-foreground/70">Ethical frameworks demand human oversight and transparency in treatment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Trust & Empathy</h4>
                    <p className="text-sm text-foreground/70">Personalized interactions are core to patient outcomes, limiting automated replacements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Fragmented Data</h4>
                    <p className="text-sm text-foreground/70">Integration complexities and patient safety needs slow broad AI deployment</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why These Sectors Resist AI - Visual Infographic */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Why These Sectors Resist Disruption</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Six key factors explain why certain industries continue to rely on human skills despite AI advances
            </p>
          </div>

          {/* Star Infographic Layout */}
          <div className="flex justify-center mb-12">
            <div className="relative w-[500px] h-[500px]">
              {/* Center Text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white dark:bg-background rounded-full border-2 border-primary flex items-center justify-center z-10">
                <p className="text-center text-primary font-bold text-sm leading-tight px-4">
                  WHY THESE<br/>SECTORS RESIST<br/>DISRUPTION
                </p>
              </div>

              {/* Physical Dexterity - Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full border-2 border-primary flex items-center justify-center mb-2">
                  <HardHat className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs text-center font-semibold max-w-[100px]">Physical Dexterity</p>
              </div>

              {/* Emotional Intelligence - Top Right */}
              <div className="absolute top-[15%] right-[10%] flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full border-2 border-primary flex items-center justify-center mb-2">
                  <Smile className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs text-center font-semibold max-w-[100px]">Emotional Intelligence</p>
              </div>

              {/* Manual Skills - Top Left */}
              <div className="absolute top-[15%] left-[10%] flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full border-2 border-primary flex items-center justify-center mb-2">
                  <IdCard className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs text-center font-semibold max-w-[100px]">Manual Skill Dependence</p>
              </div>

              {/* Regulatory Barriers - Bottom Right */}
              <div className="absolute bottom-[15%] right-[10%] flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full border-2 border-primary flex items-center justify-center mb-2">
                  <Gavel className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs text-center font-semibold max-w-[100px]">Regulatory Barriers</p>
              </div>

              {/* Local Value Chains - Bottom Left */}
              <div className="absolute bottom-[15%] left-[10%] flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full border-2 border-primary flex items-center justify-center mb-2">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs text-center font-semibold max-w-[100px]">Local Value Chains</p>
              </div>

              {/* Judgment & Creativity - Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full border-2 border-primary flex items-center justify-center mb-2">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xs text-center font-semibold max-w-[100px]">Judgment & Creativity</p>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <line x1="250" y1="80" x2="250" y2="180" stroke="#991B1B" strokeWidth="2" strokeDasharray="4" />
                <line x1="400" y1="130" x2="320" y2="200" stroke="#991B1B" strokeWidth="2" strokeDasharray="4" />
                <line x1="100" y1="130" x2="180" y2="200" stroke="#991B1B" strokeWidth="2" strokeDasharray="4" />
                <line x1="400" y1="370" x2="320" y2="300" stroke="#991B1B" strokeWidth="2" strokeDasharray="4" />
                <line x1="100" y1="370" x2="180" y2="300" stroke="#991B1B" strokeWidth="2" strokeDasharray="4" />
                <line x1="250" y1="420" x2="250" y2="320" stroke="#991B1B" strokeWidth="2" strokeDasharray="4" />
              </svg>
            </div>
          </div>

          {/* Factor Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                factor: 'Physical Dexterity & Adaptability',
                description: 'Jobs demanding fine motor skills, on-the-spot adaptation, and interaction with unpredictable environments',
                examples: 'Construction, hotel housekeeping, electricians, repair technicians'
              },
              {
                factor: 'Emotional Intelligence & Empathy',
                description: 'AI lacks authentic empathy essential in caregiving, counseling, teaching, and leadership',
                examples: 'Nursing, childcare, therapy, teaching, social work'
              },
              {
                factor: 'Judgment, Creativity & Innovation',
                description: 'AI struggles with originality, strategic thinking, and creative decisions in ambiguous contexts',
                examples: 'Artists, designers, strategists, creative directors, entrepreneurs'
              },
              {
                factor: 'Manual Skill Dependence',
                description: 'Tactile, sensory-based craftsmanship that AI cannot replicate at scale or nuance',
                examples: 'Artisanal crafts, agriculture, culinary arts'
              },
              {
                factor: 'Regulatory Barriers',
                description: 'Strict legal, ethical, and compliance frameworks require certified human oversight',
                examples: 'Healthcare, pharmaceuticals, food safety, legal services'
              },
              {
                factor: 'Local Value Chains',
                description: 'Industries tied to regional practices face challenges in standardizing AI',
                examples: 'Construction, public utilities, regional manufacturing'
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-primary/20 hover-elevate">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{item.factor}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 mb-3">{item.description}</p>
                  <p className="text-xs text-primary font-semibold">{item.examples}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Takeaway */}
          <Card className="max-w-4xl mx-auto mt-12 bg-white/80 dark:bg-background/80 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-4 text-center text-primary">Key Takeaway</h3>
              <p className="text-base text-foreground/80 leading-relaxed text-center">
                While generative AI is transforming many industries, sectors relying on <strong>physical dexterity, emotional intelligence, creative judgment, manual skills, regulatory compliance, and local value chains</strong> demonstrate robust resistance. These industries offer unique investment opportunities focused on hybrid human-AI productivity, premium authenticity markets, and skill-building initiatives that capitalize on the irreplaceable value of human expertise.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
