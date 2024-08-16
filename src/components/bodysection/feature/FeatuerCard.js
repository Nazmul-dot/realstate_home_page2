import React from "react";
import "./FeatuerCard.css"; // Import the CSS file for the hover effect

function FeatuerCard({ image, title, price, description }) {
  return (
    <>
      <div
        className="col-12 col-md-3 mx-auto my-2 card-container"
        style={{ width: "18rem" }}
      >
        <div
          className="row p-3"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          <div className="col-12 p-0">
            <img
              src={image}
              alt="House"
              className="img-fluid w-100"
              style={{
                objectFit: "cover",
                height: "200px", // Ensure a fixed height for the image
              }}
            />
          </div>
          <div className="col-12 p-0 m-0">
            <h5 className=" mb-2 card-title my-2" >{title}</h5>
            <p className="p-0 fw-lighter">
              <span className="card-subtitle text-muted">
                {description.substring(0, 40)}...{" "}
              </span>
              <span className="" style={{ fontWeight: "550" }}>
                Know more
              </span>
            </p>
            <button
              className="fw-lighter px-2 py-1 btn btn-info"
              style={{
                borderRadius: "0",
                textDecoration: "none",
                color: "white",
                backgroundColor: "rgba(208, 208, 208, 0.27) !important",
                textAlign: "left",
                display: "block",
                fontWeight: 700,
              }}
            >
              ${price} Per Month
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatuerCard;
