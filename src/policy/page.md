"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { AlertCircle, Code, CheckCircle, X, AlertTriangle, Shield } from "lucide-react"

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <header className="bg-black bg-opacity-60 shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-blue-600 rounded-md flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">CodeCivilization</span>
          </a>
          <div className="flex items-center space-x-6">
            <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="/levels" className="text-gray-300 hover:text-blue-400 transition-colors">
              Levels
            </a>
            <a href="/progression" className="text-gray-300 hover:text-blue-400 transition-colors">
              Progression
            </a>
            <a href="/daily" className="text-gray-300 hover:text-blue-400 transition-colors">
              Daily Challenge
            </a>
            <a href="/policy" className="text-blue-400 transition-colors">
              Policies
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign In</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-6 text-center">Platform Policies</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center">
          Our policies ensure fair play, integrity, and a supportive community for all members.
        </p>

        <Tabs defaultValue="genai" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="genai">Gen AI Policy</TabsTrigger>
            <TabsTrigger value="strikes">Strike System</TabsTrigger>
            <TabsTrigger value="conduct">Code of Conduct</TabsTrigger>
          </TabsList>

          <TabsContent value="genai" className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <Shield className="h-10 w-10 text-blue-500 mr-4" />
              <h2 className="text-3xl font-bold">Generative AI Policy</h2>
            </div>

            <p className="mb-8 text-gray-300">
              CodeCivilization is committed to maintaining the integrity of the learning process and ensuring that all
              members develop their skills authentically. This policy outlines our stance on the use of Generative AI
              tools in problem-solving.
            </p>

            <Card className="bg-gray-700 border-green-500 border-l-4 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Acceptable Use of Gen AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Researching generic algorithms and data structures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Learning about programming concepts and techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Understanding problem-solving approaches without getting direct solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Debugging your own code after making a genuine attempt to solve the problem</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-red-500 border-l-4 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <X className="h-5 w-5 text-red-500 mr-2" />
                  Prohibited Use of Gen AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                    <span>Using Gen AI to directly solve competitive programming problems</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                    <span>Submitting solutions generated by AI as your own work</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                    <span>Using AI to generate code for specific problem requirements</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                    <span>Asking AI to optimize or complete partially solved problems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-yellow-500 border-l-4 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                  Verification & Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  Our community-based verification system helps maintain the integrity of submissions:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>Community members who have solved the same problem will verify your solution</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>Verifiers can flag solutions suspected of being generated by AI</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>Flagged solutions will be reviewed by moderators</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>Solutions determined to be AI-generated will not count toward daily check-ins</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-purple-500 border-l-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-purple-500 mr-2" />
                  Consequences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">Violations of our Gen AI policy will result in the following:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>First offense: Warning and invalidation of the submission</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>Second offense: 7-day suspension from submitting solutions</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>Third offense: 30-day suspension and demotion to a lower level</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>Repeated offenses: Permanent ban from the platform</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strikes" className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-10 w-10 text-yellow-500 mr-4" />
              <h2 className="text-3xl font-bold">Strike System & Make-up Policy</h2>
            </div>

            <p className="mb-8 text-gray-300">
              Consistency is key to improving your coding skills. Our strike system helps you stay accountable while
              providing flexibility for life's unexpected events.
            </p>

            <Card className="bg-gray-700 border-yellow-500 border-l-4 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                  Strike Board System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">Missing a daily check-in will result in a strike on your account:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>Each missed day adds one strike to your account</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>Strikes are visible on your profile's strike board</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>Accumulating too many strikes can affect your level status</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>
                      <strong>Easy Level:</strong> 5 strikes before level review
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>
                      <strong>Medium Level:</strong> 4 strikes before level review
                    </span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <span>
                      <strong>Hard Level:</strong> 3 strikes before level review
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-green-500 border-l-4 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Make-up System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">You can remove strikes by completing make-up challenges:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Complete one additional problem (at your level or higher) to remove one strike</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Make-up problems must be completed within 7 days of receiving a strike</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>You can complete up to 2 make-up problems per day</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Make-up problems require the same verification process as regular submissions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-blue-500 border-l-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-500 mr-2" />
                  Grace Periods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  We understand that life happens. CodeCivilization offers the following grace periods:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>
                      <strong>Vacation Mode:</strong> Request up to 14 consecutive days off per year without receiving
                      strikes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>
                      <strong>Emergency Pause:</strong> For medical or family emergencies (requires documentation)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>
                      <strong>Holiday Exemptions:</strong> Major holidays are automatically exempt from check-in
                      requirements
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conduct" className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <Shield className="h-10 w-10 text-purple-500 mr-4" />
              <h2 className="text-3xl font-bold">Code of Conduct</h2>
            </div>

            <p className="mb-8 text-gray-300">
              CodeCivilization is committed to providing a welcoming, supportive, and harassment-free environment for
              all members. Our community thrives on mutual respect and collaboration.
            </p>

            <Card className="bg-gray-700 border-purple-500 border-l-4 mb-6">
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Be respectful and considerate in all interactions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Provide constructive feedback when verifying others' solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Respect the intellectual property of others</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>Report violations of our policies to moderators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>
                      Help create an inclusive environment for programmers of all backgrounds and skill levels
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-red-500 border-l-4">
              <CardHeader>
                <CardTitle>Prohibited Behavior</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                    <span>Harassment, discrimination, or bullying of any kind</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                    <span>Sharing complete solutions to active contest problems</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                    <span>Creating multiple accounts to manipulate the verification system</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                    <span>Falsely reporting other members' solutions</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                    <span>Attempting to circumvent our verification or anti-cheating systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-black mt-20">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">© 2024 CodeCivilization. All rights reserved.</div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
