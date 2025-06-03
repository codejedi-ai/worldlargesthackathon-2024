import { Link } from "react-router-dom";
export default function Bottom() {
  return (
    <footer className="bg-black mt-20 fixed bottom-0 w-full z-10">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">© 2024 CodeCivilization. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link to="/policy" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/policy" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/policy" className="text-gray-400 hover:text-blue-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}