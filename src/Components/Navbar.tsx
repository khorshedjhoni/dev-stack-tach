import { HiMenu } from "react-icons/hi";
import img from "../assets/logo-text.png";

function Navbar() {
  return (
    <div className="drawer sticky top-0 z-50 ">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <div className="w-full bg-white shadow-md">
          <div className="flex justify-between items-center py-1.5 px-3 max-w-7xl mx-auto">
            <div className="md:hidden flex-none">
              <label
                htmlFor="navbar-drawer"
                aria-label="open sidebar"
                className="btn btn-ghost btn-xs text-xl p-0 min-h-0 h-auto"
              >
                <HiMenu />
              </label>
            </div>

            <div className="flex-1 text-center md:text-left md:flex-none">
              <img
                src={img}
                alt="Brand Logo"
                className="h-8 w-auto inline-block"
              />
            </div>

            <div className="hidden md:flex flex-1 justify-center">
              <ul className="menu menu-horizontal menu-sm p-0 font-semibold gap-x-0">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Technologies</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-1">
              <button className="btn btn-ghost btn-xs sm:btn-sm px-2">
                Sign In
              </button>
              <button className="btn btn-secondary btn-xs sm:btn-sm rounded-full px-3">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
