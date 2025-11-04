import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Header from "./Components/Header.jsx";
import Login from './signup/Login.jsx';
import Services from "./Pages/Services.jsx";
import Register from "./signup/Register.jsx";
import About from "./Pages/About.jsx";
import BookingForm from "./Pages/BookingForm.jsx";
import CxDash from "./Pages/CxDash.jsx"
import Reports from "./Pages/Reports.jsx"
import AdminDash from "./Pages/AdminDash.jsx"
import Paypage from "./Pages/Paypage.jsx";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/cxdash" element={<CxDash />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/admindash" element={<AdminDash />} />
          <Route path="/paypage" element={<Paypage />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;