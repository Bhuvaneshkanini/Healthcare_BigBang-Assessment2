import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Adminnav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("jwttoken");
    setIsLoggedIn(token !== null);
  }, []);

  const handleSignOut = () => {
    sessionStorage.removeItem("jwttoken");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Doctorview"
                >
                  Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Patientview"
                >
                  Patients
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/addspecialization"
                >
                  Add Specialization
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/viewspecialization"
                >
                  View Specialization
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isLoggedIn ? (
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </button>
                  </Link>
                ) : (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    <button type="button" className="btn btn-primary">
                      Sign in
                    </button>
                  </Link>
                )}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
