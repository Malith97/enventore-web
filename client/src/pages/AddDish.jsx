import React, { useState } from "react";
import Header from "../components/Header";
import Axios from "axios";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/RestNavbar";
import { withRouter } from "react-router-dom";

const AddDish = () => {
  const [storeId, setStoreId] = useState(localStorage.getItem("userId"));
  const [dishName, setDishName] = useState("");
  const [dishCategory, setDishCategory] = useState();
  const [dishAvailableHours, setDishAvailableHours] = useState("");
  const [dishIngredients, setDishIngredients] = useState([]);
  const [dishType, setDishType] = useState(0);
  const [dishPrice, setDishPrice] = useState(0);
  const [dishPhoto, setDishPhoto] = useState();
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");

  const addNewDish = async (e) => {
    e.preventDefault();
    const newdishdata = new FormData();
    newdishdata.append("dishId", uuidv4());
    newdishdata.append("storeId", storeId);
    newdishdata.append("dishName", dishName);
    newdishdata.append("dishCategory", dishCategory);
    newdishdata.append("dishAvailableHours", dishAvailableHours);
    newdishdata.append("dishIngredients", dishIngredients);
    newdishdata.append("dishType", dishType);
    newdishdata.append("dishPrice", dishPrice);
    newdishdata.append("file", dishPhoto);
    newdishdata.append("description", description);
    newdishdata.append("genre", genre);

    Axios.post("http://3.144.145.92:3001/addNewDish", newdishdata)
      .then((e) => {
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
                        Add New Dish
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
                        Add New Dish
                      </h4>
                      <p className="text-sm text-gray-400">
                        Plese fill below fields
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form
                    action="/addNewDish"
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={addNewDish}
                  >
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Dish Name
                            </label>
                            <input
                              type="text"
                              name="resname"
                              id="resname"
                              onChange={(e) => {
                                setDishName(e.target.value);
                              }}
                              autoComplete="given-name"
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                              placeholder="Enter Dish Name Here"
                              required
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Category
                            </label>
                            <select
                              id="category"
                              name="category"
                              onChange={(e) => {
                                setDishCategory(e.target.value);
                              }}
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            >
                              <option disabled selected>
                                Choose Food Category
                              </option>
                              <option value="1">
                                breads, cereals, rice, pasta, noodles and other
                                grains
                              </option>
                              <option value="2">vegetables and legumes</option>
                              <option value="3">fruit</option>
                              <option value="4">
                                milk, yoghurt, cheese and/or alternatives
                              </option>
                              <option value="5">
                                lean meat, fish, poultry, eggs, nuts and
                                legumes.
                              </option>
                            </select>
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Available Hours
                            </label>
                            <input
                              type="text"
                              name="hours"
                              id="hours"
                              onChange={(e) => {
                                setDishAvailableHours(e.target.value);
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
                              Ingredients
                            </label>
                            <input
                              type="text"
                              name="ingredients"
                              id="ingredients"
                              onChange={(e) => {
                                var ingred = e.target.value;
                                var array = ingred.split(",");
                                setDishIngredients(array);
                              }}
                              placeholder="Please enter ingredients here by separating"
                              required
                              autoComplete="family-name"
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Type
                            </label>
                            <select
                              name="type"
                              id="type"
                              onChange={(e) => {
                                setDishType(e.target.value);
                              }}
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            >
                              <option disabled>Choose Food Type</option>
                              <option>None</option>
                              <option value="Spicy">Spicy</option>
                              <option value="Salty">Salty</option>
                              <option value="Dairy">Dairy</option>
                              <option value="Carbs">Carbs</option>
                              <option value="Oily">Oily</option>
                              <option value="Meat">Meat</option>
                              <option value="Sugar">Sugar</option>
                            </select>
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="state"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Price
                            </label>
                            <input
                              type="text"
                              id="price"
                              name="price"
                              onChange={(e) => {
                                setDishPrice(e.target.value);
                              }}
                              placeholder="Enter Dish Price Here"
                              required
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Photo
                            </label>
                            <input
                              type="file"
                              name="file"
                              onChange={(e) => {
                                setDishPhoto(e.target.files[0]);
                              }}
                              required
                              className="w-full bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-6">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Genre
                            </label>
                            <input
                              type="textarea"
                              name="genre"
                              id="genre"
                              onChange={(e) => {
                                setGenre(e.target.value);
                              }}
                              required
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-6">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Short Description About Dish
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

export default withRouter(AddDish);
