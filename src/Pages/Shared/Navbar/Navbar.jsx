import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Button } from "keep-react";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
const Navbar = () => {
  // -----------------     dark mode    ---------------

  const [isDarkMode, setDarkMode] = useState(false);
  const toogleTheame = () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    setDarkMode((prevDarMode) => !prevDarMode);
    if (currentTheme === "night") {
      htmlElement.setAttribute("data-theme", "corporate");
    } else {
      htmlElement.setAttribute("data-theme", "night");
    }
  };
  const themeIconSize = "30px";

  const Navlinks = (
    <>
      <li>
        <Link to="">Home</Link>
      </li>

      <li>
        <Link to="/portfollio">Portfollio</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li></li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-300 shadow-2xl border-cyan-200 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="text-3xl  menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Navlinks}
            </ul>
          </div>
          {/* --------icon ------ */}
          <a className="rounded-2xl">
            <img className="w-15 h-12" src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{Navlinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          {/* -------dashboad----------- */}
          <Link to="/dashboad">
            {" "}
            <button className="btn">
              Dashboad
              <div className="badge badge-secondary">+01</div>
            </button>
          </Link>

          {/* -------theme --------------*/}
          <div>
            <button
              className="text-[#FF3811] btn btn-active btn-ghost "
              onClick={toogleTheame}
            >
              {isDarkMode ? (
                <MdDarkMode size={themeIconSize} />
              ) : (
                <BsSunFill size={themeIconSize} />
              )}
            </button>
          </div>
          {/* ----------download resume----------- */}
          <div>
            <a href={logo} download>
              <Button className="btn btn-active btn-secondary">
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
