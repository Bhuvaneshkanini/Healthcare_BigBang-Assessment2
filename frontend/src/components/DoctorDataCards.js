import React, { createContext, useEffect, useState } from "react";
import { Home } from "./Home";
import MyCard, { Cardone } from "./Card";

export const DoctorContext = createContext();

export function DoctorDataCards() {
  const [doctors, setDoctors] = useState([]);

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

  return (
    <div>
      <div className="mb-4">
        <h1 className="display-4">
          Best Medical Care For Yourself and Your Family
        </h1>
      </div>
      <div className="mb-4">
        <h2 className="display-4">
          Choose The Best Doctors
        </h2>
      </div>
      {/*<ul>
        {doctors.map(doctor => (
          <li key={doctor.doctorId}>
            <li>{doctor.firstName}</li>
            <li>{doctor.lastName}</li>
            <li>{doctor.age}</li>
          </li>
        ))}
        </ul>*/}
      <DoctorContext.Provider value={doctors}>
        <MyCard></MyCard>
      </DoctorContext.Provider>
    </div>
  );
}
