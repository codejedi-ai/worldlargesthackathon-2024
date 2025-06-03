
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Code, Coffee, Trophy, Star } from 'lucide-react'
function LevelCard({
  title,
  description,
  color,
  icon,
  requirements,
  perks,
}: {
  title: string
  description: string
  color: "green" | "yellow" | "red"
  icon: React.ReactNode
  requirements: string
  perks: string[]
}) {
  // ...existing code...
  const colorClasses = {
    green: "border-green-500 bg-gradient-to-br from-gray-800 to-gray-900",
    yellow: "border-yellow-500 bg-gradient-to-br from-gray-800 to-gray-900",
    red: "border-red-500 bg-gradient-to-br from-gray-800 to-gray-900",
  }
  
  const buttonClasses = {
    green: "bg-green-500 hover:bg-green-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    red: "bg-red-500 hover:bg-red-600",
  }

  return (
    <div
      className={`border-2 ${colorClasses[color]} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-lg p-6`}
    >
      <div className="mb-4">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-center">{title}</h3>
        <p className="text-gray-300 text-center">{description}</p>
      </div>
      <div className="mb-6">
        <h4 className="text-sm uppercase text-gray-400 mb-2">Daily Requirement</h4>
        <p className="text-white">{requirements}</p>
      </div>
      <div>
        <h4 className="text-sm uppercase text-gray-400 mb-2">Perks</h4>
        <ul className="space-y-2">
          {perks.map((perk, index) => (
            <li key={index} className="flex items-start">
              <Star className="h-4 w-4 text-blue-500 mr-2 mt-1" />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button className={`w-full ${buttonClasses[color]} text-white py-2 px-4 rounded transition-colors`}>Select This Level</button>
      </div>
    </div>
  )
}

function PlatformCard({ name, color }: { name: string; color: string }) {
  return (
    <div className={`${color} rounded-lg p-4 flex items-center justify-center shadow-md`}>
      <span className="font-bold text-white">{name}</span>
    </div>
  )
}

// Import page components
export default function HomePage(){
  return <HomeContent />
}

const HomeContent = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  
  const handleStartJourney = () => {
    setIsLoading(true)
    setTimeout(() => {
      navigate('/profile-setup')
    }, 1000)
  }

  return (
    <>
      <section className="text-center mb-20">
        <div className="mx-auto mb-8 w-32 h-32 bg-blue-600 rounded-xl flex items-center justify-center">
          <Code className="h-16 w-16 text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Join The <span className="text-blue-500">Code Civilization</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          A community for competitive programmers across all platforms. Solve problems, verify others, and level up
          your career.
        </p>
        <div className="max-w-md mx-auto">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-6 px-10 w-full rounded"
            onClick={handleStartJourney}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Start Your Journey"}
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-20">
        <LevelCard
          title="Easy Level"
          description="Begin your journey with daily easy challenges to build your foundation."
          color="green"
          icon={<Code className="h-12 w-12 text-green-500" />}
          requirements="One easy problem per day"
          perks={["Access to problem database", "Progress tracking", "Community forums"]}
        />
        <LevelCard
          title="Medium Level"
          description="Challenge yourself with intermediate problems and unlock career benefits."
          color="yellow"
          icon={<Coffee className="h-12 w-12 text-yellow-500" />}
          requirements="One medium problem per day"
          perks={["Job board access", "Coffee chats with professionals", "Resume reviews"]}
        />
        <LevelCard
          title="Hard Level"
          description="Master complex algorithms and gain exclusive opportunities."
          color="red"
          icon={<Trophy className="h-12 w-12 text-red-500" />}
          requirements="One hard problem per day"
          perks={["Exclusive job opportunities", "Priority resume visibility", "Advanced workshops"]}
        />
      </section>

      <section className="bg-gray-800 rounded-lg shadow-xl p-10 mb-20">
        <h2 className="text-4xl font-bold mb-6">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-300 text-lg">
          <li>Sign up and choose your difficulty level (Easy, Medium, or Hard)</li>
          <li>
            Solve a daily problem on any competitive programming platform (LeetCode, HackerRank, Codeforces, AtCoder,
            etc.)
          </li>
          <li>Submit your solution for verification by peers who have solved the same problem</li>
          <li>Verify other members' solutions to build community reputation</li>
          <li>Maintain your streak to unlock level-specific perks and opportunities</li>
          <li>Complete weekly contests to advance to higher levels with better perks</li>
        </ol>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-4xl font-bold mb-6">Peer Verification</h2>
          <p className="text-gray-300 text-lg mb-6">
            Our unique peer verification system ensures authenticity and builds community:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded mt-1 mr-2">Submit</span>
              <span>Submit your solution link from any competitive programming platform</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded mt-1 mr-2">Verify</span>
              <span>Other members who solved the same problem verify your solution</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-purple-500 text-white text-xs px-2 py-1 rounded mt-1 mr-2">Certify</span>
              <span>Receive a digital certificate once verified by multiple peers</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">Supported Platforms</h2>
          <p className="text-gray-300 text-lg mb-6">
            CodeCivilization supports problems from all major competitive programming platforms:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <PlatformCard name="LeetCode" color="bg-yellow-500" />
            <PlatformCard name="HackerRank" color="bg-green-500" />
            <PlatformCard name="Codeforces" color="bg-red-500" />
            <PlatformCard name="AtCoder" color="bg-blue-500" />
            <PlatformCard name="CodeChef" color="bg-orange-500" />
            <PlatformCard name="TopCoder" color="bg-purple-500" />
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join the Civilization?</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Start your journey today and join thousands of developers preparing for technical interviews the right way.
        </p>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-6 px-10 rounded"
          onClick={() => navigate('/profile-setup')}
        >
          Sign Up Now
        </button>
      </section>

    </>
  )
}