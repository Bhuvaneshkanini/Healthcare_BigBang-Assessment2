import React, { useState } from "react";
import { Adminnav } from "./adminnav";

const AddSpecialization = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const specializationData = {
      name: name,
      description: description
    };

    fetch("http://localhost:5193/api/Specialization", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(specializationData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Specialization added successfully");
          // Reset the form
          setName("");
          setDescription("");
        } else {
          console.error("Error adding specialization:", response.statusText);
          window.alert("Failed to add specialization");
        }
      })
      .catch((error) => {
        console.error("Error adding specialization:", error);
      });
  };

  return (
    <div>
        <Adminnav></Adminnav>
      <h1>Add Specialization</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={handleDescriptionChange} />
        </div>
        <button type="submit">Add Specialization</button>
      </form>
    </div>
  );
};

export default AddSpecialization;
