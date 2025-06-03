import { useState } from "react";

export default function DailyChallengePage() {
  const [selectedTab, setSelectedTab] = useState("submit");
  const [platform, setPlatform] = useState("leetcode");
  const [problemUrl, setProblemUrl] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <h1>Daily Challenge</h1>
      <div>
        <label htmlFor="platform">Platform:</label>
        <input
          id="platform"
          type="text"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="problemUrl">Problem URL:</label>
        <input
          id="problemUrl"
          type="url"
          value={problemUrl}
          onChange={(e) => setProblemUrl(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
      <button onClick={() => alert("Submitted!")}>Submit</button>
    </div>
  );
}


