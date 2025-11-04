import React from 'react'
import "./Admin.css"
import { Link } from 'react-router-dom'

export default function AdminDash() {
  return (

       <div className="container bg-light rounded p-4 shadow-sm">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Admin Dashboard</h1>
      </div>

      <div className="dashboard-container-A mb-5">
        <div className="card-A">
          <div className="icon-A"> 📅</div>
          <h3> Bookings</h3>
          <p>View customer Bookings </p>
          <Link >
            <button className="btn btn-primary">Go To Bookings</button>
          </Link>
        </div>

        <div className="card-A">
          <div className="icon-A">🔬</div>
          <h3> Testings </h3>
          <p> Add And Modify Services </p>
          <Link >
          <button className="btn btn-primary">Go To Testings</button>
          </Link>
        </div>

        <div className="card-A">
          <div className="icon-A">📁 </div>
          <h3>Reports</h3>
          <p >Upload Test Reports</p>
          <button className="btn btn-primary">Go To Reports</button>
        </div>
      </div>

      
      </div>
      

  )
}
