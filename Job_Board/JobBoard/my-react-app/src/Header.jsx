import { Link } from "react-router-dom";
import Logo from "./assets/jobizz.png";

export default function Header() {
  return (
    <header className="bg-white shadow-md text-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center"
        >
          <img src={Logo} className="h-8 w-8 rounded-full" alt="Jobizz Logo" />
          <span className="ml-3 text-2xl font-semibold">Jobizz</span>
        </a>
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/mainpage"
            className="text-gray-800 hover:text-yellow-500 transition"
          >
            About Us
          </Link>
          <Link
            to="/loginpage"
            className="text-gray-800 hover:text-yellow-500 transition"
          >
            Log In
          </Link>
          <Link
            to="/signUpPage"
            className="text-yellow-500 hover:text-yellow-400 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/"
            className="text-gray-800 hover:text-yellow-500 transition"
          >
            Home
          </Link>
        </nav>
        <button className="flex md:hidden p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
