import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", data.user.name);
        localStorage.setItem("userEmail", data.user.email); 

        alert(`✅ ${data.message}\nWelcome, ${data.user.name}!`);

        navigate("/");
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error, please try again later.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 m-auto">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4 ms-1">LOGIN</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-end mb-3">Forgot password?</div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="mb-0">
            <strong>Don't have an account?</strong>
          </p>
          <Link to="/Register" className="text-primary text-decoration-none">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
