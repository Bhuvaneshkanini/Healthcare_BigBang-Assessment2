import React, { useEffect, useState } from 'react';

export const Doctordash = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors data from API or database
    // For example:
    fetch('http://localhost:5193/api/Doctor')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Welcome Doctor</h1>
      <div>
        {doctors.map(doctor => (
          <div key={doctor.id}>
            <h3>{doctor.name}</h3>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience: {doctor.experience} years</p>
          </div>
        ))}
      </div>
    </div>
  );
};
