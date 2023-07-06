import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg col-md-12 mb-8 mb-md-0">
              <h5 className="text-uppercase">Contact Us</h5>

              <p>
              Best Healthcare Solution In Your City
              </p>
              <p>
              Phone : 04027703521
              </p>
            </div>

            <div className="col-lg col-md-6 mb-4 mb-md-0 pl-lg-5">
              <h5 className="text-uppercase">Follow Us on</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg col-md-6 mb-4 mb-md-6">
              <h5 className="text-uppercase">Address</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  Street: 7-3-696, R P Road City: Hyderabad State/province/area:
                  Andhra Pradesh  Zip code 500003
                  Country calling code +91 Country India
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3 bg-light">
          &copy; {new Date().getFullYear()} Healthcare. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};
