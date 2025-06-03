import React, { useEffect, useState } from 'react';
import { Tavus } from '@tavus/js';

interface AICoachProps {
  userName?: string;
  currentLevel?: 'easy' | 'medium' | 'hard';
  streak?: number;
}

const tavus = new Tavus('YOUR_TAVUS_API_KEY');

export function AICoach({ userName = 'Coder', currentLevel = 'easy', streak = 0 }: AICoachProps) {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function generateCoachVideo() {
      try {
        const response = await tavus.generate({
          template: 'coding_coach',
          variables: {
            user_name: userName,
            level: currentLevel,
            streak_count: streak,
            encouragement: getEncouragement(streak),
            tip: getTipForLevel(currentLevel)
          }
        });
        setVideoUrl(response.url);
      } catch (error) {
        console.error('Error generating coach video:', error);
      } finally {
        setLoading(false);
      }
    }

    generateCoachVideo();
  }, [userName, currentLevel, streak]);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Your Coding Coach</h3>
        {videoUrl ? (
          <video
            className="w-full rounded-lg"
            controls
            src={videoUrl}
            poster="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg"
          />
        ) : (
          <div className="bg-gray-700 rounded-lg p-4 text-gray-300">
            Unable to load coach video. Please try again later.
          </div>
        )}
      </div>
    </div>
  );
}