import React from 'react'
import picture from "../assets/picture-cropped.png";

function Main() {
  return (
    <main>
      <div className="main-text">
        <h1>Governor Sindh</h1>
        <h2>Kamran Khan Tessori</h2>
        <h2>
          Certified Cloud Applied Generative AI Engineer (GenEng)
        </h2>
        <p>Earn up to $5,000 / month</p>
        <p>Now admissions are open in Hyderabad</p>
        <div className="apply-button">
        <button>Apply Now</button>
        <span>562,143 <p>Accepted Applicants</p></span>
        </div>
      </div>
      
      <img src={picture} alt="picture" className="main-image" />
    </main>
  );
}

export default Main