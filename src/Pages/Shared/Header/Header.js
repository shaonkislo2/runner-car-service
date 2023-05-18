import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import logo2 from "../../../assets/logo2.webp";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  const menuItems = (
    <>
      <li className="font-semibold">
        {" "}
        <Link to="/"> Home </Link>{" "}
      </li>
      <li className="font-semibold">
        {" "}
        <Link to="/about">About</Link>{" "}
      </li>
      <li className="font-semibold">
        {" "}
        <Link to="/service">Service</Link>{" "}
      </li>
      <li className="font-semibold">
        {" "}
        <Link to="/product">Products</Link>{" "}
      </li>
      <li className="font-semibold">
        {" "}
        <Link to="/contact">Contact us</Link>{" "}
      </li>
      {user?.email ? (
        <>
          <li className="font-semibold">
            {" "}
            <Link to="/orders">Orders </Link>{" "}
          </li>
          <li className="font-semibold">
            {" "}
            <button onClick={handleLogOut} className="btn-ghost">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          {" "}
          <Link to="/login"> Login </Link>{" "}
        </li>
      )}
    </>
  );
  return (
    <div className="bg-gray-700 navbar h-16 mb-12   bg-base-100 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-black">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {menuItems}
          </ul>
        </div>
        <div className="flex ">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-14" src={logo2} alt="" />
        </Link>
        <p className="py-3"><span className="text-4xl text-red-600 font-bold">R</span>unner</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
