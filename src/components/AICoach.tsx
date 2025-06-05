import React from 'react';

interface AICoachProps {
  userName?: string;
  currentLevel?: 'easy' | 'medium' | 'hard';
  streak?: number;
}

export function AICoach({ userName = 'Coder', currentLevel = 'easy', streak = 0 }: AICoachProps) {
  function getEncouragement(streak: number): string {
    if (streak === 0) return "Ready to start your coding journey?";
    if (streak < 3) return "You're building momentum!";
    if (streak < 7) return "Fantastic streak going!";
    return "You're on fire! Keep up the amazing work!";
  }

  function getTipForLevel(level: string): string {
    switch (level) {
      case 'easy':
        return "Focus on understanding the problem first. Break it down into smaller steps before coding.";
      case 'medium':
        return "Look for patterns and consider time complexity. Can you optimize your solution?";
      case 'hard':
        return "Think about edge cases and try to solve the problem with different approaches.";
      default:
        return "Practice consistently and learn from each challenge.";
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Your Coding Coach</h3>
        <div className="bg-gray-700 rounded-lg p-4 text-gray-300">
          <p className="mb-3">{getEncouragement(streak)}</p>
          <p>{getTipForLevel(currentLevel)}</p>
        </div>
      </div>
    </div>
  );
}