import React, { useEffect, useState } from "react";
import { Adminnav } from "./adminnav";

export const AdminDashboard = () => {
  const [Doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      let jwttoken = sessionStorage.getItem("jwttoken");
      const response = await fetch("http://localhost:5193/api/Doctor", {
        headers: {
          Authorization: "bearer " + jwttoken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setDoctors(data);
      } else {
        console.error("Error fetching doctors:", response.statusText);
        window.alert("Unauthorized");
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const data = {};

  const doctorData = {
    doctorId: 6,
    firstName: "string",
    lastName: "string",
    age: 0,
    gender: "string",
    specializationID: 2,
    email: "string",
    phone: "string",
    education: "string",
    experience: 0,
    address: "string",
    description: "string",
    Status: "Inactive",
  };

  const updateDoctorStatus = async (DoctorId, updatedStatus) => {
    console.log(updatedStatus);
    try {
      let jwttoken = sessionStorage.getItem("jwttoken");
      const response = await fetch(
        `http://localhost:5193/api/Doctor/${DoctorId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwttoken,
          },
          body: JSON.stringify(updatedStatus),
        }
      );

      if (response.ok) {
        console.log("Doctor status updated successfully");
        setDoctors((prevDoctors) => {
          const updatedDoctors = prevDoctors.map((doctor) => {
            if (doctor.doctorId === DoctorId) {
              return { ...doctor, ...updatedStatus };
            }
            return doctor;
          });
          return updatedDoctors;
        });
      } else {
        console.error("Error updating Doctor status:", response.statusText);
        window.alert("Failed to update Doctor status");
      }
    } catch (error) {
      console.error("Error updating Doctor status:", error);
    }
  };

  const deleteDoctor = async (DoctorId) => {
    try {
      let jwttoken = sessionStorage.getItem("jwttoken");
      const response = await fetch(
        `http://localhost:5193/api/Doctor/${DoctorId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + jwttoken,
          },
        }
      );

      if (response.ok) {
        console.log("Doctor deleted successfully");
        fetchDoctors();
      } else {
        console.error("Error deleting Doctor:", response.statusText);
        window.alert("Failed to delete Doctor");
      }
    } catch (error) {
      console.error("Error deleting Doctor:", error);
    }
  };

  const updateDoctor = async (DoctorId, updatedData) => {
    // Implement the updateDoctor functionality
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
            <th>City</th>
            <th>Specialization</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Doctors.map((Doctor) => (
            <tr key={Doctor.doctorId}>
              <td>{Doctor.firstName}</td>
              <td>{Doctor.lastName}</td>
              <td>{Doctor.age}</td>
              <td>{Doctor.gender}</td>
              <td>{Doctor.city}</td>
              <td>{Doctor.specialization}</td>
              <td>{Doctor.status}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteDoctor(Doctor.doctorId)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className={`btn btn-${
                    Doctor.status === "Active" ? "success" : "warning"
                  }`}
                  onClick={() =>
                    updateDoctorStatus(Doctor.doctorId, {
                      ...Doctor,
                      status:
                        Doctor.status === "Active" ? "Inactive" : "Active",
                    })
                  }
                >
                  {Doctor.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
