import React, { useState } from "react";
import "./Booking.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Appointment booked successfully!");
        setFormData({ name: "", email: "", phone: "", date: "", service: "" });
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("❌ Something went wrong. Try again later.");
    }
  };

  return (
    <div className="container-form container mt-5 bg-light rounded w-50 p-4">
      <h2 className="mb-4 ms-2">Book Your Service</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Select Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="service" className="form-label">
            Select Service
          </label>
          <select
            className="form-select"
            id="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option value="Blood Test">Blood Test</option>
            <option value="General Checkup">General Checkup</option>
            <option value="Urin Test">Urin Test</option>
            <option value="Heart Health">Heart Health</option>
            <option value="Thyroid Panel">Thyroid Panel</option>
            <option value="X-Ray">X-Ray</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
