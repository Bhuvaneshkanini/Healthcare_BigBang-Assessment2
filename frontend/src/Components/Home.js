
import { Footer } from "./Footer";
import { Nav } from "./Nav";

import { ToastContainer } from "react-toastify";
import "../styles/home.css";
import { Content } from "./Content";
import { Contentlayout } from "./Contentlayout";
import { DoctorDataCards } from "./Doctor/DoctorDataCards";
import { Link } from "react-router-dom";

export const Home = () => {
  const token = sessionStorage.getItem("jwttoken");
  console.log(token);
  return (
    <div>
      <Nav></Nav>
      <ToastContainer />
      <div className="container-fluid bg-primary py-5 mb-5 background">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                Welcome To Healthcare
              </h5>
              <h1 className="display-1 text-white mb-md-4">
                Best Healthcare Solution In Your City
              </h1>
              <div className="pt-2">
                <Link
                  to="/doctor"
                  className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
                >
                  Find Doctor
                </Link>
                <a
                  href="#appointment"
                  className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
                >
                  Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Content></Content>

      <Contentlayout></Contentlayout>
      
      <Footer></Footer>
    </div>
  );
};
