import React from "react";
import "./homebg.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function HomeBg() {
  return (
    <>
      <div className="background-image">
        <div className="overlay-content">
          <div className="card-container" >
            <div className="card-content" style={{borderRadius:0}}>
              <h4>15421 Southwest 39th Tarreck</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              </p>
              <p className="text-danger fs-4 p-0 m-0">3859 Per Month</p>
            </div>
            <button className="btn btn-info" style={{ borderRadius: "0" }}>
              Click Me
            </button>
          </div>
        </div>
        <div className="find-section">
          <div className="bg-black text-white p-2">
            <span className="me-4"> <FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            <span>Find Your Home</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBg;
