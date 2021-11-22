import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Axios from "axios";
import Swal from "sweetalert2";

const AdminAnalytics = () => {
  useEffect(() => {
    Swal.fire({
      title: "Admin Analytics are not available right now",
      icon: "info",
      confirmButtonText: "Come Back Later",
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Header />
        <div className="relative bg-green-900 md:pt-32 pb-32 pt-12"></div>
      </div>
    </>
  );
};

export default withRouter(AdminAnalytics);
