import React from "react";
import "./mainbody.css";
import SearchSection from "./searchsection/SearchSection";
import RealtState from "./realState/RealtState";
import Feature from "./feature/Feature";
function MainBody() {
  return (
    <div className="full_body mb-3">
      <div className="row">
        {/* This is search section */}
        <div className="col-10 mx-auto  main_body pt-5">
          <SearchSection></SearchSection>
        </div>
        <div className="col-10 mx-auto  main_body pt-5 gradient-background text-center px-5"  style={{fontFamily:'"Times New Roman", Times, serif'}}>
          <h1>We are Offering Best Real Estate Deals</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            veritatis expedita vel fuga magni, quaerat aliquam vero adipisci
            aspernatur! Veritatis. expedita vel fuga magni, quaerat aliquam vero
            adipisci aspernatur! Veritatis. expedita vel fuga magni, quaerat
           
          </p>
        </div>
        {/* This is Real State Section */}
        <div className="col-10 mx-auto  main_body pt-5">
          <RealtState></RealtState>
        </div>
        {/* This is Feature Section */}
        <div className="col-10 mx-auto  main_body pt-5">
          <Feature></Feature>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
