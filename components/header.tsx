import { Link } from "react-router-dom";
import { Code } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black bg-opacity-60 shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-blue-600 rounded-md flex items-center justify-center">
            <Code className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">CodeCivilization</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/levels" className="text-gray-300 hover:text-blue-400 transition-colors">
            Levels
          </Link>
          <Link to="/progression" className="text-gray-300 hover:text-blue-400 transition-colors">
            Progression
          </Link>
          <Link to="/daily" className="text-gray-300 hover:text-blue-400 transition-colors">
            Daily Challenge
          </Link>
          <Link
            to="/sign-in"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}