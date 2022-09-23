import React, { useState } from "react";
import Header from "../components/Header";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router-dom";

const AddRestaurants = () => {
  const [resName, setResName] = useState("");
  const [resRegNo, setResRegNo] = useState(0);
  const [resOwnerName, setResOwnerName] = useState("");
  const [resContact, setResContact] = useState(0);
  const [resProvince, setResProvince] = useState("");
  const [resAddress, setResAddress] = useState("");
  const [resCity, setResCity] = useState("");
  const [resEmail, setEmail] = useState("");
  const [resPhoto, setResPhoto] = useState();
  const [resCover, setResCover] = useState("No Cover Photo...");
  const [description, setDescription] = useState("");

  //intercept

  const addRestaurant = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("storeId", uuidv4());
    data.append("storeName", resName);
    data.append("registeredNo", resRegNo);
    data.append("ownersName", resOwnerName);
    data.append("contactNo", resContact);
    data.append("storeProvince", resProvince);
    data.append("storeAddress", resAddress);
    data.append("storeCity", resCity);
    data.append("email", resEmail);
    data.append("file", resPhoto);
    data.append("storeCover", resCover);
    data.append("description", description);

    Axios.post("http://3.144.145.92:3001/addRestaurant", data)
      .then((response) => {
        Swal.fire({
          title: "Restaurant Added Successful!",
          icon: "success",
          confirmButtonText: "Done",
        });
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  return (
    <>
      <Navbar />
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
                        Add Restaurants
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
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1 text-start px-2">
                      <h4 className="font-bold font-sans text-2xl text-gray-600 mt-4">
                        Add Restaurants
                      </h4>
                      <p className="text-sm text-gray-400">
                        Plese fill below fields
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form
                    action="/addRestaurant"
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={addRestaurant}
                  >
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Restaurant Name
                            </label>
                            <input
                              type="text"
                              name="resname"
                              id="resname"
                              autoComplete="given-name"
                              onChange={(e) => {
                                setResName(e.target.value);
                              }}
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                              placeholder="Enter Name Here"
                              required
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Registered No
                            </label>
                            <input
                              type="text"
                              name="regno"
                              id="regno"
                              onChange={(e) => {
                                setResRegNo(e.target.value);
                              }}
                              required
                              autoComplete="family-name"
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Owner's Name
                            </label>
                            <input
                              type="text"
                              name="ownername"
                              id="ownername"
                              onChange={(e) => {
                                setResOwnerName(e.target.value);
                              }}
                              required
                              autoComplete="given-name"
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                              placeholder="Enter Name Here"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Contact No
                            </label>
                            <input
                              type="text"
                              name="contactno"
                              id="contactno"
                              onChange={(e) => {
                                setResContact(e.target.value);
                              }}
                              required
                              autoComplete="family-name"
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              id="address"
                              onChange={(e) => {
                                setResAddress(e.target.value);
                              }}
                              required
                              autoComplete="street-address"
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">
                              Photo
                            </label>
                            <input
                              type="file"
                              name="file"
                              onChange={(e) => {
                                setResPhoto(e.target.files[0]);
                              }}
                              required
                              className="w-full bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              required
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="state"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Province
                            </label>
                            <input
                              type="text"
                              id="province"
                              name="province"
                              onChange={(e) => {
                                setResProvince(e.target.value);
                              }}
                              required
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              name="city"
                              id="city"
                              onChange={(e) => {
                                setResCity(e.target.value);
                              }}
                              required
                              autoComplete="postal-code"
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-6">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Short Description About Restaurants
                            </label>
                            <input
                              type="textarea"
                              name="description"
                              id="description"
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                              required
                              autoComplete="street-address"
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(AddRestaurants);
