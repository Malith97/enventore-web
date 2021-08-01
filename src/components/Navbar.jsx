import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Pic from "../images/designer4pro.jpg";
import { FaHome, FaSlackHash, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars />
          </button>
          <div className="flex flex-row items-center gap-3 my-8">
            <img className="w-14 h-14" src={Pic} />
            <div className="flex flex-col">
              <p className="text-gray-900 font-bold text-md">
                Malith Ileperuma
              </p>
              <p className="text-gray-600 text-xs">Admin</p>
            </div>
          </div>
          {/* Brand */}
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative"></li>
            <li className="inline-block relative"></li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <NavLink
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Tailwind Starter Kit
                  </NavLink>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center my-2 hover:bg-green-500 px-4 hover:text-white rounded-lg">
                <NavLink
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <div className="flex gap-4 align-middle text-center items-center">
                    <FaHome /> Dashboard
                  </div>
                </NavLink>
              </li>

              <li className="items-center my-2 hover:bg-green-500 px-4 hover:text-white rounded-lg">
                <NavLink
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/add_restaurants"
                >
                  <div className="flex gap-4 align-middle text-center items-center">
                    <FaSlackHash /> Add Restaurants
                  </div>
                </NavLink>
              </li>

              <li className="items-center my-2 hover:bg-green-500 px-4 hover:text-white rounded-lg">
                <NavLink
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/view_restaurant"
                >
                  <div className="flex gap-4 align-middle text-center items-center">
                    <FaSlackHash /> View Restaurants
                  </div>
                </NavLink>
              </li>

              <li className="items-center my-2 hover:bg-green-500 px-4 hover:text-white rounded-lg">
                <NavLink
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/user_complaints"
                >
                  <div className="flex gap-4 align-middle text-center items-center">
                    <FaSlackHash /> View User Complaints
                  </div>
                </NavLink>
              </li>

              <li className="items-center my-2 hover:bg-green-500 px-4 hover:text-white rounded-lg">
                <NavLink
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/view_users"
                >
                  <div className="flex gap-4 align-middle text-center items-center">
                    <FaSlackHash /> View Users
                  </div>
                </NavLink>
              </li>

              <li className="items-center my-2 hover:bg-green-500 px-4 hover:text-white rounded-lg">
                <NavLink
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/available_dishes"
                >
                  <div className="flex gap-4 align-middle text-center items-center">
                    <FaSlackHash /> Available Dishes
                  </div>
                </NavLink>
              </li>

              <li className="items-center my-2 hover:bg-green-500 px-4 hover:text-white rounded-lg">
                <NavLink
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <div className="flex gap-4 align-middle text-center items-center">
                    <FaSlackHash /> Analytics
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
