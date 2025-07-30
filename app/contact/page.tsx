import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Blsconsultancy Solutions | CRM Implementation Experts in Orlando",
  description:
    "Get in touch with our CRM implementation experts in Orlando. Multiple contact options available including phone, email, and live chat. Free consultation available.",
  keywords:
    "contact CRM consultant Orlando, CRM implementation consultation, sales process optimization contact, B2B CRM expert contact",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600/20 text-blue-200 border-blue-400/30 mb-6">Get in Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Our CRM Experts</h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to transform your sales process? We're here to help. Multiple ways to reach us, and we'll respond
              within 2 hours during business hours.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Free consultation
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                2-hour response time
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Same-day scheduling
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Speak directly with our CRM experts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">(407) 555-0123</p>
                <p className="text-gray-600 mb-4">Mon-Fri: 8AM-6PM EST</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Call Now</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Email Us</CardTitle>
                <CardDescription>Get detailed responses to your questions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-blue-600 mb-2">hello@blsconsultancy.com</p>
                <p className="text-gray-600 mb-4">Response within 2 hours</p>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Instant support and quick answers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Available 24/7 for immediate assistance</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">Start Chat</Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Office Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free CRM Consultation</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll schedule a free 30-minute consultation to discuss your CRM needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Smith" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Your Company Inc." required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 employees</SelectItem>
                        <SelectItem value="6-25">6-25 employees</SelectItem>
                        <SelectItem value="26-100">26-100 employees</SelectItem>
                        <SelectItem value="100+">100+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentCRM">Current CRM (if any)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select current CRM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No CRM currently</SelectItem>
                        <SelectItem value="salesforce">Salesforce</SelectItem>
                        <SelectItem value="hubspot">HubSpot</SelectItem>
                        <SelectItem value="pipedrive">Pipedrive</SelectItem>
                        <SelectItem value="zoho">Zoho CRM</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k+">$25,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your needs *</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your current sales process challenges and what you hope to achieve with CRM implementation..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you want to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="later">Later this year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
                    Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service. We'll never share
                    your information with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Orlando Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Blsconsultancy Solutions</p>
                    <p className="text-gray-600">123 Business Center Drive</p>
                    <p className="text-gray-600">Suite 450</p>
                    <p className="text-gray-600">Orlando, FL 32801</p>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                      <p>Saturday: 9:00 AM - 2:00 PM EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Emergency Support</h4>
                    <p className="text-sm text-gray-600">
                      24/7 emergency support available for existing clients via our dedicated hotline
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">How quickly can we get started?</h4>
                    <p className="text-sm text-gray-600">
                      Most projects can begin within 1-2 weeks of signing the agreement, depending on your availability
                      for kickoff meetings.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Do you work with businesses outside Orlando?</h4>
                    <p className="text-sm text-gray-600">
                      Yes! While we're based in Orlando, we serve clients nationwide through remote implementation and
                      support.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">What if we're not satisfied?</h4>
                    <p className="text-sm text-gray-600">
                      We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your
                      investment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                  <p className="text-blue-100 mb-4">Our CRM experts are standing by to answer your questions</p>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    <Phone className="mr-2 h-4 w-4" />
                    Call (407) 555-0123
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Orlando Office</h2>
            <p className="text-gray-600">
              Located in the heart of Orlando's business district, easily accessible from I-4 and downtown
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="font-semibold">Interactive Map</p>
              <p className="text-sm">123 Business Center Drive, Suite 450, Orlando, FL 32801</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
