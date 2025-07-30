import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Star, Play, Calculator, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CRM Implementation Services | Blsconsultancy Solutions - Orlando",
  description:
    "Expert CRM setup and sales process optimization services. Transform your business with professional CRM implementation, system integration, and B2B sales tools. Free consultation available.",
  keywords:
    "CRM setup, sales process optimization, system integration, crm implementation, B2B sales tools, Orlando CRM consultant",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-600/20 text-blue-200 border-blue-400/30">
                #1 CRM Implementation Specialists
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform Your Sales Process with
                <span className="bg-gradient-to-r from-blue-400 to-silver-300 bg-clip-text text-transparent">
                  {" "}
                  Expert CRM Implementation
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Boost revenue by 40% with our proven CRM setup and sales process optimization. We help B2B companies
                implement, integrate, and optimize CRMs for maximum ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 text-blue-100 hover:bg-blue-800/50 px-8 py-4 text-lg bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  Free 30-day trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  No setup fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  24/7 support
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-slate-700/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="CRM Implementation Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">Trusted by 500+ companies worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {["Microsoft Partner", "Salesforce Certified", "HubSpot Partner", "ISO 27001", "SOC 2 Compliant"].map(
              (cert, index) => (
                <div key={index} className="text-center">
                  <div className="h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-gray-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{cert}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Blsconsultancy for CRM Implementation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just install software – we transform your entire sales process for measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">40% Revenue Increase</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Our clients see an average 40% boost in revenue within 6 months of CRM implementation
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Certified CRM specialists with 10+ years experience in B2B sales optimization
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">SOC 2 compliant with enterprise-grade security and GDPR compliance</p>
              </CardContent>
            </Card>
          </div>

          {/* ROI Calculator CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Calculate Your CRM ROI</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              See how much revenue you could generate with proper CRM implementation
            </p>
            <Link href="/roi-calculator">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate ROI Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Complete CRM Implementation Services</h2>
            <p className="text-xl text-gray-600">
              From setup to optimization, we handle every aspect of your CRM transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CRM Setup & Configuration",
                description: "Complete installation, customization, and configuration of your chosen CRM platform",
                features: ["Custom field setup", "Workflow automation", "User permissions", "Data migration"],
              },
              {
                title: "Sales Process Optimization",
                description: "Streamline your sales pipeline for maximum efficiency and conversion rates",
                features: ["Pipeline design", "Lead scoring", "Sales stages", "Conversion tracking"],
              },
              {
                title: "System Integration",
                description: "Connect your CRM with existing tools and platforms for seamless operations",
                features: ["Email integration", "Marketing tools", "Accounting software", "Custom APIs"],
              },
              {
                title: "Team Training & Support",
                description: "Comprehensive training programs to ensure your team maximizes CRM potential",
                features: ["Live training sessions", "Video tutorials", "Best practices", "Ongoing support"],
              },
              {
                title: "Analytics & Reporting",
                description: "Advanced reporting dashboards to track performance and identify opportunities",
                features: ["Custom dashboards", "KPI tracking", "Sales forecasting", "ROI analysis"],
              },
              {
                title: "Ongoing Optimization",
                description: "Continuous improvement and optimization based on performance data",
                features: ["Monthly reviews", "Process refinement", "Feature updates", "Strategy consulting"],
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "VP of Sales, TechCorp",
                content:
                  "Blsconsultancy transformed our sales process completely. We saw a 45% increase in qualified leads within 3 months.",
                rating: 5,
                company: "TechCorp Solutions",
              },
              {
                name: "Michael Chen",
                title: "CEO, GrowthLabs",
                content: "The ROI on our CRM implementation was incredible. Our sales team is now 60% more efficient.",
                rating: 5,
                company: "GrowthLabs Inc",
              },
              {
                name: "Emily Rodriguez",
                title: "Sales Director, InnovateCo",
                content:
                  "Professional, knowledgeable, and results-driven. The best investment we've made in our sales infrastructure.",
                rating: 5,
                company: "InnovateCo",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 500+ companies that have boosted their revenue with our CRM implementation services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-100 hover:bg-blue-800/50 px-8 py-4 text-lg bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Free Guide
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">No credit card required • Free 30-day trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
