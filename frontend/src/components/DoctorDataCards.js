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
      const response = await fetch("http://localhost:5193/api/Doctor");
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.log(error);
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
        <h2 className="display-4" id="appointment">
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
