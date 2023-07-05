import React from "react";
import { Link } from "react-router-dom";

export const UnauthorizedPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title">Unauthorized</h1>
            </div>
            <div className="card-body">
              <p>You are not authorized to access this page.</p>
              <p>Please <Link to="/">click here</Link> to go back to the homepage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
