import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";

export default function Navbar() {
  let { user, logOut } = useAuth();
  const [mode, setMode] = useState("light");

  const changeTheme = () => {
    const html = document.documentElement;
    if (mode === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  useEffect(() => {
    let currentMode = localStorage.getItem("mode") || "light";
    setMode(currentMode);
    const html = document.documentElement;
    html.classList.add(currentMode);
  }, []);
  // console.log(user);

  return (
    <div className="navbar bg-[#F2F2F2] dark:bg-[#1D232A] dark:text-slate-400 text-xl md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-xl">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-red-600"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink
                to={"/addbook"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-red-600 "
                    : ""
                }
              >
                Add Book
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink
                to={"/allbooks"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-red-600"
                    : ""
                }
              >
                All Books
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink
                to={`/borrowedbook`}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-red-600"
                    : ""
                }
              >
                Borrowed Books
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex h-16 w-16">
          <img
            src="https://i.ibb.co/0ZXpxyY/Library.jpg"
            alt="Library"
            className="w-full rounded-full object-cover"
            border="0"
          />
        </Link>
        <div className="text-xl px-2 md:hidden">
          {mode === "dark" ? (
            <div>
              <button onClick={changeTheme} className="btn  dark:btn-neutral">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                </svg>
              </button>
            </div>
          ) : (
            <div>
              <button onClick={changeTheme} className="btn btn-ghost ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M15.5 22c1.05 0 2.05-.16 3-.46-4.06-1.27-7-5.06-7-9.54s2.94-8.27 7-9.54c-.95-.3-1.95-.46-3-.46-5.52 0-10 4.48-10 10s4.48 10 10 10z"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="text-xl pr-2">
          {mode === "dark" ? (
            <div>
              <button onClick={changeTheme} className="btn dark:btn-neutral">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                </svg>
              </button>
            </div>
          ) : (
            <div>
              <button onClick={changeTheme} className="btn btn-ghost ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M15.5 22c1.05 0 2.05-.16 3-.46-4.06-1.27-7-5.06-7-9.54s2.94-8.27 7-9.54c-.95-.3-1.95-.46-3-.46-5.52 0-10 4.48-10 10s4.48 10 10 10z"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
        <ul className="menu menu-horizontal px-1 text-xl gap-3">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/addbook"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
          >
            Add Book
          </NavLink>

          <NavLink
            to={"/allbooks"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
          >
            All Books
          </NavLink>

          <NavLink
            to={`/borrowedbook`}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
          >
            Borrowed Books
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="flex items-center gap-2 text-sm md:text-xl">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="Photo of user" />
              </div>
            </label>
            <div className="text-sm md:text-xl">
              <a className="justify-between">{user.displayName}</a>
            </div>

            <div>
              <button
                className="btn btn-ghost dark:btn-neutral"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to="/signin" className="btn btn-ghost dark:btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
