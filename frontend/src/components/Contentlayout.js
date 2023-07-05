import { Link } from "react-router-dom";
import content2 from "../assets/image/content2.jpg";
export const Contentlayout = () => {
  return (
    <div className="container-fluid bg-primary my-5 py-5">
      <div className="container py-5">
        <div className="row gx-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="mb-4">
              <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">
                Great Doctors
              </h5>
              <h1 className="display-4">Make An Appointment For Your Family</h1>
            </div>
            <p className="text-white mb-5">
              we prioritize your well-being and strive to offer the highest
              level of medical expertise and compassion. Our qualified team of
              doctors and medical staff is committed to ensuring accurate
              diagnoses and providing efficient treatments. We believe in the
              importance of preventive care and promoting a healthy lifestyle.
              Our healthcare professionals are here not only to treat your
              existing medical conditions but also to guide you in maintaining
              optimal health and preventing future health issues.
            </p>
            <Link
              className="btn btn-dark rounded-pill py-3 px-5 me-3"
              to="/doctor"
            >
              Find Doctor
            </Link>
            <a
              className="btn btn-outline-dark rounded-pill py-3 px-5"
              href="#appointment"
            >
              Appointment
            </a>
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center rounded p-5">
              <h1 className="mb-4">Book An Appointment</h1>
              <div className="col-lg-12 mb-5 mb-lg-0">
            <img className="w-100 h-100 rounded" src={content2} alt="img" />
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
