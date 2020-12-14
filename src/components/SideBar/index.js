import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="col-md-4">

      {/* Search From */}
      <div className="card mb-4">
        <h5 className="card-header">Search</h5>
        <div className="card-body">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-append">
              <button className="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="card my-4">
        <h5 className="card-header">Categories</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/blog">Javascript</Link>
                </li>
                <li>
                  <Link to="/blog">ReactJS</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/blog">Java</Link>
                </li>
                <li>
                  <Link to="/blog">Spring Boot</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}