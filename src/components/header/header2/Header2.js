// import { faStethoscope,faBars, faTimes } from "@fortawesome/free-solid-svg-icons/faStethoscope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faPhone,
  faEnvelope,
  faRightToBracket,
  faUser,
  faStethoscope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./header2.css";
function Header2() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="p-0 m-0 header-container"  style={{fontFamily:'"Times New Roman", Times, serif'}}>
        <header className="row  m-0 p-0  pb-3 bg-dark" >
          <div className="col-10 col-md-10   border-bottom mx-auto d-flex justify-content-between m-0 p-0" >
            <div className=" d-flex align-items-center" style={{marginLeft:'-10px'}}>
              <span className="p-2 " style={{ color: "#d6daddea" }}>
                <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                Email us at : info@helloworld.com{" "}
              </span>
            </div>
            <div
              className=" d-flex m-0 p-0 flex-wrap  justify-content-center"
              style={{ color: "#d6daddea" }}
            >
              <div className="d-flex p-0 " style={{marginLeft:'-20px',marginTop:'6px'}}>
                <div className="p-2 login-div d-flex align-items-center">
                  <FontAwesomeIcon icon={faRightToBracket} className="me-1" />
                  login
                </div>
                <div className="p-2 register d-flex align-items-center">
                  register
                </div>
              </div>

              <div className="d-flex head-logo p-0">
                <div className=" p-2 ">
                  <i class="bi bi-facebook"></i>
                </div>
                <div className=" p-2 ">
                  <i class="bi bi-twitter"></i>
                </div>
                <div className=" p-2 ">
                  <i class="bi bi-linkedin"></i>
                </div>
                <div className=" p-2 ">
                  <i class="bi bi-google"></i>
                </div>
                <div className=" p-2 me-3">
                  <i class="bi bi-wifi"></i>
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 m-0">
          <div className="container-fluid p-0 m-0">
            <a className="navbar-brand logo-section pb-1 pt-0 mt-0" href="#">
              <FontAwesomeIcon icon={faHouse} size="3x" />
              <span style={{ fontWeight: "bold", marginLeft: "-12px",fontFamily:'"Times New Roman", Times, serif' }}>
                REAL
              </span>
              <span style={{fontFamily:'"Times New Roman", Times, serif'}}>HOMES</span>
            </a>
            <button
              className="navbar-toggler me-3"
              type="button"
              onClick={handleToggle}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars}  style={{fontSize:'30px'}}/>
            </button>
            <div
              className="collapse navbar-collapse pt-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-0" style={{fontFamily:'"Times New Roman", Times, serif'}}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" >
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    Listing
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    News
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    IDX
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    Pages
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    Types
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contact
                  </a>
                </li>
                <li
                  className=" nav-link active p-0 pt-2 m-0"
                  style={{ padding: "-5px", marginBottom: "-10px" }}
                >
                  <span className=" pe-3 m-0 contarct-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span className=" pe-5 m-0 contact-num">1-234-234-2234</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header2;
