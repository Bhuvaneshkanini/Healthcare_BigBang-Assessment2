import img from "../assets/image/content1.jpg";
import '@fortawesome/fontawesome-free/css/all.css';

export const Content = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <img className="w-100 h-100 rounded" src={img} alt="img" />
          </div>
          <div className="col-lg-7">
            <div className="mb-4">
              <h1 className="display-4">
                Best Medical Care For Yourself and Your Family
              </h1>
            </div>
            <p>
              we prioritize your well-being and strive to offer the highest
              level of medical expertise and compassion. Our qualified team of
              doctors and medical staff is committed to ensuring accurate
              diagnoses and providing efficient treatments. We believe in the
              importance of preventive care and promoting a healthy lifestyle.
              Our healthcare professionals are here not only to treat your
              existing medical conditions but also to guide you in maintaining
              optimal health and preventing future health issues.
            </p>
            <div className="row g-3 pt-3">
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                  <h6 className="mb-0">
                    Qualified
                    <small className="d-block text-primary">Doctors</small>
                  </h6>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                  <h6 className="mb-0">
                    Emergency
                    <small className="d-block text-primary">Services</small>
                  </h6>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                  <h6 className="mb-0">
                    Accurate
                    <small className="d-block text-primary">Testing</small>
                  </h6>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                  <h6 className="mb-0">
                    Free
                    <small className="d-block text-primary">Ambulance</small>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
