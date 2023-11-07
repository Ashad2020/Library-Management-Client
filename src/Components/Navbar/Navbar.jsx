import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function Navbar() {
  let { user, logOut } = useAuth();
  // console.log(user);

  return (
    <div className="navbar bg-[#F2F2F2] text-xl px-8">
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
                    ? "underline text-red-600 "
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink
                to={"/"}
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
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "underline text-red-600 "
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
                    ? "underline text-red-600 "
                    : ""
                }
              >
                Borrowed Books
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex h-12 w-62">
          <p>Logo</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-600" : ""
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
                  ? "underline text-red-600 "
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
                  ? "underline text-red-600 "
                  : ""
              }
            >
              Borrowed Books
            </NavLink>
          </li>
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
            <div>
              <a className="justify-between">{user.displayName}</a>
            </div>

            <div>
              <button onClick={logOut}>Logout</button>
            </div>
          </div>
        ) : (
          <Link to="/signin">Login</Link>
        )}
      </div>
    </div>
  );
}
