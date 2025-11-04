import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cx.css";
import { Link } from "react-router-dom";

export default function CxDash() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail");
        console.log("📧 Logged-in email:", userEmail);

        if (!userEmail) {
          setError("No logged-in user found. Please log in again.");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/appointments/${encodeURIComponent(userEmail)}`
        );

        console.log("✅ Appointments fetched:", response.data);

        if (response.data && Array.isArray(response.data)) {
          setAppointments(response.data);
        } else {
          setError("Unexpected server response format.");
        }
      } catch (err) {
        console.error("❌ Error fetching appointments:", err);
        setError("Failed to load appointments. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="container bg-light rounded p-4 shadow-sm">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Dashboard</h1>
      </div>

      <div className="dashboard-container mb-5">
        <div className="card">
          <div className="icon">🧾</div>
          <h3>Book Appointment</h3>
          <p>Schedule a visit </p>
          <Link to="/booking">
            <button>Book New</button>
          </Link>
        </div>

        <div className="card">
          <div className="icon">📘</div>
          <h3>My Reports</h3>
          <p>View your medical history</p>
          <Link to="/reports">
          <button>View Reports</button>
          </Link>
        </div>

        <div className="card">
          <div className="icon">💬</div>
          <h3>Chat Support</h3>
          <p>Need help? Talk to us</p>
          <button>Start Chat</button>
        </div>
      </div>

      <div>
        <h2 className="fw-bold mb-3">My Upcoming Appointments</h2>

        {loading ? (
          <p>⏳ Loading appointments...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : appointments.length === 0 ? (
          <p className="text-muted">No upcoming appointments found.</p>
        ) : (
          <ul className="list-group">
            {appointments.map((appt, index) => (
              <li key={index} className="list-group-item">
                <strong>🩺 {appt.service}</strong>
                <br />
                Date  : {new Date(appt.date).toLocaleDateString()} <br />
                Phone : {appt.phone} <br />
                Name  : {appt.name}
              </li>
            ))}

            
          </ul>
        )}
      </div>
    </div>
  );
}
