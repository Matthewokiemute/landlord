import { FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-green-100 shadow-md">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-green-500">Land</span>
            <span className="text-green-700">Lord</span>
          </h1>
        </Link>
        <form className="bg-white px-4 rounded-full p-3 flex gap-2 items-center flex-wrap">
          <input
            type="text"
            placeholder="Bedsitters..."
            className="bg-transparent focus:outline-none outline-none w-28 sm:w-64"
          />
          <FaSearch className="text-green-500" />
        </form>
        <ul className="flex items-center gap-4 text-sm sm:text-lg">
          <Link to="/list">
            <li className="hidden sm:inline text-slate-800 hover:text-slate-600">
              Share you home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-800 hover:text-slate-600">About us</li>
          </Link>
          <Link to="/login">
            <li className="flex items-center gap-1  text-slate-800 hover:text-green-700 hover:bg-green-200 hover:rounded-full p-2 px-4 transition-all ease-in-out duration-500">
              <FaUserCircle className="text-green-500" />
              <span>Login</span>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
