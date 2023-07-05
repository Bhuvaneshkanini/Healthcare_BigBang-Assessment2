import React, { useEffect, useState } from 'react';
import { Nav } from '../Nav';
import { useNavigate } from 'react-router-dom';

export const PatientDashboard = () => {
  const [patients, setPatients] = useState([]);

  const UseNavigate=useNavigate();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      let jwttoken = sessionStorage.getItem("jwttoken");
      const response = await fetch("http://localhost:5193/api/Patient", {
        headers: {
          Authorization: "bearer " + jwttoken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setPatients(data);
      } else {
        console.error("Error fetching patients:", response.statusText);
        UseNavigate("/unauthorized");
        //window.alert("Unauthorized");
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  return (
    <div>
      <Nav/>
      <h1>Welcome Patient</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.patientId}>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>{patient.age}</td>
              <td>{patient.email}</td>
              <td>{patient.phone}</td>
              <td>{patient.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
