import React from "react";
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="doc-footer">
      <div className="container">
        <p>Your health is our priority © {new Date().getFullYear()} DiagnoCare</p>
      </div>
    </footer>
  );
}

export default Footer;