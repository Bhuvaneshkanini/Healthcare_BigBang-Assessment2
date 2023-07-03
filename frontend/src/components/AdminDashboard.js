import React, { useEffect, useState } from "react";
import { Adminnav } from "./adminnav";

export const AdminDashboard=()=>{

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
            console.error("Error fetching students:", response.statusText);
            window.alert("Unauthorized");
          }
        } catch (error) {
          console.error("Error fetching students:", error);
        }
      };

      //Update
const updateDoctor = async (DoctorId, updatedData) => {
    try {
      let jwttoken = sessionStorage.getItem("jwttoken");
      const response = await fetch(
        `http://localhost:5193/api/Doctor${DoctorId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwttoken,
          },
          body: JSON.stringify(updatedData),
        }
      );
  
      if (response.ok) {
        console.log("Doctor updated successfully");
        fetchDoctors();
      } else {
        console.error("Error updating Doctor:", response.statusText);
        window.alert("Failed to update Doctor");
      }
    } catch (error) {
      console.error("Error updating Doctor:", error);
    }
  };
    return(
        <div>
            <Adminnav></Adminnav>
            <h1>Welcome Admin</h1>
            <table className="table table-bordered">
        <thead>
          <tr>
            <td>FirstName</td>
            <td>lastName</td>
            <td>Age</td>
            <td>Gender</td>
            <td>City</td>
            <td>Specialization</td>
            <td>Status</td>
            <td>Delete</td>
            <td>Action</td>
          </tr>
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
        updateDoctor(Doctor.doctorId, {
          ...Doctor,
          status: Doctor.status === "Active" ? "Inactive" : "Active",
        })
      }
    >
      {Doctor.status}
    </button>
  </td>
              <td>
              <button
                  className={`btn btn-${
                    Doctor.status === "Active" ? "success" : "warning"
                  }`}
                  onClick={() =>
                    updateDoctor(Doctor.doctorId, {
                      ...Doctor,
                      firstName: Doctor.firstName,
                      lastName: Doctor.firstName,
                      age: Doctor.age,
                      city: Doctor.city,
                      specialization: Doctor.specialization,
                      status: Doctor.status === "Active" ? "Inactive" : "Active",
                    })
                  }
                  
                >
                  {Doctor.status}
                </button>
              </td>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
        </div>
    )
}