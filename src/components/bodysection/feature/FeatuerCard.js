import React from "react";

function FeatuerCard({image,title,price,description}) {
  return (
    <>
      <div
        className=" col-12 col-md-3 mx-auto my-2 "
        style={{ width: "18rem" }}
      >
        <div className="row p-3">
          <div className=" col-12 col-6 p-0">
            <img
              src={image}
              alt="House"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className=" col-12 p-0 m-0">
          <h5 class="card-subtitle mb-2 text-muted my-2">{title}</h5>
            <p className="p-0">
             {description.substring(0,40)}... <span className="" style={{fontWeight:'500'}}>Know more</span>
            </p>
            <button
              className="fw-lighter  p-1 btn btn-info"
              style={{
                borderRadius: "0",
                textDecoration: "none",
                color: "white",
                // fontSize: "14px",
                backgroundColor: "rgba(208, 208, 208, 0.27) !important",
                textAlign: "left", 
                display: "block", 
                fontWeight:700
              }}
            >
              ${price} per month
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatuerCard;
