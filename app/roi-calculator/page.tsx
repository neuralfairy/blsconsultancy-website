"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, DollarSign, Users, ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function ROICalculatorPage() {
  const [salesReps, setSalesReps] = useState([5])
  const [avgDealSize, setAvgDealSize] = useState("")
  const [dealsPerMonth, setDealsPerMonth] = useState("")
  const [conversionRate, setConversionRate] = useState([15])
  const [salesCycleLength, setSalesCycleLength] = useState([30])
  const [timeSpentOnAdmin, setTimeSpentOnAdmin] = useState([40])

  const calculateROI = () => {
    const reps = salesReps[0]
    const dealSize = Number.parseFloat(avgDealSize) || 0
    const deals = Number.parseFloat(dealsPerMonth) || 0
    const conversion = conversionRate[0] / 100
    const cycleLength = salesCycleLength[0]
    const adminTime = timeSpentOnAdmin[0] / 100

    // Current state calculations
    const currentMonthlyRevenue = reps * dealSize * deals
    const currentAnnualRevenue = currentMonthlyRevenue * 12

    // With CRM improvements
    const improvedConversion = Math.min(conversion * 1.4, 0.5) // 40% improvement, capped at 50%
    const reducedCycle = cycleLength * 0.75 // 25% reduction in sales cycle
    const reducedAdminTime = adminTime * 0.6 // 40% reduction in admin time
    const additionalSellingTime = (adminTime - reducedAdminTime) * 0.8 // 80% of saved time goes to selling

    const improvedDealsPerMonth = deals * (1 + additionalSellingTime) * (cycleLength / reducedCycle)
    const improvedMonthlyRevenue = reps * dealSize * improvedDealsPerMonth * (improvedConversion / conversion)
    const improvedAnnualRevenue = improvedMonthlyRevenue * 12

    const revenueIncrease = improvedAnnualRevenue - currentAnnualRevenue
    const percentageIncrease = (revenueIncrease / currentAnnualRevenue) * 100

    // Cost savings
    const avgSalaryPerRep = 75000
    const timeSavingsValue = reps * avgSalaryPerRep * (adminTime - reducedAdminTime)

    // CRM implementation cost (estimated based on team size)
    let implementationCost = 2997 // Starter plan
    if (reps > 5 && reps <= 25) implementationCost = 7997 // Professional
    if (reps > 25) implementationCost = 15000 // Enterprise estimate

    const totalBenefit = revenueIncrease + timeSavingsValue
    const roi = ((totalBenefit - implementationCost) / implementationCost) * 100
    const paybackPeriod = implementationCost / (totalBenefit / 12)

    return {
      currentAnnualRevenue,
      improvedAnnualRevenue,
      revenueIncrease,
      percentageIncrease,
      timeSavingsValue,
      implementationCost,
      totalBenefit,
      roi,
      paybackPeriod,
    }
  }

  const results = calculateROI()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600/20 text-blue-200 border-blue-400/30 mb-6">ROI Calculator</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Calculate Your CRM Implementation ROI</h1>
            <p className="text-xl text-blue-100 mb-8">
              See the potential revenue increase and cost savings from implementing a professional CRM system
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <Calculator className="h-5 w-5" />
              <span>Based on real client data and industry benchmarks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-blue-600" />
                  Your Business Information
                </CardTitle>
                <CardDescription>Enter your current sales metrics to calculate potential ROI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Number of Sales Representatives: {salesReps[0]}</Label>
                  <Slider value={salesReps} onValueChange={setSalesReps} max={50} min={1} step={1} className="w-full" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1</span>
                    <span>50+</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="avgDealSize">Average Deal Size ($)</Label>
                  <Input
                    id="avgDealSize"
                    type="number"
                    placeholder="10000"
                    value={avgDealSize}
                    onChange={(e) => setAvgDealSize(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dealsPerMonth">Deals Closed Per Rep Per Month</Label>
                  <Input
                    id="dealsPerMonth"
                    type="number"
                    placeholder="3"
                    value={dealsPerMonth}
                    onChange={(e) => setDealsPerMonth(e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Current Lead Conversion Rate: {conversionRate[0]}%</Label>
                  <Slider
                    value={conversionRate}
                    onValueChange={setConversionRate}
                    max={50}
                    min={5}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>5%</span>
                    <span>50%</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Average Sales Cycle Length: {salesCycleLength[0]} days</Label>
                  <Slider
                    value={salesCycleLength}
                    onValueChange={setSalesCycleLength}
                    max={180}
                    min={7}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>7 days</span>
                    <span>180 days</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Time Spent on Admin Tasks: {timeSpentOnAdmin[0]}%</Label>
                  <Slider
                    value={timeSpentOnAdmin}
                    onValueChange={setTimeSpentOnAdmin}
                    max={70}
                    min={10}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>10%</span>
                    <span>70%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <TrendingUp className="h-6 w-6" />
                    Your Projected ROI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">
                      {results.roi > 0 ? `${Math.round(results.roi)}%` : "N/A"}
                    </div>
                    <p className="text-green-100">Return on Investment</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      ${Math.round(results.revenueIncrease).toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600">Annual Revenue Increase</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{Math.round(results.paybackPeriod)} months</div>
                    <p className="text-sm text-gray-600">Payback Period</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Detailed Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Current Annual Revenue</span>
                    <span className="font-semibold">${Math.round(results.currentAnnualRevenue).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Projected Annual Revenue</span>
                    <span className="font-semibold text-green-600">
                      ${Math.round(results.improvedAnnualRevenue).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Revenue Increase</span>
                    <span className="font-semibold text-green-600">
                      +${Math.round(results.revenueIncrease).toLocaleString()} ({Math.round(results.percentageIncrease)}
                      %)
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Time Savings Value</span>
                    <span className="font-semibold">${Math.round(results.timeSavingsValue).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Implementation Investment</span>
                    <span className="font-semibold text-red-600">-${results.implementationCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t-2 border-gray-300">
                    <span className="font-semibold text-gray-900">Total First-Year Benefit</span>
                    <span className="font-bold text-green-600 text-lg">
                      ${Math.round(results.totalBenefit - results.implementationCost).toLocaleString()}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Detailed Report
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3 text-lg bg-transparent"
                  >
                    Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assumptions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Calculation Assumptions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">CRM Implementation Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• 40% improvement in lead conversion rates</p>
                  <p>• 25% reduction in sales cycle length</p>
                  <p>• 40% reduction in administrative tasks</p>
                  <p>• 80% of saved time redirected to selling activities</p>
                  <p>• Based on data from 500+ implementations</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Cost Calculations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Implementation cost based on team size</p>
                  <p>• Average sales rep salary: $75,000</p>
                  <p>• Time savings valued at hourly rate</p>
                  <p>• Conservative estimates used throughout</p>
                  <p>• Results may vary based on industry and execution</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Achieve These Results?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our proven CRM implementation process has helped 500+ companies achieve similar results
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
