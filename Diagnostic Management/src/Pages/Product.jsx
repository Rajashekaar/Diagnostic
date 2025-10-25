import React from 'react';
import doctorImage from '../assets/adobe.png';
import './Product.css';

function Product() {
  return (
  <div >
    <div className="doc ">
      <div className="container doc-content mt-5">
        <div className="doc-text">
          
          <h1>
            Get Diagnostic Tests & Health Checkups Done
          </h1>
          <p className="lead">
            Book a hassle-free lab visit or home pickup for samples and receive
            reports online.
          </p>
        
          <div className="doc-cta">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>

        <div className="doc-image">
          <img src={doctorImage} alt="Doctor " />
        </div>

    
      </div>

       
      
    </div>
    

         <div className="info-head ms-md-5 p-4 p-md-5 t">
            <h2 className=" text-center mb-4 fs-1 fw-bold ">Why Choose Us?</h2>
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title text-info">Ethical Work</h5>
                      <p className="card-text">
                        We believe healthcare should be built on trust. Every interaction is guided by honesty, transparency, and respect—because your well-being deserves nothing less than ethical excellence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title text-info">Experienced Team</h5>
                      <p className="card-text">
                       Our team brings together years of hands-on experience, medical insight, and compassionate care. From diagnostics to delivery, you’re supported by professionals who truly understand your needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title text-info">Affordable & Accurate</h5>
                      <p className="card-text">
                        Quality care shouldn’t come at a premium. We offer precise diagnostics and reliable service at prices that make sense—so you can focus on your health, not your budget.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="services-section py-5 ">
            <h2 className="text-center mb-4 fs-1 fw-bold">Our Services</h2>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                <div className="col">
                  <div className="service-card p-4 text-center shadow-sm h-100">
                    <h3>Blood Tests</h3>
                    <p>From routine screenings to specialized diagnostics, our blood test services are designed for accuracy and ease. With home sample collection, you get trusted results without stepping out.</p>
                  </div>
                </div>
                <div className="col">
                  <div className="service-card p-4 text-center shadow-sm h-100">
                    <h3>Urine Tests</h3>
                    <p>Whether it's for general health monitoring or specific conditions, our urine testing is quick, confidential, and convenient. We collect samples from your doorstep and deliver results online.</p>
                  </div>
                </div>
                <div className="col">
                  <div className="service-card p-4 text-center shadow-sm h-100">
                    <h3>X-Ray</h3>
                    <p>Need imaging without the hospital hassle? Our portable X-ray service brings diagnostic clarity to your home. Safe, fast, and interpreted by experienced radiologists.</p>
                  </div>
                </div>
                <div className="col">
                  <div className="service-card p-4 text-center shadow-sm h-100">
                    <h3>ECG</h3>
                    <p>Stay ahead of your health with personalized checkup packages. From basic vitals to full-body assessments, we make preventive care simple and accessible—right from your living room.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            
          
      
</div>
    
  );
}

export default Product;