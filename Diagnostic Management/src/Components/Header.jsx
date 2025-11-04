import React, { useEffect, useState } from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <h1 className="nav-logo">
            <Link className="nav-link" to="/">
              DiagnoCare
            </Link>
          </h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Service
                </Link>
              </li>
            </ul>

            <div >
              {isLoggedIn ? (
                <div className="ms-lg-3 d-flex align-items-center gap-3">
                  
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                      <li className="nav-item">
                        <div>
                          <Link className="nav-link" to="/cxdash">
                            Dashboard
                          </Link>
                        </div>
                      </li>
                    </ul>

                  <button
                    className="btn btn-outline-light"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div>
                  <Link to="/register">
                    <button className="btn btn-outline-light m-2">
                      Sign Up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="btn btn-outline-light m-2">Login</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
