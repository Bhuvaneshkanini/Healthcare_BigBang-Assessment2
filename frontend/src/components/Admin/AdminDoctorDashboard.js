import React, { useEffect, useState} from "react";
import { Adminnav } from "./adminnav";
import { Link } from "react-router-dom";

export const AdminDoctorDashboard = () => {
  const [Doctors, setDoctors] = useState([]);
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    fetchDoctors();
    fetchSpecializations();
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

  const fetchSpecializations = async () => {
    try {
      const response = await fetch("http://localhost:5193/api/Specialization");
      if (response.ok) {
        const data = await response.json();
        setSpecializations(data);
      } else {
        console.error("Error fetching specializations:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching specializations:", error);
    }
  };

  const getSpecializationName = (specializationId) => {
    //console.log(specializations)
    const specialization = specializations.find(spec => spec.specializationId === specializationId);
    return specialization ? specialization.name : '';
  };

  return (
    <div>
      <Adminnav />
      <h1>Welcome Admin</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Specialization</th>
            <th>View Pofile</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Doctors.map((Doctor) =>{
          //const specializationName = getSpecializationName(Doctor.specializationID);
          //console.log(specializationName)
          return(
            <tr key={Doctor.doctorId}>
              <td>{Doctor.doctorId}</td>
              <td>{Doctor.firstName}</td>
              <td>{Doctor.lastName}</td>
              <td>{Doctor.age}</td>
              <td>{Doctor.gender}</td>
              <td>{Doctor.phone}</td>
              <td>{getSpecializationName(Doctor.specializationID)}</td>
              <td>
                <Link to="/undercontruct">
                <button
                  className="btn btn-primary"
                >
                  View
                </button>
                </Link>
              </td>
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
          )})}
        </tbody>
      </table>
    </div>
  );
};
