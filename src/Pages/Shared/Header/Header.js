import {
    faRightFromBracket,
    faRightToBracket,
    faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/brand-logo.png";
import auth from "../../../firebase";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header className="py-6 ">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <Link to="/" className="flex justify-center items-center">
            <img src={logo} className="mr-5" alt="" />
            <span>Kingdom of Knowledge</span>
          </Link>
        </div>

        <div>
          <ul>
            <NavLink
              className={ ` text-lg mr-7 ` }

              to="/home"
            >
              home
            </NavLink>
            <NavLink className={` text-lg mr-7 `} to="/blogs">
              blogs
            </NavLink>
            <NavLink className={` text-lg mr-7 `} to="/about">
              about me
            </NavLink>

            <NavLink className="text-lg mr-7" to="/regester">
              <FontAwesomeIcon className="text-xl" icon={faUserPlus} />
            </NavLink>
            {user ? (
              <button onClick={() => signOut(auth)}>
                <FontAwesomeIcon
                  className="text-xl"
                  icon={faRightFromBracket}
                />
              </button>
            ) : (
              <NavLink className="text-lg mr-7" to="/login">
                <FontAwesomeIcon className="text-xl" icon={faRightToBracket} />
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
