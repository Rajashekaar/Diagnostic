import React from "react";

function Paypage() {
  return (
    <div>
      <div>
        <section className="section"> 
          <h2>Available Diagnostic Tests</h2>
          <div className="tests">
            <div className="test-card">
              <h3>Complete Blood Count (CBC)</h3>
              <p>Measures essential components of your blood.</p>
              <div className="price">₹499</div>
              <button className="book-btn">Book Now</button>
            </div>
            <div className="test-card">
              <h3>Liver Function Test</h3>
              <p>Helps evaluate liver health and detect damage.</p>
              <div className="price">₹699</div>
              <button className="book-btn">Book Now</button>
            </div>
            <div className="test-card">
              <h3>Thyroid Function Test</h3>
              <p>Helps evaluate thyroid health and detect damage.</p>
              <div className="price">₹500</div>
              <button className="book-btn">Book Now</button>
            </div>
            <div className="test-card">
              <h3>Iron Studies</h3>
              <p>Helps evaluate iron defiency and detect damage.</p>
              <div className="price">₹499</div>
              <button className="book-btn">Book Now</button>
            </div>
            <div className="test-card">
              <h3>Full Body Checkup</h3>
              <p>Comprehensive analysis for your complete health.</p>
              <div className="price">₹2999</div>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        </section>
        <section className="section">
          <h2>Payment Gateway</h2>
          <p>Select a preferred payment method:</p>
          <div className="payment">
            <div className="payment-option">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                alt="Razorpay Logo"
              />
              <h3>Pay using Razorpay</h3>
              <button className="pay-btn">Proceed to Pay</button>
            </div>
            <div className="payment-option">
              <img
                src="https://th.bing.com/th/id/OIP.DEutaPGsF0eb_RlVhZjxdAAAAA?w=223&h=104&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3.svg"
                alt="Stripe Logo"
              />
              <h3>Pay using Stripe</h3>
              <button className="pay-btn">Proceed to Pay</button>
            </div>
          </div>
        </section>
        <section className="section admin-dashboard">
          <h2>Admin Dashboard</h2>
          <p>Manage and monitor bookings and payment status:</p>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Patient Name</th>
                <th>Test Booked</th>
                <th>Amount</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#BK1001</td>
                <td>Rahul Sharma</td>
                <td>CBC</td>
                <td>₹499</td>
                <td>
                  <span className="status paid">Paid</span>
                </td>
              </tr>
              <tr>
                <td>#BK1002</td>
                <td>Priya Verma</td>
                <td>Liver Test</td>
                <td>₹699</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>#BK1003</td>
                <td>Aditya Mehta</td>
                <td>Full Body Checkup</td>
                <td>₹2999</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Paypage;
