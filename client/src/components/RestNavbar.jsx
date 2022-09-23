import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSlackHash, FaBars } from "react-icons/fa";
import Pic from "../images/default.png";
import { RestaurantNavBar } from "../Data";

const RestNavbar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const [click, setClick] = useState(false);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const userDetails = () => {
    let username = document.getElementById("userName");
    username.append(userName);
    let emailAddress = document.getElementById("userEmail");
    emailAddress.append(userEmail);
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <div className="flex flex-row items-center gap-3 my-8">
            <img className="w-14 h-14" src={Pic} />
            <div className="flex flex-col">
              <p className="text-gray-900 font-bold text-md" id="userName"></p>
              <p className="text-gray-600 text-xs" id="userEmail"></p>
            </div>
          </div>
          {/* Navigation */}
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            {RestaurantNavBar.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  activeClassName="items-center my-2 bg-green-500 px-4 py-3 rounded-lg text-white"
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-4 my-3 font-bold"
                >
                  <div className="flex gap-4 align-middle text-center items-center">
                    <FaHome /> {item.title}
                  </div>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default RestNavbar;
