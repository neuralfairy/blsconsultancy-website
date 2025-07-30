import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search, TrendingUp, Users, Settings, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CRM Implementation Blog | Sales Process Optimization Insights",
  description:
    "Expert insights on CRM implementation, sales process optimization, and B2B sales tools. Learn best practices, tips, and strategies from certified CRM consultants.",
  keywords: "CRM blog, sales process optimization, CRM implementation tips, B2B sales strategies, CRM best practices",
}

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to CRM Implementation in 2024",
    excerpt:
      "Everything you need to know about implementing a CRM system that actually drives results, from planning to optimization.",
    author: "Sarah Mitchell",
    date: "January 15, 2024",
    readTime: "12 min read",
    category: "Implementation",
    image: "/placeholder.svg?height=400&width=600",
    slug: "complete-guide-crm-implementation-2024",
  }

  const blogPosts = [
    {
      title: "5 Signs Your Business Needs a CRM System",
      excerpt:
        "Discover the key indicators that it's time to invest in a professional CRM solution for your growing business.",
      author: "Michael Rodriguez",
      date: "January 10, 2024",
      readTime: "6 min read",
      category: "Strategy",
      image: "/placeholder.svg?height=300&width=400",
      slug: "5-signs-business-needs-crm",
    },
    {
      title: "How to Calculate CRM ROI: A Step-by-Step Guide",
      excerpt: "Learn how to measure and demonstrate the return on investment from your CRM implementation project.",
      author: "Emily Chen",
      date: "January 8, 2024",
      readTime: "8 min read",
      category: "Analytics",
      image: "/placeholder.svg?height=300&width=400",
      slug: "calculate-crm-roi-guide",
    },
    {
      title: "CRM Integration Best Practices for B2B Companies",
      excerpt:
        "Essential strategies for integrating your CRM with existing business tools and maintaining data consistency.",
      author: "Sarah Mitchell",
      date: "January 5, 2024",
      readTime: "10 min read",
      category: "Integration",
      image: "/placeholder.svg?height=300&width=400",
      slug: "crm-integration-best-practices",
    },
    {
      title: "Sales Team Training: Getting Maximum CRM Adoption",
      excerpt: "Proven strategies to ensure your sales team embraces and effectively uses your new CRM system.",
      author: "Michael Rodriguez",
      date: "January 3, 2024",
      readTime: "7 min read",
      category: "Training",
      image: "/placeholder.svg?height=300&width=400",
      slug: "sales-team-crm-training",
    },
    {
      title: "Salesforce vs HubSpot vs Pipedrive: 2024 Comparison",
      excerpt:
        "An in-depth comparison of the top CRM platforms to help you choose the right solution for your business.",
      author: "Emily Chen",
      date: "December 28, 2023",
      readTime: "15 min read",
      category: "Reviews",
      image: "/placeholder.svg?height=300&width=400",
      slug: "salesforce-hubspot-pipedrive-comparison",
    },
    {
      title: "Automating Your Sales Pipeline: A Beginner's Guide",
      excerpt:
        "Step-by-step instructions for setting up sales automation that saves time and improves conversion rates.",
      author: "Sarah Mitchell",
      date: "December 25, 2023",
      readTime: "9 min read",
      category: "Automation",
      image: "/placeholder.svg?height=300&width=400",
      slug: "automating-sales-pipeline-guide",
    },
  ]

  const categories = [
    { name: "Implementation", count: 12, icon: Settings },
    { name: "Strategy", count: 8, icon: TrendingUp },
    { name: "Analytics", count: 6, icon: BarChart3 },
    { name: "Training", count: 5, icon: Users },
    { name: "Integration", count: 4, icon: Settings },
    { name: "Reviews", count: 3, icon: BarChart3 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600/20 text-blue-200 border-blue-400/30 mb-6">Expert Insights</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">CRM Implementation Blog</h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert insights, best practices, and proven strategies for successful CRM implementation and sales process
              optimization
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <p className="text-gray-600">Our most comprehensive guide to CRM implementation</p>
          </div>

          <Card className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-blue-100 text-blue-800">{featuredPost.category}</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
                <p className="text-gray-600">Stay updated with the latest CRM trends and best practices</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Read More <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="px-8 bg-transparent">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <Link key={index} href={`/blog/category/${category.name.toLowerCase()}`}>
                        <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-2">
                            <category.icon className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium">{category.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardHeader>
                  <CardTitle>Stay Updated</CardTitle>
                  <CardDescription className="text-blue-100">
                    Get the latest CRM insights delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input
                      placeholder="Your email address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Subscribe Now</Button>
                  </div>
                  <p className="text-xs text-blue-200 mt-3">No spam. Unsubscribe anytime.</p>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Popular Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <Link key={index} href={`/blog/${post.slug}`}>
                        <div className="flex gap-3 p-2 rounded hover:bg-gray-50 transition-colors">
                          <div className="w-16 h-16 relative flex-shrink-0 rounded overflow-hidden">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">{post.title}</h4>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Implement These Strategies?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experts help you implement the CRM strategies and best practices you've learned about
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
              Start Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/roi-calculator">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-100 hover:bg-blue-800/50 px-8 py-4 text-lg bg-transparent"
              >
                Calculate Your ROI
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
