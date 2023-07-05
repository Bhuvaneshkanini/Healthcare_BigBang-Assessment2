import React, { useEffect, useState } from "react";
import { Adminnav } from "./adminnav";

export const AdminPatientDashboard = () => {
  const [patients, setPatients] = useState([]);

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
        window.alert("Unauthorized");
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const deletePatient = async (patientId) => {
    try {
      let jwttoken = sessionStorage.getItem("jwttoken");
      const response = await fetch(
        `http://localhost:5193/api/Patient/${patientId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + jwttoken,
          },
        }
      );

      if (response.ok) {
        console.log("Patient deleted successfully");
        fetchPatients();
      } else {
        console.error("Error deleting patient:", response.statusText);
        window.alert("Failed to delete patient");
      }
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  return (
    <div>
      <Adminnav />
      <h1>Welcome Admin</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.patientId}>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.phone}</td>
              <td>{patient.email}</td>
              <td>{patient.address}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePatient(patient.patientId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
