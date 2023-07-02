import React, { useContext } from 'react';
import { DoctorContext } from './DoctorData';

const MyCard = () => {
  const doctors = useContext(DoctorContext);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {doctors.map((doctor) => (
          <div key={doctor.doctorId} className="col">
            <div className="card custom-card" style={{ width: '25rem' }}>
              <img
                src={`data:image/jpeg;base64,${doctor.image}`}
                className="card-img-top"
                alt="Doctor"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {doctor.firstName} {doctor.lastName}
                </h5>
                <p className="card-text">Specialization: {doctor.specialization}</p>
                <p className="card-text">Education: {doctor.education}</p>
                <p className="card-text">Experience: {doctor.experience} years</p>
              </div>
              <div className="card-footer">
                <div className="card-buttons">
                  <button className="btn btn-primary custom-button">View Profile</button>
                  <button className="btn btn-secondary custom-button">Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCard;
