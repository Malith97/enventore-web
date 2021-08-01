import React from "react";
import Header from "../components/Header";

import img1 from "../images/palmyrah.jpg";
import img2 from "../images/ply.jfif";
import img3 from "../images/moonglagoon.jfif";

const ViewRestaurants = () => {
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100">
        <Header />
        {/* Header */}
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
                        View Restaurants
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
              <div className="grid grid-cols-3 gap-4">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" src={img1} alt="Mountain" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-lg mb-2">Mom's Kitchen</div>
                    <p class="text-gray-700 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    </p>
                    <p className="text-sm font-bold text-green-800 mt-2">
                      Panadura
                    </p>
                  </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" src={img2} alt="Mountain" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-lg mb-2">Mom's Kitchen</div>
                    <p class="text-gray-700 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    </p>
                    <p className="text-sm font-bold text-green-800 mt-2">
                      Panadura
                    </p>
                  </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" src={img3} alt="Mountain" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-lg mb-2">Mom's Kitchen</div>
                    <p class="text-gray-700 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    </p>
                    <p className="text-sm font-bold text-green-800 mt-2">
                      Panadura
                    </p>
                  </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" src={img2} alt="Mountain" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-lg mb-2">Mom's Kitchen</div>
                    <p class="text-gray-700 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    </p>
                    <p className="text-sm font-bold text-green-800 mt-2">
                      Panadura
                    </p>
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

export default ViewRestaurants;
