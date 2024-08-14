import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXmark,
  faBed,
  faBath,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "./Card.css"; 
function StateCard({image,title,description,price}) {
  return (
    <>
      <div
        className="border border-1 col-12 col-md-6 mx-auto my-4  "
        style={{ maxWidth: "520px" }}
      >
        <h5 className="mt-2" style={{ fontFamily: "sans-serif" }}>
         {title}
        </h5>
        <div className="row p-3">
          <div className=" col-12 col-md-5 col-6 p-0 ">
            <img
              src={image}
              alt="House"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
            />
         
          </div>
          <div className=" col-md-7 col-12 p-0">
            <h5
              className="m-0 p-2"
              style={{
                fontFamily: "sans-serif",
                color: "white",
                backgroundColor: "#48b9dbee",
              }}
            >
              ${price} Per Month-Villa
            </h5>
            <p className="px-2">
            {description.substring(0,40)}... <span className="" style={{fontWeight:'500'}}>Know more</span>
            </p>
            <a
              href=""
              className="m-0 p-2"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              More Details
            </a>
          </div>
        </div>
        <div className="row mt-2 mb-auto" style={{ backgroundColor: "#d0d0d045" }}>
          <div className="col-3 border border-1 py-1">
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "15px",
                cursor: "default",
              }}
            >
              <FontAwesomeIcon icon={faSquareXmark} /> 2800 sq ft
            </a>
          </div>
          <div className="col-3 border border-1 py-1">
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "15px",
                cursor: "default",
              }}
            >
              <FontAwesomeIcon icon={faBed} /> 2 Bedrooms
            </a>
          </div>
          <div className="col-3 border border-1 py-1">
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "15px",
                cursor: "default",
              }}
            >
              <FontAwesomeIcon icon={faBath} /> Bathrooms
            </a>
          </div>
          <div className="col-3 border border-1 py-1">
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "15px",
                cursor: "default",
              }}
            >
              <FontAwesomeIcon icon={faHouse} /> Garages
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default StateCard;
