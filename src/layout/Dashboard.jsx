import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
    const [open, setOpen] = useState(false);

    function openMenu() {
        setOpen(!open)
        console.log("ini")
    }

    let closeMenu = open ? "block" : "hidden"
    let showMenu = open ? "hidden" : "block"


  return (
    <>
      <nav className=" bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div>
              <h1 className=" text-white font-bold">MamanTech</h1>
            </div>
            <div className={` ${closeMenu} sm:ml-6 md:block`}>
              <div className=" flex space-x-4 p-2">
                <NavLink
                  to="/"
                  className=" px-3 py2 rounded-md text-sm font-medium  text-gray-300 hover:text-white hover:bg-gray-700 active:bg-gray-900" aria-current="page"
                >
                  Home
                </NavLink>
                <NavLink
                  to="resume"
                  className=" px-3 py2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700  active:bg-gray-900"
                >
                  Resume
                </NavLink>
                <NavLink
                  to="project"
                  className=" px-3 py2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700  active:bg-gray-900"
                >
                  Project
                </NavLink>
                <NavLink
                  to="contact"
                  className=" px-3 py2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700  active:bg-gray-900"
                >
                  Contact
                </NavLink>
              </div>
            </div>
            <div className=" md:hidden">
              <button
                aria-controls="mobile-menu"
                aria-expanded="false"
                className=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={openMenu}
              >
                 <span className="absolute -inset-0.5"></span>
                 <span className="sr-only">Open main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${showMenu} block h-6 w-6 size-10 text-gray-400 hover:text-white`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`${closeMenu} h-6 w-6 size-10 text-gray-400 hover:text-white`}

                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div>
        <Outlet key="layout---dashboard" />
      </div>
    </>
  );
}
