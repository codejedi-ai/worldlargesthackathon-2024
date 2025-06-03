import { useState } from "react";
import { AICoach } from "../components/AICoach";

export default function DailyChallengePage() {
  const [selectedTab, setSelectedTab] = useState("submit");
  const [platform, setPlatform] = useState("leetcode");
  const [problemUrl, setProblemUrl] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Daily Challenge</h1>
            <div className="bg-gray-800 rounded-lg p-6 space-y-6">
              <div>
                <label htmlFor="platform" className="block text-sm font-medium mb-2">Platform:</label>
                <input
                  id="platform"
                  type="text"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="problemUrl" className="block text-sm font-medium mb-2">Problem URL:</label>
                <input
                  id="problemUrl"
                  type="url"
                  value={problemUrl}
                  onChange={(e) => setProblemUrl(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium mb-2">Notes:</label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button 
                onClick={() => alert("Submitted!")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Submit Solution
              </button>
            </div>
          </div>
          
          {/* AI Coach Sidebar */}
          <div className="md:col-span-1">
            <AICoach 
              userName="Coder"
              currentLevel="easy"
              streak={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}