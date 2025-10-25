import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Pages/Product.jsx';
import Header from "./Header/Header.jsx";
import Login from './signup/login.jsx';
import Footer from "./Footer/Footer.jsx";
import Services from "./Services/Services.jsx";
// import Register from "./signup/Register.jsx";



function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/register" element={<Register />} /> */}

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;