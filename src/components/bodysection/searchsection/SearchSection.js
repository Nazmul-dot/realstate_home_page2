import React from "react";
import "./search.css";
function SearchSection() {
  return (
    <div className="m-0 p-0">
      {/* First search section */}
      <div className="row">
        <div className="col-md-3 col-5 mx-auto  mt-1">
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-start"
            >
              Property Id
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Any"
              style={{borderRadius:'0'}}
            />
          </div>
        </div>

        <div className="col-md-3 col-5 mx-auto  mt-1">
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlSelect1"
              className="form-label text-start"
            >
              Property Location
            </label>
            <select
             style={{borderRadius:'0'}}
              className="form-select"
              id="exampleFormControlSelect1"
              aria-label="Default select example"
            >
              <option value="0">Any</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-md-3 col-5 mx-auto  mt-1">
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlSelect2"
              className="form-label text-start"
            >
             Property Status
            </label>
            <select
             style={{borderRadius:'0'}}
              className="form-select"
              id="exampleFormControlSelect2"
              aria-label="Default select example"
            >
              <option value="0">Any</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-md-3 col-5 mx-auto  mt-1">
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlSelect3"
              className="form-label text-start"
            >
              Property Type
            </label>
            <select
             style={{borderRadius:'0'}}
              className="form-select"
              id="exampleFormControlSelect3"
              aria-label="Default select example"
            >
              <option value="0">Any</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>

      {/* Second search section */}

      <div className="container mt-3">
        <div className="row">
          <div className="custom-col mx-auto  mt-1">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlSelect3"
                className="form-label text-start"
              >
                Min Beds
              </label>
              <select
               style={{borderRadius:'0'}}
                className="form-select"
                id="exampleFormControlSelect3"
                aria-label="Default select example"
              >
                <option value="0">Any</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="custom-col mx-auto  mt-1">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlSelect3"
                className="form-label text-start"
              >
               Min Baths
              </label>
              <select
               style={{borderRadius:'0'}}
                className="form-select"
                id="exampleFormControlSelect3"
                aria-label="Default select example"
              >
                <option value="0">Any</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="custom-col mx-auto  mt-1">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlSelect3"
                className="form-label text-start"
              >
              Min Price
              </label>
              <select
               style={{borderRadius:'0'}}
                className="form-select"
                id="exampleFormControlSelect3"
                aria-label="Default select example"
              >
                <option value="0">Any</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="custom-col mx-auto  mt-1">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlSelect3"
                className="form-label text-start"
              >
                Max Price
              </label>
              <select
               style={{borderRadius:'0'}}
                className="form-select"
                id="exampleFormControlSelect3"
                aria-label="Default select example"
              >
                <option value="0">Any</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="custom-col mx-auto  mt-1">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlSelect3"
                className="form-label text-start"
              >
                Min Area
              </label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Any"  style={{borderRadius:'0'}} />
            </div>
          </div>
          <div className="custom-col mx-auto  mt-1">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlSelect3"
                className="form-label text-start"
              >
                Max Area
              </label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Any"  style={{borderRadius:'0'}}/>
            </div>
          </div>

          <div className="custom-col  mt-1">
            <div className=" my-auto mt-4">
            <input type="submit" class="btn btn-warning mt-2" style={{width:'100%',borderRadius:0}} id="exampleFormControlInput1"  />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchSection;
