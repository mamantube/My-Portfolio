import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <nav className=" bg-gray-700">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div>
                <h2>MamanTech</h2>
            </div>
            <div className=" md:hidden">
              <button aria-controls="mobile-menu" aria-expanded="false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 text-gray-400 hover:text-white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className=" mx-10 my-10">
        <Outlet key="layout---dashboard" />
      </div>
    </>
  );
}
