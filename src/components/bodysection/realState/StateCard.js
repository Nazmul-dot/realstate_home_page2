import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXmark,
  faBed,
  faBath,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

function StateCard({ image, title, description, price }) {
  return (
    <div className="col-12 col-md-6 col-lg-6 my-3">
      <div className="card h-100" style={{ borderRadius: 0 }}>
        <h5 className="card-title p-2" style={{ fontFamily: "sans-serif" }}>
          {title}
        </h5>
        <div className="d-flex flex-column flex-lg-row m-0 p-0 p-md-2">
          <div className="col-lg-6 p-0 m-0 position-relative">
            {/* Image container */}
            <img
              src={image}
              alt="House"
              className="img-fluid"
              style={{ objectFit: "cover", borderRadius: 0 }}
            />
            {/* Button in bottom-right corner */}
            <a
              href="#"
              className="btn position-absolute bottom-0 end-0 p-1"
              style={{ zIndex: 1,borderRadius:0,pointerEvents: 'none',backgroundColor:'#ff7b00de',color:'white' }}
            >
              For Sale
            </a>
          </div>
          <div className="col-lg-6 card-body p-0 m-0 mb-2">
            <h6
              className="card-subtitle"
              style={{
                fontFamily: "sans-serif",
                color: "white",
                backgroundColor: "#4FC3F7",
                padding: "5px",
                margin: 0,
              }}
            >
              ${price} Per Month - Villa
            </h6>
            <p className="card-text ps-3">
              {description.substring(0, 40)}...{" "}
              <span style={{ fontWeight: "500" }}>Know more</span>
            </p>
            <a
              href=""
              className="card-link ps-3 my-2 mb-2"
              style={{ color: "inherit", textDecoration: 'none' }}
            >
              More Details
            </a>
          </div>
        </div>
        <div className="card-footer bg-light d-flex justify-content-between">
          <span>
            <FontAwesomeIcon icon={faSquareXmark} /> 2800 sq ft
          </span>
          <span>
            <FontAwesomeIcon icon={faBed} /> 2 Bedrooms
          </span>
          <span>
            <FontAwesomeIcon icon={faBath} /> Bathrooms
          </span>
          <span>
            <FontAwesomeIcon icon={faHouse} /> Garages
          </span>
        </div>
      </div>
    </div>
  );
}

export default StateCard;
