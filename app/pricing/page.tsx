import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star, Zap } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CRM Implementation Pricing | Transparent Tiered Plans - Blsconsultancy",
  description:
    "Transparent pricing for CRM implementation services. Choose from Starter, Professional, or Enterprise plans. All plans include setup, training, and ongoing support. Free trial available.",
  keywords: "CRM implementation pricing, CRM setup cost, sales process optimization pricing, B2B CRM consultant rates",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$2,997",
      period: "one-time",
      description: "Perfect for small businesses getting started with CRM",
      popular: false,
      features: [
        "CRM platform setup & configuration",
        "Basic workflow automation",
        "Email integration",
        "Team training (up to 5 users)",
        "30 days of support",
        "Basic reporting dashboard",
        "Data migration (up to 1,000 records)",
        "Mobile app setup",
      ],
      limitations: ["Up to 5 users", "Basic integrations only", "Standard support hours"],
    },
    {
      name: "Professional",
      price: "$7,997",
      period: "one-time",
      description: "Comprehensive solution for growing businesses",
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced workflow automation",
        "Custom field configuration",
        "Multiple system integrations",
        "Team training (up to 25 users)",
        "90 days of priority support",
        "Advanced analytics & reporting",
        "Data migration (up to 10,000 records)",
        "Sales pipeline optimization",
        "Lead scoring setup",
        "Email sequence automation",
        "Monthly optimization review",
      ],
      limitations: ["Up to 25 users", "Standard integrations included"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Full-scale solution for large organizations",
      popular: false,
      features: [
        "Everything in Professional",
        "Unlimited users",
        "Custom integrations & APIs",
        "Dedicated account manager",
        "24/7 priority support",
        "Advanced security features",
        "Custom reporting & dashboards",
        "Unlimited data migration",
        "Multi-department setup",
        "Advanced user permissions",
        "Custom training programs",
        "Quarterly strategy reviews",
        "White-label options",
        "SLA guarantees",
      ],
      limitations: [],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600/20 text-blue-200 border-blue-400/30 mb-6">Transparent Pricing</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Choose Your CRM Implementation Plan</h1>
            <p className="text-xl text-blue-100 mb-8">
              Transparent, one-time pricing with no hidden fees. All plans include setup, training, and ongoing support.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                30-day money-back guarantee
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Free trial available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg ${plan.popular ? "ring-2 ring-blue-500 scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    {plan.period !== "quote" && <span className="text-gray-600 ml-2">{plan.period}</span>}
                  </div>
                  <CardDescription className="mt-4 text-gray-600">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="border-t pt-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Plan Limits:</p>
                      <div className="space-y-1">
                        {plan.limitations.map((limitation, idx) => (
                          <p key={idx} className="text-sm text-gray-600">
                            • {limitation}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-6">
                    {plan.name === "Enterprise" ? (
                      <Link href="/contact">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                          Get Custom Quote
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        className={`w-full py-3 ${plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}
                      >
                        {plan.popular ? (
                          <>
                            <Zap className="mr-2 h-4 w-4" />
                            Get Started Now
                          </>
                        ) : (
                          "Choose Plan"
                        )}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">All Plans Include</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                "Free consultation call",
                "Project timeline & milestones",
                "Data security & compliance",
                "Success metrics tracking",
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Calculate Your ROI</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              See how much revenue you could generate and costs you could save with proper CRM implementation
            </p>
            <Link href="/roi-calculator">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Calculate ROI Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing FAQ</h2>

            <div className="space-y-6">
              {[
                {
                  question: "Are there any hidden fees or ongoing costs?",
                  answer:
                    "No hidden fees. Our pricing is completely transparent. The only ongoing costs would be your CRM platform subscription (like Salesforce, HubSpot, etc.) which you pay directly to the provider.",
                },
                {
                  question: "What if I need to upgrade my plan later?",
                  answer:
                    "You can upgrade at any time. We'll credit your previous investment toward the higher tier and only charge the difference.",
                },
                {
                  question: "Do you offer payment plans?",
                  answer:
                    "Yes, we offer flexible payment plans for Professional and Enterprise customers. Contact us to discuss options that work for your budget.",
                },
                {
                  question: "What's included in the 30-day money-back guarantee?",
                  answer:
                    "If you're not completely satisfied with our service within 30 days of project completion, we'll refund your investment in full, no questions asked.",
                },
                {
                  question: "How long does implementation typically take?",
                  answer:
                    "Starter: 2-3 weeks, Professional: 4-6 weeks, Enterprise: 8-12 weeks. Timeline depends on complexity and your team's availability for training and feedback.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your plan and start your CRM transformation today
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
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
