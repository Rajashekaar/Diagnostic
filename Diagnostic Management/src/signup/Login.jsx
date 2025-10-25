import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

function Login() {
  return (

    <div className="container d-flex justify-content-center align-items-center mt-5 bg-light mt-1  ">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">LOGIN</h2>

        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-end mb-3">
            <Link to="/forgot-password" className="text-primary text-decoration-none">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="mb-0">
            <strong>Don't have an account?</strong>
          </p>
          <Link to="/Register" className="text-primary text-decoration-none">
            Signup
          </Link>
        </div>
      </div>
    </div>


  );
}

export default Login;
