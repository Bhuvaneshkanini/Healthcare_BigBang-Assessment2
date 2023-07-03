import React, { useContext, useEffect, useState } from 'react';
import { DoctorContext } from './DoctorDataCards';
import '../styles/card.css';

const MyCard = () => {
  const doctors = useContext(DoctorContext);

  const [specializations, setSpecializations] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:5193/api/Specialization')
      .then(response => response.json())
      .then(data => setSpecializations(data))
      .catch(error => console.log(error));
  }, []);

  const handleSpecializationChange = (event) => {
    setSelectedSpecialization(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getSpecializationName = (specializationId) => {
    const specialization = specializations.find(spec => spec.specializationId === specializationId);
    return specialization ? specialization.name : '';
  };

  const filteredDoctors = doctors.filter(doctor => {
    const isActive = doctor.status === 'Active';
    const isSpecializationMatch = selectedSpecialization === '' || doctor.specializationID === parseInt(selectedSpecialization);
    const isNameMatch = searchQuery === '' || doctor.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || doctor.lastName.toLowerCase().includes(searchQuery.toLowerCase());
    return isActive && isSpecializationMatch && isNameMatch;
  });

  return (
    <div className="container">
      <div className="filter">
        <label htmlFor="specializationFilter" class="form-label label-left">Filter by Specialization:</label>
        <select id="specializationFilter" value={selectedSpecialization} onChange={handleSpecializationChange} class="form-select">
          <option value="">All</option>
          {specializations.map(spec => (
            <option key={spec.specializationId} value={spec.specializationId}>
              {spec.name}
            </option>
          ))}
        </select>
      </div>

      <div className="filter">
        <div class="mb-3">
          <label class="form-label">Search by Name:</label>
          <input
            id="searchQuery"
            class="form-control"
            type="text"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            placeholder="Enter name..."
          />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredDoctors.map((doctor) => {
          const specializationName = getSpecializationName(doctor.specializationID);
          return (
            <div key={doctor.doctorId} className="col">
              <div className="card custom-card" style={{ width: '20rem' }}>
                <img
                  src={`data:image/jpeg;base64,${doctor.image}`}
                  className="card-img-top"
                  style={{ height: '15rem' }}
                  alt="Doctor"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {doctor.firstName} {doctor.lastName}
                  </h5>
                  <p className="card-text">Specialization: {specializationName}</p>
                  <p className="card-text">Specialization: {doctor.specializationID}</p>
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
          )
        })}
      </div>
    </div>
  );
};

export default MyCard;
