'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Layers, Zap } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="ml-2 text-lg font-bold text-blue-600 dark:text-blue-400">Notion Widget Creator</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-32 bg-gradient-to-b from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-600 dark:text-blue-400">
                  Create Stunning Widgets for Your Notion Pages
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                  Enhance your Notion workspace with custom, embeddable widgets. Design, create, and share in minutes.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-950">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-16 bg-white dark:bg-gray-800">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600 dark:text-blue-400">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-blue-50 dark:bg-gray-700">
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-blue-600 dark:text-blue-400">Easy to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  Create widgets with our intuitive drag-and-drop interface. No coding required.
                </CardContent>
              </Card>
              <Card className="bg-blue-50 dark:bg-gray-700">
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-blue-600 dark:text-blue-400">Customizable</CardTitle>
                </CardHeader>
                <CardContent>
                  Tailor widgets to match your Notion pages style and functionality needs.
                </CardContent>
              </Card>
              <Card className="bg-blue-50 dark:bg-gray-700">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 mb-2 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-blue-600 dark:text-blue-400">Seamless Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  Embed your widgets into Notion pages with a simple copy-paste action.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600 dark:text-blue-400">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-600 text-white w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Design Your Widget</h3>
                <p className="text-gray-600 dark:text-gray-300">Choose from our templates or start from scratch using our widget builder.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-600 text-white w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Customize and Preview</h3>
                <p className="text-gray-600 dark:text-gray-300">Adjust colors, fonts, and functionality to match your needs. Preview in real-time.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-600 text-white w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Embed in Notion</h3>
                <p className="text-gray-600 dark:text-gray-300">Copy the generated embed code and paste it into your Notion page. Its that simple!</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600 dark:text-blue-400">Flexible Pricing</h2>
            <div className="grid max-w-3xl mx-auto md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Free Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$0/month</div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      5 widgets per month
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Basic templates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Community support
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-500 dark:border-blue-600 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Pro Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$9.99/month</div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Unlimited widgets
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Premium templates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Priority support
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Start Free Trial</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Notion Widget Creator. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}