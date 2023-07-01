import React, { useEffect, useState } from 'react';
import { Home } from './Home';

export function Doctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('http://localhost:5193/api/Doctor');
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <Home></Home>
      <h1>Doctors</h1>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.doctorId}>
            <li>{doctor.firstName}</li>
            <li>{doctor.lastName}</li>
            <li>{doctor.age}</li>
          </li>
        ))}
      </ul>
    </div>
  );
}

