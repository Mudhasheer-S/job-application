import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Admincontext } from "../../App";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { username,setUserNameContext,companyname, setCompanyNameInContext } = useContext(Admincontext);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(()=>{
    if(username == ""){
      setUserNameContext(localStorage.getItem('username'));
    }
    if(companyname == ""){
      setCompanyNameInContext(localStorage.getItem('companyname'));
    }
  },[])

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-8 rtl:space-x-reverse">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Jobizz
            </span>
          </a>
          <ul className="hidden md:flex flex-row md:space-x-8 justify-start font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <Link
                to="/post/home"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/post/dashboard"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative flex items-center">
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              dropdownOpen ? "block" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              onClick={toggleDropdown}
            >
              {username}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdownNavbar"
              className={`absolute top-0 right-0 mt-12 z-10 ${
                dropdownOpen ? "block" : "hidden"
              } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownNavbarLink"
              >
                <li>
                  <Link
                    to="/post/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <Link
                  to="/"
                  onClick={() => {localStorage.setItem('username',"");localStorage.setItem('companyname',"")}}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <ul
          className={`flex flex-col md:hidden ${
            dropdownOpen ? "block" : "hidden"
          } font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800`}
        >
          <li>
            <Link
              to="/post/home"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
