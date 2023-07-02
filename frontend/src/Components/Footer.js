import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg col-md-12 mb-8 mb-md-0">
              <h5 className="text-uppercase">Footer Content</h5>

              <p>
                Place your footer content here. You can add any text or
                components.
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
                <li >
                  <a href="#!" className="text-dark">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg col-md-6 mb-4 mb-md-6">
              <h5 className="text-uppercase">Follow Us on</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Link 4
                  </a>
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
