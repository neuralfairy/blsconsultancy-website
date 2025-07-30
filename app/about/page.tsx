import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, ArrowRight, CheckCircle, MapPin, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Blsconsultancy Solutions | CRM Implementation Experts in Orlando",
  description:
    "Learn about our team of certified CRM specialists with 10+ years experience in B2B sales optimization. Based in Orlando, serving businesses nationwide with expert CRM implementation services.",
  keywords:
    "CRM consultants Orlando, sales process experts, CRM implementation team, B2B sales consultants, certified CRM specialists",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      title: "Founder & Lead CRM Strategist",
      experience: "12+ years",
      certifications: ["Salesforce Certified", "HubSpot Partner", "Microsoft Dynamics"],
      bio: "Former VP of Sales at Fortune 500 company, specialized in B2B sales transformation",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      title: "Senior Implementation Specialist",
      experience: "8+ years",
      certifications: ["Pipedrive Expert", "Zoho Partner", "Monday.com Certified"],
      bio: "Technical expert in CRM integrations and automation workflows",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Chen",
      title: "Training & Support Manager",
      experience: "6+ years",
      certifications: ["Adult Learning Specialist", "Change Management", "Customer Success"],
      bio: "Ensures seamless team adoption and ongoing CRM optimization",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const stats = [
    { number: "500+", label: "Successful Implementations" },
    { number: "40%", label: "Average Revenue Increase" },
    { number: "95%", label: "Client Satisfaction Rate" },
    { number: "24/7", label: "Support Availability" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600/20 text-blue-200 border-blue-400/30 mb-6">Orlando-Based CRM Experts</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Blsconsultancy Solutions</h1>
            <p className="text-xl text-blue-100 mb-8">
              We're a team of certified CRM specialists dedicated to transforming B2B sales processes and helping
              businesses achieve measurable growth through strategic CRM implementation.
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <MapPin className="h-5 w-5" />
              <span>Based in Orlando, FL • Serving Clients Nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To empower businesses with CRM solutions that don't just organize data, but transform entire sales
                processes to drive measurable revenue growth and operational efficiency.
              </p>
              <p className="text-gray-600 mb-8">
                We believe that every business deserves a CRM system that works as hard as they do. That's why we go
                beyond basic setup to create comprehensive solutions that align with your unique business processes and
                growth objectives.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Results-Driven Approach</h3>
                    <p className="text-gray-600">Every implementation is measured by tangible business outcomes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Long-term Partnership</h3>
                    <p className="text-gray-600">
                      We're committed to your ongoing success, not just project completion
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Industry Expertise</h3>
                    <p className="text-gray-600">Deep understanding of B2B sales processes across various industries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/10 to-slate-700/10 rounded-2xl p-8">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Our team working together"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified specialists bring decades of combined experience in CRM implementation, sales optimization,
              and business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.title}</CardDescription>
                  <Badge variant="outline" className="mx-auto">
                    {member.experience} Experience
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{member.bio}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Results-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We measure our success by your success. Every decision is made with your business outcomes in mind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Client Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're not just vendors – we're partners invested in your long-term growth and success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We maintain the highest standards in everything we do, from technical implementation to customer
                  service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From startup to industry leader</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2019",
                  title: "Company Founded",
                  description: "Started with a mission to help small businesses optimize their sales processes",
                },
                {
                  year: "2020",
                  title: "First 100 Clients",
                  description: "Reached our first major milestone and established proven methodologies",
                },
                {
                  year: "2021",
                  title: "Team Expansion",
                  description: "Grew our team of certified specialists to meet increasing demand",
                },
                {
                  year: "2022",
                  title: "Enterprise Focus",
                  description: "Expanded services to serve Fortune 500 companies and complex implementations",
                },
                {
                  year: "2023",
                  title: "Industry Recognition",
                  description: "Recognized as top CRM implementation partner by major platforms",
                },
                {
                  year: "2024",
                  title: "500+ Implementations",
                  description: "Celebrated milestone of 500+ successful CRM implementations with measurable ROI",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-blue-100 text-blue-800">{milestone.year}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Businesses Choose Blsconsultancy</h2>
            <p className="text-xl text-gray-600">
              The difference that sets us apart in the CRM implementation industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Proven Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our clients consistently see 40%+ revenue increases within 6 months of implementation. We don't just
                  promise results – we deliver them.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    95% client satisfaction rate
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    500+ successful implementations
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Industry-leading ROI metrics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Certified Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our team holds certifications from all major CRM platforms and continuously updates skills to stay
                  ahead of industry trends.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Salesforce & HubSpot certified
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Microsoft & Pipedrive partners
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Continuous education & training
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Comprehensive Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  From initial consultation to ongoing optimization, we provide complete support throughout your CRM
                  journey.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    24/7 technical support
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Comprehensive team training
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Ongoing optimization reviews
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Customized Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We don't believe in one-size-fits-all. Every implementation is tailored to your specific business
                  processes and growth objectives.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Industry-specific configurations
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Custom workflow automation
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Scalable architecture design
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Work with Orlando's CRM Experts?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven methodology can transform your sales process and drive measurable growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
              Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-100 hover:bg-blue-800/50 px-8 py-4 text-lg bg-transparent"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
