import React, { useEffect, useState } from "react";
import { Adminnav } from "./adminnav";

const ViewSpecializations = () => {
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    fetchSpecializations();
  }, []);

  const fetchSpecializations = async () => {
    try {
      const response = await fetch("http://localhost:5193/api/Specialization");
      if (response.ok) {
        const data = await response.json();
        setSpecializations(data);
      } else {
        console.error("Error fetching specializations:", response.statusText);
        window.alert("Failed to fetch specializations");
      }
    } catch (error) {
      console.error("Error fetching specializations:", error);
    }
  };

  return (
    <div>
        <Adminnav></Adminnav>
      <h1>Specializations</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {specializations.map((specialization) => (
            <tr key={specialization.specializationId}>
              <td>{specialization.specializationId}</td>
              <td>{specialization.name}</td>
              <td>{specialization.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSpecializations;
