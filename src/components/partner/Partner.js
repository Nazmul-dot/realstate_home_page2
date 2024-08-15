import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles,faBookmark,faShareFromSquare,faPaperPlane,faHandshake,faStethoscope } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Partner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, 
        settings: {
       
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="row my-5">
      <div
        className="col-10 mx-auto  pb-5"
        style={{ backgroundColor: "white" }}
      >
        <div className="d-flex justify-content-center  m-0 p-0 mb-4">
          <p className=" px-4 py-2 m-0 bg-black text-white">Partners</p>
        </div>
        <Slider {...settings}>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2 ">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              style={{ fontSize: "30px" }}
            />
            <h3>Graphicriver</h3>
          </div>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2 ">
            <FontAwesomeIcon
              icon={faBookmark}
              style={{ fontSize: "30px" }}
            />
            <h3>Photodune</h3>
          </div>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2 ">
            <FontAwesomeIcon
              icon={faShareFromSquare}
              style={{ fontSize: "30px" }}
            />
            <h3>Themeforest</h3>
          </div>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2 ">
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ fontSize: "30px" }}
            />
            <h3>Activeden</h3>
          </div>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2 ">
            <FontAwesomeIcon
              icon={faHandshake}
              style={{ fontSize: "30px" }}
            />
            <h3>Graphicriver</h3>
          </div>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2 ">
            <FontAwesomeIcon
              icon={faStethoscope}
              style={{ fontSize: "30px" }}
            />
            <h3>Videohive</h3>
          </div>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2 ">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              style={{ fontSize: "30px" }}
            />
            <h3>Graphicriver</h3>
          </div>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2  ">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              style={{ fontSize: "30px" }}
            />
            <h3>Graphicriver</h3>
          </div>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2  ">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              style={{ fontSize: "30px" }}
            />
            <h3>Graphicriver</h3>
          </div>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2  ">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              style={{ fontSize: "30px" }}
            />
            <h3>Graphicriver</h3>
          </div>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2  ">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              style={{ fontSize: "30px" }}
            />
            <h3>Graphicriver</h3>
          </div>
          <div className=" d-flex mx-2 justify-content-center align-items-center mx-2 px-2  ">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              style={{ fontSize: "30px" }}
            />
            <h3>Graphicriver</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Partner;
