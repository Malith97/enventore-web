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
                      width={"400px"}
                      height={"400px"}
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Pizza", "Popularity"],
                        ["Vegetarian", 6],
                        ["Vegan", 8],
                        ["None", 11],
                      ]}
                      options={{
                        title: "Users Overview",
                        sliceVisibilityThreshold: 0.2, // 20%
                      }}
                      rootProps={{ "data-testid": "7" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <Chart
                      width={"400px"}
                      height={"400px"}
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ["Task", "Hours per Day"],
                        ["Admins", 1],
                        ["Restaurants", 10],
                        ["Users", 11],
                        ["Dishes", 75],
                      ]}
                      options={{
                        title: "Full Picture",
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
                        ["x", "Users"],
                        [0, 0],
                        [1, 1],
                        [2, 4],
                        [3, 8],
                        [4, 9],
                        [5, 12],
                        [6, 14],
                        [7, 18],
                        [8, 23],
                        [9, 27],
                        [10, 28],
                        [11, 34],
                      ]}
                      options={{
                        hAxis: {
                          title: "Time",
                        },
                        vAxis: {
                          title: "No of Users",
                        },
                      }}
                      rootProps={{ "data-testid": "1" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <Chart
                      chartType="BarChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        [
                          "Element",
                          "Density",
                          { role: "style" },
                          {
                            sourceColumn: 0,
                            role: "annotation",
                            type: "string",
                            calc: "stringify",
                          },
                        ],
                        ["Spicy", 24, "#73f094", null],
                        ["Salty", 26, "#fffd6b", null],
                        ["Dairy", 15, "#699dff", null],
                        ["Carbs", 29, "#ff66d4", null],
                        ["Oily", 21, "#b87333", null],
                        ["Meat", 24, "#ff577e", null],
                        ["Sugar", 31.45, "#ca57ff", null],
                      ]}
                      options={{
                        title: "Dish Types",
                        width: 600,
                        height: 450,
                        bar: { groupWidth: "95%" },
                        legend: { position: "none" },
                      }}
                      // For tests
                      rootProps={{ "data-testid": "6" }}
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
