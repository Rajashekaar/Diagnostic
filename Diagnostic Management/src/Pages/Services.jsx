import React from "react";
import "./Services.css";
import { Link, useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      navigate("/booking");
    } else {
      alert("Please login to book a service.");
      navigate("/login");
    }
  };

  return (
    <div className="services-container bg-light mt-2 m-auto mt-3 p-2 w-75 w-md-75 text-center rounded">
      <div className="head p-3 p-md-5 text-center">
        <h1 className="fs-4 fs-md-2 fw-bold">Our DiagnoCare Services</h1>
      </div>

      <hr className="border border-primary border-3 opacity-75 w-75 m-auto mb-4" />

      <div className="tests mt-5 mb-5">
        <div className="shadow-s w-100 w-md-75 p-3 mx-auto mb-2 bg-body-tertiary rounded fw-bold text-start">
          Blood Test
          <span className="float-end">₹400</span>
        </div>
        <div className="shadow-s w-100 w-md-75 p-3 mx-auto mb-2 bg-body-tertiary rounded fw-bold text-start">
          Urine Test
          <span className="float-end">₹600</span>
        </div>
        <div className="shadow-s w-100 w-md-75 p-3 mx-auto mb-2 bg-body-tertiary rounded fw-bold text-start">
          X-Ray
          <span className="float-end">₹1500</span>
        </div>
        <div className="shadow-s w-100 w-md-75 p-3 mx-auto mb-2 bg-body-tertiary rounded fw-bold text-start">
          Checkup
          <span className="float-end">₹1000</span>
        </div>
      </div>

      <hr className="border border-primary border-3 opacity-75 w-75 m-auto mt-5" />

      <div className="text-center">
        <button onClick={handleClick} className="btn btn-primary m-auto mt-4">
          Book A Service
        </button>
      </div>
    </div>
  );
}

export default Services;
