import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import { getSession } from "@auth0/nextjs-auth0";
import Guest from "./Guest";
import LoggedIn from "./LoggedIn";
// import { setCookie } from "cookies-next";
const Header = async () => {
  const session = await getSession();
  return (
    <header className="header">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-bold text-xl text-indigo-600">
              Mindmap Flow
            </Link>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <FontAwesomeIcon icon={faBars} className="fas fa-bars" />
            </button>
          </div>
          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <Navigation />
            {session ? <LoggedIn user={session.user} /> : <Guest />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
