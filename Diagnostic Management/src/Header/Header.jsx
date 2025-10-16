import React from 'react';

function Header() {
  return (
<div >
       <nav class="navbar navbar-expand-lg bg-body-tertiary bg-colo">
  <div class="container-fluid">
    <h2 class="font-weight-bold font-family ">DiagnoCare</h2>
    
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-0 mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reports</a>
        </li>
        <li class="nav-item me-3">
            <a class="nav-link" href="#">Login</a>
          </li>
      </ul>
     
        <button class="btn btn-primary" type="submit ">Get Started</button>
      
    </div>
  </div>
</nav>
</div>
  );
}

export default Header;
