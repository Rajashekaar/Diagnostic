import React from 'react';
import doctorImage from './assets/adobe.png';



function App() {

  return (
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'150px' }}>
      <div>
        <h1>Get Diagnostic <br />Tests & Health <br /> Checkups Done</h1>

        <p>Book a hassle- free lab visit or home pickup <br />for samples and receive reports online</p>

        <button className="btn btn-primary" type="button" style={{ marginLeft: '250px' }}>Book Now</button>

      </div>
       <div>
        <img src={doctorImage} alt="Doctor" style={{ width: '400px', height: '400px',marginRight:'250px' }} />
       </div>
       
    </div>
    
     
  );
}

export default App;
