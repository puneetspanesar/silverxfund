import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendingUp, Users, DollarSign, Target, Zap, Activity, Home, Heart, Brain, Shield, Database, Cloud, Cpu, Lock, Smartphone, Building2, CheckCircle2, ArrowRight, Hammer, Palette, Pickaxe, Stethoscope, Wheat, HandHeart } from "lucide-react";

const agricultureMarketData = [
  { year: '2024', value: 12.12 },
  { year: '2025', value: 12.97 },
  { year: '2033', value: 28, label: 'India: $2.8T' }
];

const constructionAIData = [
  { category: 'Design & Planning (Large Firms)', value: 24 },
  { category: 'Design & Planning (SMEs)', value: 8 },
  { category: 'Safety Systems', value: 8 },
  { category: 'Overall Workflow', value: 1.4 }
];

const mediaEntertainmentData = [
  { subsector: 'Film & Animation', aiUsage: 30, humanDriven: 70 },
  { subsector: 'Music Production', aiUsage: 20, humanDriven: 80 },
  { subsector: 'Publishing & Design', aiUsage: 28, humanDriven: 72 },
  { subsector: 'Live Performance', aiUsage: 2, humanDriven: 98 }
];

const hrAIAdoptionData = [
  { year: '2023', adoption: 19 },
  { year: '2025', adoption: 61 }
];

const miningAIPenetrationData = [
  { category: 'Exploration/Mapping', value: 15, color: '#991B1B' },
  { category: 'Equipment Maintenance', value: 52, color: '#B91C1C' },
  { category: 'Safety Monitoring', value: 18, color: '#DC2626' },
  { category: 'Processing & Extraction', value: 4, color: '#EF4444' }
];

const healthcareAIData = [
  { subsector: 'Clinical Care', penetration: 25 },
  { subsector: 'Pharmacy Services', penetration: 20 },
  { subsector: 'Life Sciences', penetration: 14 },
  { subsector: 'Supply Chain', penetration: 23 },
  { subsector: 'Outpatient Care', penetration: 10 }
];

const sectorOverviewData = [
  { sector: 'Agriculture', marketSize: 12.12, aiPenetration: 2, color: '#991B1B' },
  { sector: 'Construction', marketSize: 12, aiPenetration: 1.4, color: '#B91C1C' },
  { sector: 'Entertainment', marketSize: 3.5, aiPenetration: 15, color: '#DC2626' },
  { sector: 'HR & Social Work', marketSize: 2, aiPenetration: 8, color: '#EF4444' },
  { sector: 'Mining', marketSize: 1.96, aiPenetration: 4, color: '#F87171' },
  { sector: 'Healthcare', marketSize: 11, aiPenetration: 20, color: '#FCA5A5' }
];

const agricultureSubsectorData = [
  { name: 'Precision Farming (Large)', value: 50 },
  { name: 'Precision Farming (Small)', value: 22 },
  { name: 'Livestock AI', value: 11 },
  { name: 'Post-Harvest Automation', value: 12 }
];

const agriTechAdoptionData = [
  { technology: 'AI-Driven Drones & Satellite Imagery', adoption: 55 },
  { technology: 'Precision Sensors (Soil, Moisture, Climate)', adoption: 50 },
  { technology: 'Predictive Analytics & Decision Support', adoption: 45 },
  { technology: 'Blockchain Traceability Platforms', adoption: 17.5 },
  { technology: 'AI Satellite Remote Sensing (Carbon)', adoption: 17.5 },
  { technology: 'Autonomous Tractors & Robotics', adoption: 12.5 }
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

          {/* Key Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-white dark:from-primary/10 dark:to-background">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Why Sectors Resist AI</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground/80">Physical dexterity requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground/80">Emotional intelligence needs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground/80">Regulatory barriers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground/80">Local value chain dependencies</span>
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
                  <CardTitle className="text-lg">Investment Opportunities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">Hybrid human-AI productivity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">Premium authenticity markets</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">Rural development programs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">Skill-building initiatives</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sector Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {[
              { title: 'Agriculture', icon: Wheat, market: '$12.12T', aiPen: '1-3%' },
              { title: 'Construction', icon: Hammer, market: '$12T+', aiPen: '~1.4%' },
              { title: 'Entertainment', icon: Palette, market: '$3.5T', aiPen: '7-30%' },
              { title: 'HR & Social', icon: HandHeart, market: 'Growing', aiPen: '7-10%' },
              { title: 'Mining', icon: Pickaxe, market: '$1.96T', aiPen: '2-6%' },
              { title: 'Healthcare', icon: Stethoscope, market: '$11T+', aiPen: '<20%' }
            ].map((sector, idx) => (
              <Card key={idx} className="text-center border-primary/20 hover-elevate" data-testid={`sector-card-${idx}`}>
                <CardContent className="pt-6 pb-6">
                  <sector.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-foreground mb-1">{sector.title}</h3>
                  <p className="text-xs text-foreground/60">{sector.market}</p>
                  <p className="text-xs text-primary font-semibold mt-1">AI: {sector.aiPen}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sector 1: Agriculture */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 1</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Agriculture</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                The global agriculture sector will grow from <strong>$12.12 trillion in 2024</strong> to <strong>$12.97 trillion in 2025</strong>, at a CAGR of 7%. In India, agriculture is projected to reach <strong>INR 236.6 trillion ($2.8 trillion) by 2033</strong>, at a CAGR of over 10%. Barriers to end-to-end automation are pronounced, driven by fragmented farm sizes, local climate, and physical unpredictability.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                AI applications (precision farming, crop health monitoring, yield prediction) are growing rapidly, with the AI in agriculture market expected to reach <strong>$5 billion globally in 2025</strong>. However, this remains a small fraction (<strong>less than 0.1%</strong>) of total global agriculture revenue, especially in smallholder-dominated regions where adoption is slow.
              </p>
            </div>
          </div>

          {/* Subsector AI Penetration */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">AI Penetration by Subsector</CardTitle>
              <CardDescription>Adoption rates vary significantly across farm types and operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50%+</div>
                  <h4 className="font-bold mb-2">Precision Farming</h4>
                  <p className="text-xs text-foreground/60">Large commercial farms in developed markets</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20-25%</div>
                  <h4 className="font-bold mb-2">Small/Medium Farms</h4>
                  <p className="text-xs text-foreground/60">Rising but lagging; manual labor crucial</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8-14%</div>
                  <h4 className="font-bold mb-2">Livestock & Dairy</h4>
                  <p className="text-xs text-foreground/60">AI monitoring in large facilities only</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10-15%</div>
                  <h4 className="font-bold mb-2">Post-Harvest</h4>
                  <p className="text-xs text-foreground/60">Robotics in major agribusiness</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projected Adoption of Agricultural Technology */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Projected Adoption of Agricultural Technology by 2025</CardTitle>
              <CardDescription>Technology adoption rates across commercial farming operations</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={agriTechAdoptionData} layout="vertical" margin={{ left: 20, right: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={true} vertical={false} />
                  <XAxis type="number" stroke="#6B7280" domain={[0, 60]} tickFormatter={(value) => `${value}%`} />
                  <YAxis 
                    dataKey="technology" 
                    type="category" 
                    width={250} 
                    stroke="#6B7280" 
                    tick={{ fontSize: 12 }} 
                  />
                  <Tooltip 
                    formatter={(value: number) => `${value}%`}
                    contentStyle={{ backgroundColor: '#FFF', border: '1px solid #E5E7EB' }}
                  />
                  <Bar dataKey="adoption" radius={[0, 8, 8, 0]}>
                    {agriTechAdoptionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Market Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">AI in Agriculture Market Growth ($B)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { year: '2023', value: 2 },
                    { year: '2025', value: 5 }
                  ]}>
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
                <p className="text-sm text-foreground/60 mt-4 text-center">20%+ CAGR but still &lt;0.1% of total agriculture revenue</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Overall AI Workflow Penetration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center h-[300px]">
                  <div className="text-7xl font-bold text-primary mb-4">1-3%</div>
                  <p className="text-lg text-foreground/70 text-center">of daily agricultural workflows</p>
                  <p className="text-sm text-foreground/50 mt-2 text-center">Gartner 2025 forecast</p>
                </div>
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
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Manual Labor Dependence</h4>
                    <p className="text-sm text-foreground/70">Context-specific decision-making and real-time adaptation to weather, pests, terrain</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Capital Constraints</h4>
                    <p className="text-sm text-foreground/70">Digital divide in rural areas impedes rapid, uniform AI adoption</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Localized Knowledge</h4>
                    <p className="text-sm text-foreground/70">Hands-on skills remain irreplaceable even as AI supports efficiency</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sector 2: Construction */}
      <section className="py-16 bg-gray-50/50 dark:bg-background/50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 2</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Construction</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                The global construction sector exceeds <strong>$12 trillion</strong> in value and is growing as economies urbanize. AI is being piloted in planning (design automation), logistics, and quality control. The AI in construction market is projected to reach approximately <strong>$17 billion by 2029</strong> at a CAGR of 26-33%.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                However, overall workflow penetration remains at approximately <strong>1.4%</strong>, among the lowest of all sectors tracked. The physical, fragmented nature of construction, diverse project settings, and regulatory oversight slow full automation.
              </p>
            </div>
          </div>

          {/* AI Penetration by Subsector */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">AI Adoption by Subsector</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={constructionAIData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis type="number" stroke="#6B7280" domain={[0, 30]} tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="category" type="category" width={180} stroke="#6B7280" tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(value: number) => `${value}%`} />
                  <Bar dataKey="value" fill="#991B1B" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-foreground/60 mt-4 text-center">Large firms lead adoption; SMEs and on-site operations lag significantly</p>
            </CardContent>
          </Card>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">$17B</div>
                <div className="text-sm text-foreground/70">AI in Construction Market by 2029</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">26-33%</div>
                <div className="text-sm text-foreground/70">Projected CAGR</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">~1.4%</div>
                <div className="text-sm text-foreground/70">Current Workflow Penetration</div>
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
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 3</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Arts, Entertainment & Creative Industries</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                The global media and entertainment industry is projected to reach <strong>$3.5 trillion by 2029</strong> at a 3.7% CAGR. The core value remains rooted in human creativity, original performance, and audience connection—generative AI's role is mainly enhancing productivity rather than replacing creative leadership.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                Up to <strong>26% of tasks</strong> in creative sectors may be automated by 2025 (scriptwriting, soundtrack generation, animation support). However, genuine demand remains for artisanal works, live performance, curation, and original artistry.
              </p>
            </div>
          </div>

          {/* Subsector Breakdown */}
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">AI Usage vs Human-Driven Work by Subsector</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={mediaEntertainmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="subsector" stroke="#6B7280" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#6B7280" tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value: number) => `${value}%`} />
                  <Legend />
                  <Bar dataKey="aiUsage" name="AI-Assisted" fill="#991B1B" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="humanDriven" name="Human-Driven" fill="#FCA5A5" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Key Stats Grid */}
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
                <div className="text-3xl font-bold text-primary mb-2">15-25%</div>
                <div className="text-sm text-foreground/70">Music Production AI</div>
                <div className="text-xs text-foreground/50 mt-1">Live performance nearly 0%</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">20-35%</div>
                <div className="text-sm text-foreground/70">Publishing & Design</div>
                <div className="text-xs text-foreground/50 mt-1">Final judgment remains human</div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">&lt;2%</div>
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
                    <p className="text-sm text-foreground/70">Talent-driven branding and live experiences (shows, gallery events) resist platformization</p>
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
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 4</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Social Work, Personal Services & Human Resources</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                Personal care, social work, and HR occupy a significant and growing share of both public and private sector employment. Adoption of automation in this arena remains under <strong>10% of tasks</strong> due to the high-touch, individualized nature of the services.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                While back-end HR and some administrative elements are automated, the core service—<strong>person-to-person support, empathy, counseling, and care delivery</strong>—remains labor-intensive. AI may augment but not replace these human-driven functions.
              </p>
            </div>
          </div>

          {/* HR AI Adoption Growth */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">GenAI Adoption in HR</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={hrAIAdoptionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="year" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" domain={[0, 70]} tickFormatter={(value) => `${value}%`} />
                    <Tooltip formatter={(value: number) => `${value}%`} />
                    <Bar dataKey="adoption" fill="#991B1B" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-foreground/60 mt-4 text-center">Projected jump from 19% (2023) to 61% (2025) — but mostly workflow automation</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Subsector Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">HR Administration</span>
                    <span className="text-lg font-bold text-primary">61%</span>
                  </div>
                  <p className="text-xs text-foreground/60">Workflow automation (recruitment, screening, analytics)</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">Social Care & Counseling</span>
                    <span className="text-lg font-bold text-primary">&lt;8%</span>
                  </div>
                  <p className="text-xs text-foreground/60">AI mainly for appointments, records, triage</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">Personal Services</span>
                    <span className="text-lg font-bold text-primary">26%</span>
                  </div>
                  <p className="text-xs text-foreground/60">Scheduling and logistics only; core delivery human</p>
                </div>
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
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 5</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Mining, Basic Commodities & Raw Materials Extraction</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                Mining and basic commodities extraction remain capital- and labor-intensive, with global revenues over <strong>$1.96 trillion as of 2024</strong>, with a CAGR of 4.6%. Global mining and natural resources are at an "early stage of automation maturity," with high barriers to standardized AI deployment due to geological, regulatory, and safety variability.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                Overall AI penetration is at <strong>2-6% of sector activities</strong>, mostly among large, technologically progressive operators, primarily focused on logistics, safety monitoring, and predictive maintenance.
              </p>
            </div>
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
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {miningAIPenetrationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
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
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">Sector 6</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Healthcare</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base text-foreground/80 leading-relaxed mb-4">
                The global healthcare industry is valued at over <strong>$11 trillion</strong>, encompassing hospitals, ambulatory care, primary care, diagnostics, pharma, and life sciences. Despite strong industry interest, many healthcare subsectors remain highly resilient to generative AI disruption due to regulatory oversight, clinical complexity, the irreplaceability of human empathy and clinical judgment.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                Across most patient-facing healthcare subsectors, generative AI shapes <strong>less than 20%</strong> of day-to-day operations. The fastest adopted use cases are administrative/documentation AI and supply chain logistics, not direct clinical triage or treatment.
              </p>
            </div>
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

      {/* Summary: Why Sectors Resist AI */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">Why These Sectors Resist AI Disruption</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Six key factors explain why certain industries continue to rely on human skills despite AI advances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
          <Card className="max-w-4xl mx-auto bg-white/80 dark:bg-background/80 border-primary/20">
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
