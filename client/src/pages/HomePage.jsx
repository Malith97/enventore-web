import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Chart } from "react-google-charts";

const HomePage = () => {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));

  /*
  if (isAuth == false || isAuth == null) {
    console.log("User not logged into System");
  } else {
    console.log("User is Authorized");
  }*/

  const exportdata = (e) => {
    e.preventDefault();

    Axios.post("http://3.144.145.92:3001/exportdata")
      .then((response) => {
        console.log("export started");
        console.log(response);
      })
      .catch((err) => {
        console.log("export err");
        console.log(err);
      });
  };

  if (isAuth)
    return (
      <>
        <Navbar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <Header />
          {/* Header */}
          <div className="relative bg-green-900 md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
              <div>
                {/* Card stats */}
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                              Total Number Dishes
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                              116
                            </span>
                          </div>
                          <div className="relative w-auto pl-4 flex-initial">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                              <i className="far fa-chart-bar"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                          <span className="text-emerald-500 mr-2">
                            <i className="fas fa-arrow-up"></i> 34%
                          </span>
                          <span className="whitespace-nowrap">
                            Than Last Week
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                              No of Users
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                              35
                            </span>
                          </div>
                          <div className="relative w-auto pl-4 flex-initial">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                              <i className="fas fa-chart-pie"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                          <span className="text-red-500 mr-2">
                            <i className="fas fa-arrow-down"></i> 14%
                          </span>
                          <span className="whitespace-nowrap">
                            Than Last Month
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                              No of Restaurants
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                              11
                            </span>
                          </div>
                          <div className="relative w-auto pl-4 flex-initial">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                              <i className="fas fa-users"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                          <span className="text-orange-500 mr-2">
                            <i className="fas fa-arrow-down"></i> 40%
                          </span>
                          <span className="whitespace-nowrap">
                            Than Last Month
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                              Next Cycle
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                              12.00 AM
                            </span>
                          </div>
                          <div className="relative w-auto pl-4 flex-initial">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500">
                              <i className="fas fa-percent"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                          <span className="text-emerald-500 mr-2">
                            <i className="fas fa-arrow-up"></i> 12%
                          </span>
                          <span className="whitespace-nowrap">
                            Upgrade Time
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap"></div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-blueGray-700">
                          New Restaurants
                        </h3>
                      </div>
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          See all
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Restaurant Name
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Location
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Owners Name
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Contact
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            Cafe Nior
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Nugegoda
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Prasad Dammika
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                            011 252 6584
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            Lounge 919
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Maharagama
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Suresh Raina
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                            011 254 8759
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            Tri Traingle
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Colombo
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Matheesha Ileperuma
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                            011 458 6598
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            Mom's Choice
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Hashen Fernando
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Wadduwa
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                            077 254 8965
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            Lakrasa Foods
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Saman Fernando
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Panadura
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                            011 987 5145
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-blueGray-700">
                          Restaurant Registration
                        </h3>
                      </div>
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Start Process
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <Chart
                      className="h-full"
                      chartType="LineChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["x", "Restaurants"],
                        [0, 1],
                        [1, 3],
                        [2, 4],
                        [3, 6],
                        [4, 7],
                        [5, 8],
                        [6, 9],
                        [7, 10],
                        [8, 11],
                        [9, 14],
                        [10, 15],
                        [11, 18],
                      ]}
                      options={{
                        hAxis: {
                          title: "Time",
                        },
                        vAxis: {
                          title: "No Of Restaurant",
                        },
                      }}
                      rootProps={{ "data-testid": "1" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <footer className="block py-4">
              <div className="container mx-auto px-4">
                <hr className="mb-4 border-b-1 border-blueGray-200" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-4/12 px-4">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                      Copyright © {new Date().getFullYear()}{" "}
                      <a
                        href="https://www.sylabs.tech"
                        className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                      >
                        Enventore
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-8/12 px-4">
                    <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                      <li>
                        <a
                          href="https://sylabs.tech"
                          className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                        >
                          Malith Ileperuma
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
};

export default withRouter(HomePage);
