import React, { createContext, useEffect, useState } from "react";
import MyCard, { Cardone } from "./Card";
import { AdminDoctorDashboard } from "../Admin/AdminDoctorDashboard";
import { useNavigate } from "react-router-dom";

export const DoctorContext = createContext();

export function DoctorDataCards() {
  const [doctors, setDoctors] = useState([]);
  const UseNavigate=useNavigate();
  const val=1;
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
        UseNavigate("/unauthorized")
        //window.alert("Unauthorized");
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };
  console.log(doctors.length);
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
      {doctors.length > 0 ? (
        
        <DoctorContext.Provider value={doctors}>
          <MyCard />
        </DoctorContext.Provider>
      ) : (
        <p>No doctors available.</p>
      )}
    </div>
  );
}
