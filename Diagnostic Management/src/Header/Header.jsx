import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand fs-2 text-light" href="/">DiagnoCare</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"
            aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/services">Service</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reports">Reports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>

            </ul>
            <div className="ms-lg-3 d-flex align-items-center">
              <Link to="/register">
                <button className="btn btn-primary">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;