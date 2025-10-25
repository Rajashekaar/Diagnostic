import React, { useEffect, useState } from 'react';
import './Services.css'; 

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Error fetching services:', err));
  }, []);

  return (
    <div className="services-container m-5">
      <h2>Our DiagnoCare Services</h2>

        <div>
            <button className="btn btn-primary m-5">
                Book A Service
            </button>
        </div>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;