"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { Code, Trophy, Star, Award, ArrowRight, Clock, Calendar, Shield, AlertTriangle, Zap, BookOpen, Briefcase, Check, XCircle } from "lucide-react"

export default function LevelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 pt-16 pb-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Code className="h-10 w-10" /> Code Civilization
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Master programming challenges from platforms like LeetCode, HackerRank, Codeforces, and AtCoder to advance through civilization tiers. 
            Each tier unlocks new abilities and recognition in the coding world.
          </p>
        </div>
      </header>

      {/* Tier Sections */}
      <main className="container mx-auto px-6 py-8">
        <div className="space-y-16 max-w-4xl mx-auto">
          
          {/* Easy Tier */}
          <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-xl p-8 shadow-lg border border-emerald-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold text-emerald-300">Novice Tier</h2>
              <Star className="h-10 w-10 text-emerald-400" />
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-200">Begin your journey in Code Civilization with daily challenges.</p>
              
              <div className="bg-black bg-opacity-20 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3 text-emerald-300">Daily Requirements</h3>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-emerald-400" />
                  <p className="text-lg">Complete one easy problem each day</p>
                </div>
              </div>
              
              <div className="bg-black bg-opacity-20 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3 text-emerald-300">Level Up Condition</h3>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-emerald-400" />
                  <p className="text-lg">Complete weekly contest: 2 easy + 2 medium problems</p>
                </div>
              </div>
              
              <div className="bg-black bg-opacity-20 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3 text-emerald-300">Perks</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-emerald-400" />
                    <p className="text-lg">Access to daily problems</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-emerald-400" />
                    <p className="text-lg">Community support</p>
                  </li>
                </ul>
              </div>
              
              <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2">
                Start Daily Challenge <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </section>
          
          {/* Medium Tier */}
          <section className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 shadow-lg border border-blue-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold text-blue-300">Adept Tier</h2>
              <Award className="h-10 w-10 text-blue-400" />
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-200">Advance your skills with more challenging problems.</p>
              
              <div className="bg-black bg-opacity-20 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">Daily Requirements</h3>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-blue-400" />
                  <p className="text-lg">Complete one medium problem each day</p>
                </div>
              </div>
              
              <div className="bg-black bg-opacity-20 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">Level Up Condition</h3>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-blue-400" />
                  <p className="text-lg">Complete weekly contest: 2 medium + 2 hard problems</p>
                </div>
              </div>
              
              <div className="bg-black bg-opacity-20 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">Perks</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-blue-400" />
                    <p className="text-lg">Access to job board</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-blue-400" />
                    <p className="text-lg">Resume reviews</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-blue-400" />
                    <p className="text-lg">Coffee chats with professionals</p>
                  </li>
                </ul>
              </div>
              
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-500 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2">
                Access Medium Challenges <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </section>
          
          {/* Hard Tier */}
          <section className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-8 shadow-lg border border-purple-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold text-purple-300">Master Tier</h2>
              <Zap className="h-10 w-10 text-purple-400" />
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-200">Tackle the most challenging algorithmic problems.</p>
              
              <div className="bg-black bg-opacity-20 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3 text-purple-300">Daily Requirements</h3>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-purple-400" />
                  <p className="text-lg">Complete one hard problem each day</p>
                </div>
              </div>
              
              <div className="bg-black bg-opacity-20 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3 text-purple-300">Level Maintenance</h3>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-purple-400" />
                  <p className="text-lg">Consistent daily check-ins required</p>
                </div>
              </div>
              
              <div className="bg-black bg-opacity-20 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3 text-purple-300">Perks</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-purple-400" />
                    <p className="text-lg">Exclusive job opportunities</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-purple-400" />
                    <p className="text-lg">Priority resume visibility</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="h-6 w-6 text-purple-400" />
                    <p className="text-lg">All lower tier benefits</p>
                  </li>
                </ul>
              </div>
              
              <button className="w-full mt-6 bg-purple-600 hover:bg-purple-500 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2">
                Access Hard Challenges <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </section>
          
          {/* Verification System */}
          <section className="bg-gray-800 rounded-xl p-8 mt-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-7 w-7 text-yellow-400" /> Solution Verification System
            </h2>
            <p className="mb-6 text-lg">Each solution must be verified by community members who have already solved the problem on the same platform.</p>
            
            <div className="space-y-8 mt-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl text-yellow-300 font-semibold mb-4">Daily Check-in Process</h3>
                <ol className="list-decimal list-inside space-y-3 ml-2 text-lg">
                  <li>Solve a problem matching your tier difficulty on any platform</li>
                  <li>Submit your solution for verification</li>
                  <li>Other members who solved the problem will verify your solution</li>
                  <li>Upon verification, you receive credit for your daily check-in</li>
                </ol>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl text-red-300 font-semibold mb-4 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-400" /> Anti-Cheating Policy
                </h3>
                <p className="mb-3 text-lg">Using AI responsibly:</p>
                <ul className="list-disc list-inside ml-2 space-y-2 text-lg">
                  <li>You may use Gen AI to search for generic algorithms</li>
                  <li>Completing problems directly with Gen AI is prohibited</li>
                  <li>Community verification helps ensure integrity</li>
                  <li>Violations will result in solutions not counting for check-ins</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Progress Section */}
          <section className="bg-gray-800 rounded-xl p-8 mt-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Trophy className="h-7 w-7 text-yellow-400" /> Your Civilization Progress
            </h2>
            <div className="w-full bg-gray-700 h-6 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 h-full rounded-full" style={{ width: '35%' }}></div>
            </div>
            <div className="flex justify-between mt-3 text-md text-gray-400">
              <span>Novice</span>
              <span>Adept</span>
              <span>Master</span>
              <span>Legend</span>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
