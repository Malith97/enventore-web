import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Axios from "axios";
import Swal from "sweetalert2";
import { Chart } from "react-google-charts";

const AdminAnalytics = () => {
  // useEffect(() => {
  //   Swal.fire({
  //     title: "Admin Analytics are not available right now",
  //     icon: "info",
  //     confirmButtonText: "Come Back Later",
  //   });
  // }, []);

  const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Header />
        <div className="relative bg-green-900 md:pt-32 pb-32 pt-12"></div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap"></div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        Analytics
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
                </div>
              </div>
            </div>

            <div className="w-full xl:w-full mb-12 xl:mb-0 px-4 mt-8">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <Chart
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Task", "Hours per Day"],
                        ["Work", 11],
                        ["Eat", 2],
                        ["Commute", 2],
                        ["Watch TV", 2],
                        ["Sleep", 7],
                      ]}
                      options={{
                        title: "Overall Users",
                        is3D: true,
                      }}
                      rootProps={{ "data-testid": "2" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <Chart
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Task", "Hours per Day"],
                        ["Work", 11],
                        ["Eat", 2],
                        ["Commute", 2],
                        ["Watch TV", 2],
                        ["Sleep", 7],
                      ]}
                      options={{
                        title: "My Daily Activities",
                        // Just add this option
                        is3D: true,
                      }}
                      rootProps={{ "data-testid": "2" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <Chart
                      width={"600px"}
                      height={"400px"}
                      chartType="LineChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["x", "dogs"],
                        [0, 0],
                        [1, 10],
                        [2, 23],
                        [3, 17],
                        [4, 18],
                        [5, 9],
                        [6, 11],
                        [7, 27],
                        [8, 33],
                        [9, 40],
                        [10, 32],
                        [11, 35],
                      ]}
                      options={{
                        hAxis: {
                          title: "Time",
                        },
                        vAxis: {
                          title: "Popularity",
                        },
                      }}
                      rootProps={{ "data-testid": "1" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <Chart
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Task", "Hours per Day"],
                        ["Work", 11],
                        ["Eat", 2],
                        ["Commute", 2],
                        ["Watch TV", 2],
                        ["Sleep", 7],
                      ]}
                      options={{
                        title: "My Daily Activities",
                        // Just add this option
                        is3D: true,
                      }}
                      rootProps={{ "data-testid": "2" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(AdminAnalytics);
