import React, { useEffect, useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faPhone,
  faEnvelope,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {    
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 580) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header-container">
      {/* This is Header Section */}
      <header className="row  m-0 p-0  pb-3">
        <div className="col-10 col-md-10  border-bottom mx-auto d-flex justify-content-between m-0 p-0">
          <div className=" d-flex align-items-center">
            <span className="p-2 " style={{color:'#d6daddea'}}>
              <FontAwesomeIcon icon={faEnvelope} className="me-1" />
              Email us at : info@helloworld.com{" "}
            </span>
          </div>
          <div className=" d-flex m-0 p-0 flex-wrap justify-content-center" style={{color:'#d6daddea'}}>
            <div className=" p-2 ">
              <FontAwesomeIcon icon={faRightToBracket} className="me-1" />
              login
            </div>
            <div className=" p-2 register">register</div>
            
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
            <div className=" p-2 ">
              <i class="bi bi-wifi"></i>
            </div>
          </div>
        </div>
      </header>
      {/* This is navbar Section */}
      <nav className=" nav-text " >
     
        <ul className={isOpen ? "showing" : ""} style={{ margin: "0",color:'#d6daddea' }}>
      
          <a href="#">
            <li className="pb-3 m-0" style={{color:'#d6daddea'}} >Home</li>
          </a>
          <a href="#">
            <li className="pb-3 m-0" style={{color:'#d6daddea'}}>Listing</li>
          </a>
          <a href="#">
            <li className="pb-3 m-0" style={{color:'#d6daddea'}}>News</li>
          </a>
          <a href="#">
            <li className="pb-3 m-0" style={{color:'#d6daddea'}}>IDX</li>
          </a>
          <a href="#">
            <li className="pb-3 m-0" style={{color:'#d6daddea'}}>Gallery</li>
          </a>
          <a href="#">
            <li className="pb-3 m-0" style={{color:'#d6daddea'}}>Pages</li>
          </a>
          <a href="#">
            <li className="pb-3 m-0" style={{color:'#d6daddea'}}>Types</li>
          </a>
          <a href="#">
            <li className="pb-3 m-0" style={{color:'#d6daddea'}}>Contact us</li>
          </a>
          <a href="#" className="">
            <li
              className="ml-3 ps-0 bg-info"
              style={{
                margin: "0px",
                fontSize: "20px",
                borderRadius: "0",
                paddingBottom: "16px",
              }}
              
            >
              <div className="">
                <span className=" p-3">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className="ps-2 pe-5 py-2">1-823-456-78</span>
              </div>
            </li>
          </a>
        </ul>
        <div className="handle" onClick={handleToggle}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} /> Menu
        </div>
      </nav>
    </div>
  );
}

export default Header;
