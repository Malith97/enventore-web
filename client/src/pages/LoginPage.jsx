import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = ({ setLoginUser }) => {
  const history = useHistory();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    Axios.post("http://3.144.145.92:3001/login", user)
      .then((res) => {
        if (res.data.user.type === 1) {
          console.log("Hello Admin " + res);
          console.log(res.data.user);
          localStorage.setItem("isAuth", true);
          localStorage.setItem("userId", res.data.user.userId);
          localStorage.setItem("userName", res.data.user.username);
          localStorage.setItem("userEmail", res.data.user.email);
          history.push("/admindashboard");
          Swal.fire({
            title: "Login Successfull",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        if (res.data.user.type === 2) {
          localStorage.setItem("userId", res.data.user.userId);
          localStorage.setItem("userName", res.data.user.username);
          localStorage.setItem("userEmail", res.data.user.email);
          history.push("/restdashboard");
          Swal.fire({
            title: "Login Successfull",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        if (res.data.user.type === 3) {
          console.log("This is User");
        }
      })
      .catch((res) => {
        localStorage.setItem("isAuth", false);
      });
  };

  return (
    <>
      <div className="min-h-screen bg-green-900 flex justify-center items-center">
        <div className="absolute w-60 h-60 rounded-xl bg-green-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-green-400 bottom-6 right-6 transform rotate-12 hidden md:block"></div>
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
              Welcome to Enventore
            </h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Create an account to enjoy all the services without any hassle!
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email Addres"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
          </div>
          <div className="text-center mt-6">
            <button
              className="py-3 w-64 text-xl text-white bg-green-600 rounded-2xl"
              onClick={login}
            >
              Login
            </button>
            <p className="mt-4 text-sm">
              Already Have An Account?{" "}
              <span className="underline cursor-pointer"> Sign In</span>
            </p>
          </div>
        </div>
        <div className="w-40 h-40 absolute bg-green-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div className="w-20 h-40 absolute bg-green-400 rounded-full bottom-10 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </>
  );
};

export default withRouter(LoginPage);
