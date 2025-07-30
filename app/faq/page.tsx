import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { HelpCircle, Search, ArrowRight, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CRM Implementation FAQ | Common Questions Answered",
  description:
    "Find answers to frequently asked questions about CRM implementation, pricing, timelines, and support. Get expert answers from certified CRM consultants.",
  keywords: "CRM implementation FAQ, CRM setup questions, sales process optimization FAQ, CRM consultant questions",
}

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I know if my business needs a CRM system?",
        answer:
          "You likely need a CRM if you're experiencing: difficulty tracking leads and customers, missed follow-ups, inconsistent sales processes, lack of visibility into your sales pipeline, or challenges with team collaboration. Generally, businesses with 5+ employees or 50+ leads per month benefit significantly from CRM implementation.",
      },
      {
        question: "What's the typical timeline for CRM implementation?",
        answer:
          "Implementation timelines vary by complexity: Starter projects (1-5 users) typically take 2-3 weeks, Professional implementations (6-25 users) take 4-6 weeks, and Enterprise projects (25+ users) take 8-12 weeks. The timeline depends on data migration complexity, integrations needed, and your team's availability for training.",
      },
      {
        question: "Do you work with businesses outside of Orlando?",
        answer:
          "Yes! While we're based in Orlando, FL, we serve clients nationwide through remote implementation and support. We use video conferencing, screen sharing, and project management tools to ensure seamless collaboration regardless of location.",
      },
    ],
  },
  {
    category: "Implementation Process",
    questions: [
      {
        question: "What happens during the CRM implementation process?",
        answer:
          "Our process includes: 1) Discovery call to understand your needs, 2) CRM platform selection and setup, 3) Data migration and cleanup, 4) Custom field and workflow configuration, 5) Integration with existing tools, 6) Team training and onboarding, 7) Testing and optimization, 8) Go-live support and ongoing optimization.",
      },
      {
        question: "Can you migrate data from our existing system?",
        answer:
          "Yes, we handle data migration from spreadsheets, existing CRMs, email systems, and other business tools. We clean and organize your data during migration to ensure accuracy. The amount of data included depends on your plan: Starter (1,000 records), Professional (10,000 records), Enterprise (unlimited).",
      },
      {
        question: "What if we need custom integrations?",
        answer:
          "We can integrate your CRM with most business tools including email platforms, marketing automation, accounting software, e-commerce platforms, and custom applications. Basic integrations are included in Professional and Enterprise plans, while complex custom integrations may require additional investment.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "Are there any hidden fees or ongoing costs?",
        answer:
          "No hidden fees. Our pricing is completely transparent and includes everything listed in your plan. The only ongoing costs are your CRM platform subscription (paid directly to the provider like Salesforce, HubSpot, etc.) and any optional ongoing support services you choose.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment options for Professional and Enterprise clients. You can pay 50% upfront and 50% upon completion, or arrange a custom payment schedule that works for your budget. Contact us to discuss options.",
      },
      {
        question: "What's included in the money-back guarantee?",
        answer:
          "We offer a 30-day money-back guarantee from project completion. If you're not completely satisfied with our implementation, we'll refund your investment in full. This guarantee covers the quality of our work, not changes in business requirements or scope.",
      },
    ],
  },
  {
    category: "Training & Support",
    questions: [
      {
        question: "How much training is included?",
        answer:
          "Training varies by plan: Starter includes training for up to 5 users, Professional for up to 25 users, and Enterprise includes unlimited users. We provide live group sessions, one-on-one coaching, video tutorials, and comprehensive documentation.",
      },
      {
        question: "What kind of ongoing support do you provide?",
        answer:
          "Support varies by plan: Starter includes 30 days of email support, Professional includes 90 days of priority support plus monthly check-ins, and Enterprise includes 24/7 support with a dedicated account manager. All plans include access to our knowledge base and video tutorial library.",
      },
      {
        question: "What if our team struggles with CRM adoption?",
        answer:
          "We have proven strategies to ensure high adoption rates: customized training for different roles, gradual rollout phases, change management support, and ongoing coaching. We also provide adoption tracking and can adjust our approach based on usage patterns. Our goal is 90%+ team adoption within 60 days.",
      },
    ],
  },
  {
    category: "Technical Questions",
    questions: [
      {
        question: "Which CRM platforms do you work with?",
        answer:
          "We're certified partners with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho CRM, Monday.com, and Microsoft Dynamics. We'll help you choose the best platform based on your specific needs, budget, and growth plans.",
      },
      {
        question: "How secure is our data during implementation?",
        answer:
          "We follow enterprise-grade security protocols including encrypted data transfer, secure access controls, signed NDAs, and SOC 2 compliance. Your data is never stored on our systems permanently, and we follow strict data handling procedures throughout the implementation process.",
      },
      {
        question: "Can you help with CRM customization after implementation?",
        answer:
          "Yes, we provide ongoing optimization services. As your business grows and changes, we can add new fields, workflows, integrations, and features. Professional and Enterprise clients receive monthly optimization reviews, and all clients can purchase additional customization services as needed.",
      },
    ],
  },
  {
    category: "Results & ROI",
    questions: [
      {
        question: "What kind of results can we expect?",
        answer:
          "Based on our 500+ implementations, clients typically see: 40% increase in revenue within 6 months, 25% reduction in sales cycle length, 60% improvement in lead conversion rates, and 40% reduction in administrative tasks. Results vary by industry and implementation quality.",
      },
      {
        question: "How do you measure CRM implementation success?",
        answer:
          "We track key metrics including: user adoption rates, data quality scores, process efficiency improvements, revenue impact, time savings, and customer satisfaction. We provide monthly reports showing progress against baseline metrics established during the discovery phase.",
      },
      {
        question: "What if we don't see the expected results?",
        answer:
          "We're committed to your success. If you're not seeing expected results within 90 days, we'll provide additional optimization at no charge. Our success is measured by your success, and we'll work with you until you achieve your CRM goals.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600/20 text-blue-200 border-blue-400/30 mb-6">Frequently Asked Questions</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">CRM Implementation FAQ</h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers to common questions about our CRM implementation services, pricing, and process
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search FAQ..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, questionIndex) => (
                        <AccordionItem
                          key={questionIndex}
                          value={`${categoryIndex}-${questionIndex}`}
                          className="border-b last:border-b-0"
                        >
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                            <span className="font-semibold text-gray-900">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Our CRM experts are here to help. Get in touch for personalized answers.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>Speak with an expert immediately</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-4">(407) 555-0123</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Call Now</Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Get instant answers 24/7</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Available right now</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Start Chat</Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Free Consultation</CardTitle>
                  <CardDescription>Detailed discussion of your needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">30-minute session</p>
                  <Link href="/contact">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Schedule Now</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Now that you have answers, let's discuss how we can transform your sales process
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

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            ),
          }),
        }}
      />
    </div>
  )
}
