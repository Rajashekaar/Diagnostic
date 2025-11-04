import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, role: "user" }),
      });

      if (res.ok) {
        alert("Registration successful!");
        setFormData({ name: "", email: "", phone: "", password: "" });
      } else {
        alert("Error during registration. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Server error. Check your backend connection.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 m-auto">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4 ms-2">REGISTER</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="mb-0">
            <strong>If already have an account?</strong>
          </p>
          <Link to="/login" className="text-primary text-decoration-none">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
