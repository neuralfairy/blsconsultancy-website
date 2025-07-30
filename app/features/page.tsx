import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Settings, BarChart3, Users, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CRM Implementation Features | Advanced Sales Process Optimization",
  description:
    "Comprehensive CRM setup features including system integration, sales automation, analytics, and team training. Transform your B2B sales process with our expert implementation services.",
  keywords:
    "CRM features, sales automation, system integration, CRM setup, B2B sales tools, sales process optimization",
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600/20 text-blue-200 border-blue-400/30 mb-6">Complete Feature Suite</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Comprehensive CRM Implementation Features</h1>
            <p className="text-xl text-blue-100 mb-8">
              Everything you need to transform your sales process, from initial setup to ongoing optimization
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="setup" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-12">
              <TabsTrigger value="setup">Setup</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="setup" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">CRM Setup & Configuration</h2>
                <p className="text-xl text-gray-600">Complete installation and customization of your CRM platform</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Settings className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Custom Field Configuration</CardTitle>
                    <CardDescription>Tailored field setup to match your unique business processes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Custom contact fields</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Deal tracking fields</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Company information fields</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Activity tracking</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>User Management & Permissions</CardTitle>
                    <CardDescription>Secure access control and role-based permissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Role-based access control</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Team hierarchy setup</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Data visibility controls</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Security protocols</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Interactive Demo</h3>
                    <p className="text-blue-100 mb-6">See our CRM setup process in action with a live demonstration</p>
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">Watch Setup Demo</Button>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="CRM Setup Demo"
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="automation" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Sales Process Automation</h2>
                <p className="text-xl text-gray-600">Streamline workflows and automate repetitive tasks</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Zap,
                    title: "Lead Scoring",
                    description: "Automatically score and prioritize leads based on behavior and demographics",
                    features: [
                      "Behavioral scoring",
                      "Demographic scoring",
                      "Custom scoring rules",
                      "Real-time updates",
                    ],
                  },
                  {
                    icon: BarChart3,
                    title: "Pipeline Automation",
                    description: "Automate deal progression and stage transitions",
                    features: ["Stage automation", "Task creation", "Follow-up reminders", "Deal alerts"],
                  },
                  {
                    icon: Globe,
                    title: "Email Sequences",
                    description: "Automated email campaigns and follow-up sequences",
                    features: ["Drip campaigns", "Trigger-based emails", "Personalization", "A/B testing"],
                  },
                ].map((feature, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="integration" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">System Integration</h2>
                <p className="text-xl text-gray-600">Connect your CRM with existing tools and platforms</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Email Platforms",
                  "Marketing Automation",
                  "Accounting Software",
                  "E-commerce Platforms",
                  "Social Media",
                  "Customer Support",
                  "Analytics Tools",
                  "Custom APIs",
                ].map((integration, index) => (
                  <Card key={index} className="border-0 shadow-lg text-center p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{integration}</h3>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Analytics & Reporting</h2>
                <p className="text-xl text-gray-600">Advanced insights and performance tracking</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="CRM Analytics Dashboard"
                  width={800}
                  height={400}
                  className="rounded-lg mx-auto"
                />
              </div>
            </TabsContent>

            <TabsContent value="training" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Training & Support</h2>
                <p className="text-xl text-gray-600">Comprehensive training programs for your team</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Live Training Sessions</CardTitle>
                    <CardDescription>Interactive training with our CRM experts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Group training sessions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">One-on-one coaching</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Role-specific training</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Learning Resources</CardTitle>
                    <CardDescription>Comprehensive library of training materials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Video tutorials</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Best practice guides</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Knowledge base</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ongoing Support</h2>
                <p className="text-xl text-gray-600">24/7 support and continuous optimization</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "24/7 Technical Support",
                    description: "Round-the-clock assistance for any technical issues",
                    features: ["Live chat support", "Phone support", "Email support", "Emergency hotline"],
                  },
                  {
                    title: "Monthly Health Checks",
                    description: "Regular system reviews and optimization recommendations",
                    features: [
                      "Performance analysis",
                      "Usage reports",
                      "Optimization suggestions",
                      "Best practice reviews",
                    ],
                  },
                  {
                    title: "Strategic Consulting",
                    description: "Ongoing strategic guidance for CRM optimization",
                    features: ["Quarterly reviews", "Strategy sessions", "Process improvement", "ROI analysis"],
                  },
                ].map((support, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>{support.title}</CardTitle>
                      <CardDescription>{support.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {support.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how our comprehensive CRM implementation can transform your sales
            process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-100 hover:bg-blue-800/50 px-8 py-4 text-lg bg-transparent"
              >
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
